---
title: Self-hosting the tunnel
description: Run your own code flower tunnel, on a server with Docker or on Cloudflare, and point the app at it.
---

The tunnel ([codeflower-tunnel](https://github.com/lutrarutra/codeflower-tunnel)) relays end-to-end encrypted
traffic between paired browsers and your computers, and keeps the accounts that own them. Run your own to keep
even that metadata in-house, or to restrict who may use it.

## With Docker (any server)

```sh
git clone https://github.com/lutrarutra/codeflower-tunnel && cd codeflower-tunnel
docker build -t codeflower-tunnel .
docker run -d --name codeflower-tunnel -p 8787:8787 -v tunnel:/data \
  -e PUBLIC_URL=https://tunnel.example.org \
  -e COOKIE_SECRET="$(openssl rand -base64 48)" \
  -e GITHUB_CLIENT_ID=… -e GITHUB_CLIENT_SECRET=… \
  codeflower-tunnel
```

Put it behind a reverse proxy with HTTPS at `PUBLIC_URL`, passing WebSockets through. It keeps its data in an
SQLite file (`TUNNEL_DB`, `/data/tunnel.sqlite` in the image). Without Docker: `npm ci && npm start` with the same
variables (Node 22).

| Variable | |
| --- | --- |
| `PUBLIC_URL` | required: the tunnel's address |
| `COOKIE_SECRET` | required: at least 32 random characters. Changing it signs everyone out |
| `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` | sign-in with GitHub (an OAuth app with callback `PUBLIC_URL/auth/github/callback`) |
| `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | sign-in with Google (callback `PUBLIC_URL/auth/google/callback`) |
| `REQUIRE_GITHUB_2FA` | GitHub accounts without two-factor authentication are refused unless this is `false` |
| `WEBAUTHN_RP_ID` | the passkeys' domain; default: `PUBLIC_URL`'s host |
| `ALLOWED_IPS` | comma-separated CIDR ranges allowed to open pages, e.g. your institute's networks |
| `CLIENT_IP_HEADER` | behind a proxy: the header with the browser's address, e.g. `X-Forwarded-For` |
| `PORT`, `HOST` | where it listens; default `8787` on all interfaces |

Passkeys work without any OAuth provider. Passkeys are bound to the domain: changing it means everyone registers
theirs again.

## On Cloudflare

The hosted tunnel runs as a Cloudflare Worker with a D1 database and a Durable Object per connected computer. Adapt
`wrangler.toml` (your domain, your D1 database), set the secrets with `wrangler secret put` (`COOKIE_SECRET` and the
OAuth pairs), then:

```sh
npm ci
npm run deploy     # applies the database migrations, then deploys
```

## Use it

Sign each computer in to your tunnel:

```sh
codeflower tunnel login --url https://tunnel.example.org
```

This saves `tunnel.url` in [config.yaml](/reference/config/). Then [pair browsers](/guides/remote-access/) as usual.
