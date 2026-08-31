# What leaves your machine

T3 Code collects no usage analytics. There is no product telemetry, no crash
reporting, and no installation identifier. Nothing about your threads, prompts,
projects, file paths, or agent activity is reported anywhere.

The app makes network requests only for work you asked for. This page lists
every one of them so you can decide what to allow.

## Always local

- Threads, projects, checkpoints, and settings live in your T3 home directory.
- Logs and traces are written to files under that directory and are never
  uploaded.
- Resource monitoring (CPU, memory, power) is measured and displayed locally.
- Link icons in chat and browser tabs are drawn locally. T3 Code does not ask a
  favicon service about the hosts your agent links to.

## Requests you initiate

- **Your coding agent.** Codex, Claude, Cursor, Grok, and OpenCode run as local
  processes and talk to their own providers with your own credentials. T3 Code
  does not add anything to that traffic. Their own telemetry, if any, is
  governed by their settings.
- **Source control.** GitHub, GitLab, and Bitbucket are contacted only for
  repositories and pull requests you open.
- **Usage pricing.** Opening Usage fetches a public model price table from
  GitHub and caches it for a day. The request carries no information about you.
- **Provider updates.** The provider list checks the npm registry for newer
  agent CLI versions. The request carries only the package name.
- **App updates.** Desktop checks its update feed on launch and periodically;
  the mobile app checks for over-the-air updates on load.

## Opt-in remote features

These are off until you turn them on:

- **Remote access.** Direct LAN, Tailscale, and SSH tunnels connect your own
  devices to your own server.
- **T3 Connect.** The hosted relay and its sign-in provider are contacted only
  after you enable T3 Connect. Turning it off stops that traffic.
- **Trace export.** If you run your own OpenTelemetry collector you can point
  the client at it. With no endpoint configured, traces stay in local files.

## Verifying it yourself

Everything above is in the open source tree. A useful audit is to run the app
behind a firewall that only allows your agent provider and your git host, then
exercise the features you care about.
