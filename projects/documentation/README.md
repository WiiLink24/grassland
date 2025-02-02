# Documentation

![Image title](./assets/logo-light.svg){ width="300" }
/// caption
Image caption
///

The centralized documentation system for [WiiLink](https://wiilink.ca).

## How this works
We are using the [Backstage Monorepo plugin](https://github.com/backstage/mkdocs-monorepo-plugin) to handle the centralization of the documentation, the issue it that it needs the main `mkdocs.yml` file and `docs/` directory to be at the root of the project file hierchary. To work around this, and not lose the advantages of the integration with the `justfile`s of the monorepo, the documentation is split in two parts:

- One at the root of the project with `mkdocs.yml` and `docs/`.
- And the other one at `projects/documentation/` where dependency management and deployment is done.

### Regarding synced README.md and index.md files
They are synced using a custom recipe located at `/projects/documentation` called `generate-indices`. Things written in `README.md` will be copied to `index.md` in mkdocs **but not viceversa**.

This is done like this due to [a limitation in the Backstage Monorepo plugin](https://github.com/backstage/mkdocs-monorepo-plugin/issues/92), and means that edits made in README.md will only be reflected on the local documentation website (when spinning up a local mkdocs instance for testing) when restarting the server.