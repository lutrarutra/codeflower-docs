---
title: Signing in agents
description: Sign the agent in with your subscription or an API key; logins are kept per project.
---

Each agent signs in to its own service, **inside the sandbox**, and the login is kept in the
[project](/guides/projects-and-folders/). There is no separate login command: after you connect, VS Code or the app
offers the agent's sign-in when the project is not signed in yet. You can also choose *Sign in…* on a worker or
sandbox any time.

| Agent | Sign in with |
| --- | --- |
| Claude Code | a Claude subscription or Anthropic Console account (a terminal in the sign-in dialog runs `claude auth login`), or an API key |
| Codex | ChatGPT (a device code: a link and a code to enter), or an OpenAI API key |
| DeepSeek Harness | a DeepSeek API key, or any OpenAI-compatible endpoint with its key |
| OpenCode | a terminal runs `opencode auth login`: a ChatGPT subscription, or a key for OpenAI, Anthropic, OpenRouter, OpenCode Zen and others |

Terminal sign-ins run in a terminal in the dialog; links it prints become buttons, and codes it asks for get a
field. The sandbox needs to reach the agent's service, which a
[network-isolated](/guides/network-isolation/) sandbox always may.

## API keys in config.yaml

Instead of signing in each project, give an agent an API key in [config.yaml](/reference/config/), from one of
three places:

```yaml
agents:
  claude:
    api_key_env: ANTHROPIC_API_KEY        # an environment variable on this computer
  codex:
    api_key_file: ~/.secrets/openai-key   # a file on this computer
  dsh:
    api_key: sk-…                          # or the key itself
```

- With `api_key` written in the file, config.yaml must not be readable by other users (`chmod 600`); code flower
  refuses it otherwise.
- The key is written into the agent's own settings in the project. A subscription login already there is kept.
- OpenCode does not take a key from config.yaml, since a key alone does not say which provider it is for: sign in
  in the sandbox instead.

## Where logins are kept

In the project's folder, in each agent's own files (e.g. `harness/claude` for Claude Code). Signing in once per
project is enough for every later sandbox of that project, including [batch tasks](/guides/interactive-run-task/#task).
The agents never see your API keys as environment variables.

To sign a project out, delete that agent's folder in the project (e.g. `harness/claude`) while no sandbox of the
project runs.
