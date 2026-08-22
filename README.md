# Homebridge Website

The source for [homebridge.io](https://homebridge.io), an Angular app.

## Development server

Run `npm run watch` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deployment

The site is built and served by **Cloudflare Pages**, which builds the `source` branch directly. There is no deploy workflow in this repository, so **every push to `source` publishes the live site**.

Two things follow from that:

- The build output must land at exactly `dist/`. That is what `outputPath` in [angular.json](./angular.json) pins with `{ "base": "dist", "browser": "" }` — the Angular default would put it in a `browser` subfolder, which Cloudflare would not serve.
- The Node version is set by [.node-version](./.node-version), which Cloudflare reads from the repository.

A failed build leaves the previous deploy in place, so the site goes stale rather than down.

## Adding Redirects / Short URLs

Redirects / short URLs are managed in the [./src/public/_redirects](./src/public/_redirects) file.

See https://developers.cloudflare.com/pages/platform/redirects/ for syntax.

## Raspberry Pi image list

[./src/public/rpi-image-repo.json](./src/public/rpi-image-repo.json) is written by the release workflows in [homebridge-raspbian-image](https://github.com/homebridge/homebridge-raspbian-image), and is read from its deployed URL by the Raspberry Pi Imager. Do not move the file or change the URL it is served from.
