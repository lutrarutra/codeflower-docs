---
title: Skills and icons
description: Give agents your own skills, and draw schematic figures with icons from your gallery.
---

## Skills

A **skill** is a folder with a `SKILL.md`: instructions (and any scripts or references) for a kind of task, which
the agent reads when that task comes up. Your lab's analysis conventions, a pipeline's quirks, how to use an
in-house tool.

code flower mounts skills read-only and installs them as the agent's own:

| From | Applies to |
| --- | --- |
| `~/.codeflower/skills/` | every sandbox (create the folder) |
| `skills:` in [config.yaml](/reference/config/), a list of folders | every sandbox |
| `-s`/`--skills DIR`, or *Skills* in the start form | that sandbox |

Each folder can be one skill (it has a `SKILL.md`) or a folder of skills.

```text
~/.codeflower/skills/
  scrnaseq-conventions/
    SKILL.md
  lab-lims/
    SKILL.md
    query.py
```

The sandbox also brings its own skills: reports (storyteller), the icon gallery, MCP setup, and, when isolated,
the network allowlist.

## Icons for figures

For schematic figures (study designs, workflows, pathways, graphical abstracts), the agent draws an editable SVG
with icons from **your icon gallery**, `~/.codeflower/icons`, shared by all your projects. It plans the figure with
you, sketches the layout, finds icons, and iterates on your feedback (select elements in the preview and comment).

The gallery holds only icons you added. Servier Medical Art's terms forbid automated downloads, so the agent never
downloads icons: it tells you what to look for and gives you search links, and you download the file and put it
into the sandbox (e.g. upload it to the workspace in the app's [Files](/guides/files-and-previews/#uploading-and-downloading)).
The agent imports it with its credit (SciDraw drawings need their authors, license and DOI).

`icons.folder` in config.yaml moves the gallery; `off` turns it off.

### Generating icons

When nothing fits, the agent can generate an icon, after asking you, if you configure an image model:

```yaml
images:
  provider: openai          # or google
  api_key_env: OPENAI_API_KEY
```

The key is passed to the sandbox as a private file, and an [isolated](/guides/network-isolation/) sandbox may reach
the provider's API. Codex can also use its built-in image tool.
