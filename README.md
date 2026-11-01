# codeflower-docs

The user documentation of code flower, at [docs.codeflower.app](https://docs.codeflower.app): installing,
running sandboxes on a workstation or cluster, VS Code and the app, remote access, configuration and security.

Built with [Astro Starlight](https://starlight.astro.build) and deployed by Cloudflare Pages on every push to
`main` (build `npm run build`, output `dist`).

## Writing

- Pages are in `src/content/docs/`: `start/`, `guides/`, `security/`, `reference/`, `releases/`. The sidebar is in
  `astro.config.mjs`.
- Check what a page says against the code of the components, not against older notes.
- `npm run dev` serves the site with live reload. `npm run build` builds it and fails on broken links;
  `npm run check` type-checks it.

## Generated reference

These are written from the other components by the workspace's `make site-gen`, which the ship skill runs on every
release, and are never edited by hand:

- `src/content/docs/reference/cli/`: one page per `codeflower` command (codeflower-app's `cmd/gendocs`)
- `public/schema/config.json`: the JSON Schema of config.yaml, from the app's `config.go` comments
- `src/data/`: allowlist presets and app constants (gendocs); agents, chat actions, VS Code contributions and
  versions (`scripts/gen.ts`)

`src/data/compatibility.json` is appended by the ship skill with each app release, and `releases/` gets its entries
there too.

## Branding

The colours and fonts come from codeflower-ui's `theme/tokens.css` and `theme/fonts.css`, shared with the chat,
mapped onto Starlight's variables in `src/styles/brand.css`. The site title reuses ui's `Tulip.svelte`.
