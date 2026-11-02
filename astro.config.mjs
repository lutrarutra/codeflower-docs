// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

export default defineConfig({
  site: 'https://docs.codeflower.app',
  integrations: [
    starlight({
      title: 'code flower',
      description:
        'Run Claude Code, Codex, DeepSeek Harness or OpenCode in a sandbox that sees only the folders you give it, on your computer or an HPC cluster.',
      favicon: '/favicon.svg',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/lutrarutra/codeflower-app' }],
      editLink: { baseUrl: 'https://github.com/lutrarutra/codeflower-docs/edit/main/' },
      lastUpdated: true,
      customCss: ['./src/styles/global.css', './src/styles/brand.css'],
      components: {
        SiteTitle: './src/components/overrides/SiteTitle.astro',
      },
      expressiveCode: {
        themes: ['github-dark-default', 'github-light'],
        styleOverrides: {
          borderRadius: '0.75rem',
          borderColor: 'var(--cf-line)',
          codeBackground: 'var(--cf-code)',
          frames: {
            editorBackground: 'var(--cf-code)',
            terminalBackground: 'var(--cf-code)',
            editorTabBarBackground: 'var(--cf-sunken)',
            terminalTitlebarBackground: 'var(--cf-sunken)',
            frameBoxShadowCssValue: 'none',
          },
        },
      },
      sidebar: [
        {
          label: 'Start here',
          items: [
            'start/introduction',
            'start/install',
            'start/quickstart-app',
            'start/quickstart-vscode',
          ],
        },
        {
          label: 'Running sandboxes',
          items: [
            'guides/projects-and-folders',
            'guides/sandbox-run-task',
            'guides/engines',
            'guides/hpc',
            'guides/network-isolation',
            'guides/inside-the-sandbox',
          ],
        },
        {
          label: 'Working with the agent',
          items: [
            'guides/vscode',
            'guides/app-window',
            'guides/chatting',
            'guides/terminal-ui',
            'guides/files-and-previews',
            'guides/reports',
            'guides/sign-in',
            'guides/mcp',
            'guides/skills-and-icons',
          ],
        },
        {
          label: 'Remote access',
          items: ['guides/remote-access', 'guides/self-host-tunnel'],
        },
        { label: 'Security', items: ['security/security-model'] },
        {
          label: 'Reference',
          items: [
            { label: 'Command line', collapsed: true, items: [{ autogenerate: { directory: 'reference/cli' } }] },
            'reference/config',
            'reference/agents',
            'reference/chat-actions',
            'reference/allowlist-presets',
            'reference/vscode',
            'reference/environment-variables',
            'reference/files-and-folders',
            'reference/ports-and-addresses',
            'reference/compatibility',
          ],
        },
        { label: 'Release notes', collapsed: true, items: [{ autogenerate: { directory: 'releases' } }] },
      ],
      plugins: [starlightLinksValidator(), starlightLlmsTxt()],
    }),
    svelte(),
  ],
  vite: { plugins: [tailwindcss()] },
});
