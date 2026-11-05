# Gripenet: country notes

Owned by this repo: `copier update` never touches this file. The shared setup is in [README.md](README.md).

## Pages and integrations

- `/results` is an `iframeEmbed` (`pages.json`) of `/results-proxy/results.html#<lang>`: the weekly
  report generated into the `gripenetpt-results` GCS bucket (knitr / Plotly export).
  - production: `nginx/snippets/locations.conf` proxies `/results-proxy/` to
    `https://storage.googleapis.com/gripenetpt-results/`, with `nosniff` but without the app CSP
    (the report needs inline scripts and styles);
  - `yarn start`: the same path is proxied by the dev server (`dev_path_proxies` answer).
  - `autoResize: false` (the report has no iframe-resizer child script): fixed
    `height: calc(100vh - 160px)`, `minHeight: 750px`.
  - `public/results-embed.css` restyles the report inside the iframe (`stylesheet` option).
- Third parties: reCAPTCHA only (see `nginx/snippets/csp.conf`).

## Country code

- `src/theme/` (`gripenet-theme.scss`, `selected_color_scheme.scss`): Gripenet colours; `src/index.tsx`: `pt` date locale only.

## Deploy

- Image `influweb/portugal-webapp`; cluster-management `svcWebParticipant` needs
  `unprivileged: true` for the nginx-unprivileged image (port 8080).
