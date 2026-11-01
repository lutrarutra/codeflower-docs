// Writes the reference data the docs render (src/data/*.json) from the other
// components, at the versions the workspace pins. The workspace's `make site-gen`
// runs it after codeflower-app's cmd/gendocs (CLI pages, config schema, presets,
// app.json):
//
//   node scripts/gen.ts --app ../app --sandbox ../sandbox --extension ../extension \
//     --ui ../ui --storyteller ../storyteller --tunnel ../tunnel
//
// Generated files are committed; never edit them by hand.

import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parseArgs } from 'node:util';

const { values } = parseArgs({
  options: {
    app: { type: 'string', default: '../app' },
    sandbox: { type: 'string', default: '../sandbox' },
    extension: { type: 'string', default: '../extension' },
    ui: { type: 'string', default: '../ui' },
    storyteller: { type: 'string', default: '../storyteller' },
    tunnel: { type: 'string', default: '../tunnel' },
    out: { type: 'string', default: 'src/data' },
  },
});
const path = (name: keyof typeof values) => resolve(values[name]!);
const out = resolve(values.out!);
mkdirSync(out, { recursive: true });

const readJSON = (file: string) => JSON.parse(readFileSync(file, 'utf8'));
const write = (name: string, value: unknown) =>
  writeFileSync(join(out, name), JSON.stringify(value, null, 2) + '\n');

/** The release a checkout is at (its latest tag), as the ship skill tags them. */
function release(dir: string): string {
  try {
    return execFileSync('git', ['-C', dir, 'describe', '--tags', '--abbrev=0'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return 'dev';
  }
}

/** Simple `key: value` frontmatter, as the chat actions use. */
function frontmatter(text: string): Record<string, string> {
  const match = /^---\n([\s\S]*?)\n---/.exec(text);
  const fields: Record<string, string> = {};
  for (const line of match?.[1].split('\n') ?? []) {
    const [key, ...rest] = line.split(':');
    if (rest.length) fields[key.trim()] = rest.join(':').trim();
  }
  return fields;
}

// Agents: the descriptors the app embeds (copied from the sandbox it pins).
const descriptors = join(path('app'), 'internal/agents/descriptors');
const agents = readdirSync(descriptors)
  .filter((file) => file.endsWith('.json'))
  .map((file) => readJSON(join(descriptors, file)))
  .sort((a, b) => a.order - b.order)
  .map((agent) => ({
    id: agent.id,
    name: agent.name,
    description: agent.description,
    credentialVariables: agent.credentialVariables ?? [],
    providerHosts: agent.providerHosts ?? [],
    costEstimate: Boolean(agent.costEstimate),
  }));
write('agents.json', agents);

// Chat actions: the image's templates/actions/*.md.
const actionsDir = join(path('sandbox'), 'templates/actions');
const actions = readdirSync(actionsDir)
  .filter((file) => file.endsWith('.md'))
  .sort()
  .map((file) => {
    const fields = frontmatter(readFileSync(join(actionsDir, file), 'utf8'));
    return { title: fields.title, description: fields.description, mode: fields.mode ?? 'queue' };
  });
write('actions.json', actions);

// The VS Code extension's commands and settings.
const extension = readJSON(join(path('extension'), 'package.json'));
const contributes = extension.contributes ?? {};
const hidden = new Set(
  (contributes.menus?.commandPalette ?? [])
    .filter((entry: { when?: string }) => entry.when === 'false')
    .map((entry: { command: string }) => entry.command),
);
const configuration = [contributes.configuration ?? []].flat();
write('extension.json', {
  id: `${extension.publisher}.${extension.name}`,
  commands: (contributes.commands ?? []).map((command: { command: string; title: string; category?: string }) => ({
    id: command.command,
    title: command.title,
    palette: !hidden.has(command.command),
  })),
  settings: configuration.flatMap((section: { properties?: Record<string, any> }) =>
    Object.entries(section.properties ?? {}).map(([key, setting]) => ({
      key,
      type: setting.type,
      default: setting.default,
      description: setting.markdownDescription ?? setting.description ?? '',
    })),
  ),
});

// What each release pins: the app's own data (from gendocs) plus the image's.
const app = readJSON(join(out, 'app.json'));
const dockerfile = readFileSync(join(path('sandbox'), 'Dockerfile'), 'utf8');
const pinned = (repository: string) =>
  new RegExp(`github\\.com/lutrarutra/${repository}\\.git#(v[\\w.-]+)`).exec(dockerfile)?.[1] ?? 'unknown';
const runtime = readJSON(join(path('sandbox'), 'package.json'));
const runtimes = { ...runtime.dependencies, ...runtime.optionalDependencies };
const protocol = /export const PROTOCOL = (\d+);/.exec(
  readFileSync(join(path('tunnel'), 'src/version.ts'), 'utf8'),
)?.[1];
write('versions.json', {
  app: app.version,
  sandbox: release(path('sandbox')),
  sandboxImage: `${app.image}:${app.imageTag}`,
  ui: pinned('codeflower-ui'),
  storyteller: pinned('storyteller'),
  extension: release(path('extension')),
  tunnel: release(path('tunnel')),
  tunnelProtocol: Number(protocol),
  claudeAgentSdk: /ARG CLAUDE_AGENT_SDK_VERSION=([\w.-]+)/.exec(dockerfile)?.[1] ?? 'unknown',
  agents: {
    claude: runtimes['@agentclientprotocol/claude-agent-acp'],
    codex: runtimes['@openai/codex'],
    codexAcp: runtimes['@agentclientprotocol/codex-acp'],
    dsh: runtimes['@deepseek-ai/dsh'],
    opencode: runtimes['opencode-linux-x64-baseline'],
  },
});
console.log(`site-gen: wrote agents, actions, extension and versions to ${out}`);
