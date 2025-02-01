# Documentation
> Centralized documentation system

## How this works

We are using the [Backstage Monorepo plugin](https://github.com/backstage/mkdocs-monorepo-plugin) to handle the centralization of the documentation, the issue it that it needs the main `mkdocs.yml` file and `docs/` directory to be at the root of the project file hierchary. To work around this, and not lose the advantages of the integration with the `justfile`s of the monorepo, the documentation is split in two parts:

- One at the root of the project with `mkdocs.yml` and `docs/`.
- And the other one at `projects/documentation/` where dependency management and deployment is done.