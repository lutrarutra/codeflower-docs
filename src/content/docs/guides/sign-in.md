---
title: Signing in agents
description: Sign the agents in with your subscriptions or API keys; logins are kept per project.
---

Each agent signs in to its own service, **inside the sandbox**, and the login is kept in the
[project](/guides/projects-and-folders/). There is no separate login command. Every agent runs in a sandbox, and you
sign in those you want to use: the sandbox's *Manage* page in the app lists them with their logos and whether each
is signed in, and VS Code's *Agents* node under the worker does the same. Choosing an agent that is not signed in
for a new chat opens its sign-in instead.

| Agent | Sign in with |
| --- | --- |
| Claude Code | a Claude subscription or Anthropic Console account (a terminal in the sign-in dialog runs `claude auth login`), or an API key |
| Codex | ChatGPT (a device code: a link and a code to enter), or an OpenAI API key |
| DeepSeek Harness | a DeepSeek API key, or any OpenAI-compatible endpoint with its key |
| OpenCode | a terminal runs `opencode auth login`: a ChatGPT subscription, or a key for OpenAI, Anthropic, OpenRouter, OpenCode Zen and others |

Terminal sign-ins run in a terminal in the dialog; links it prints become buttons, and codes it asks for get a
field. The sandbox needs to reach the agent's service, which a
[network-isolated](/guides/network-isolation/) sandbox always may.

For an OpenAI-compatible endpoint, give its base URL (`https://openrouter.ai/api/v1`, or a vLLM server's
`http://node:8000/v1`) and key, then:

- *Test the connection* says whether the endpoint answers and whether it takes the key. The key is tried without
  running a model, so it costs nothing.
- *Fetch the models* lists the models the endpoint serves, with what it says of each: its context window, whether it
  reads images, and whether it thinks (OpenRouter says so). Pin the ones the chat's model picker should offer; with
  hundreds, filter the list, and *Hide all* unpins them all.
- *Add a model by hand* adds one the endpoint does not list, or all of them when it lists none.
- Each model offered can have its context window, *image* and *thinks* changed. One that does not think gets no
  reasoning effort picker; the others offer the effort values below.

Once signed in, *Edit keys and models…* on the sandbox's *Manage* page opens the same form with what is saved: change
the models or the URL, and leave the key blank to keep the saved one. A saved key is only ever sent to the URL it was
saved with: with another URL, give the key again. Saving restarts the agent if it runs, so its chats in the middle of
a turn stop; the other agents' chats go on.

The keys go into `dsh-home/.env` in the project, readable only by you, and the endpoint and its models into
`dsh-home/codeflower-endpoint.patch.yml`, which holds no key.

In VS Code, *Sign in…* on the worker asks step by step: the URL, the key, then the models to use, picked from those
the endpoint lists (or typed, separated by commas, when it lists none), and the effort values. Testing the
connection, each model's settings and editing what is saved are on the app's page.

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
project is enough for every later sandbox of that project, including [batch tasks](/guides/sandbox-run-task/#task).
The agents never see your API keys as environment variables.

To sign a project out, delete that agent's folder in the project (e.g. `harness/claude`) while no sandbox of the
project runs.
