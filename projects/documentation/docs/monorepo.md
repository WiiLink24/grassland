# Monorepo

## What type of monorepo we are using?

- The one where you have multiple atomic projects each one in a different directory at a known path (`./projects/`).
- The one that has small and easy to maintain explicit coupling that will not give issues in the long term.
- The one where the CI/CD is well engineered and will ensure that the code is always in a good shape without sacrificing the experience of the DevOps team.

So the one that is sensible and use the arcane arts of _"use common sense"_ and _"it depends"_.

### How everything is glued together?

We're using the [Nushell language](https://www.nushell.sh/book/thinking_in_nu.html) as our main scripting language.

#### Why Nushell?

Because...

- It's crossplatform, so people can develop on Windows.
- It's doesn't have traditional shell pitfalls, like shell expansion with spaces or the [`set -euo pipefail`](https://gist.github.com/mohanpedala1e2ff5661761d3abd0385e8223e16425).
- It has beautiful error messages that are easy to understand.
- Its data driven and function approach makes writing maintainable scripts easy.

## Why a monorepo?

Because development in a big project with the traditional microrepo approach can become really hard to manage in the long term.

Orchestrating breaking changes with multiple repositories is usually prone to errors and have risk to leave for some time the `main` branch completely broken and in the worst cases make some downtime. By having everything in one file hierarchy even the most complex refactorizations are just one temporal branch away.

To sum things up, the advantages that monorepos give are:

- Using custom libraries without having to relay on [SemVer](https://semver.org/) or the platform package registry, just change your code and the dependant projects in one commit.
- Be able to share the CI/CD code and configurations without Git submodules or complex code deduplication systems. See more at [the CI/CD pipeline explanation](ci-cd-pipeline.md).
- Ensure that the same code style and lint rules are used in all places.
- Deduplicate external libraries installation with workspaces.
- Centralize the documentation.
- Globally determinate a reproducible development environment.

If you are interested in learning more about this approach to software architecture, the [Monorepo Tools website](https://monorepo.tools) is a really interesting resource to take a look.

### Why not

As you can expect this is not a golden hammer, some notable issues are:

- Setting up things is harder and slower, usually you want to have every tool used in the project available to be able to jump around in a polyglot manner, even it this is alleviated using reproducible dev environment tools like [Nix](https://nixos.org/) or a easy to follow set up documentation it still can be an issue for some people.
  - As a side note, if this becomes a big issue in the future it can be completely tackle splitting the dev dependencies into groups.
- Small contributions are harder to be merged as a more strict CI is needed to ensure `main` branch integrity. (Can be seen as an advantage for some people).
- Some people can be intimidated by having a unusual ecosystem, fortunately this can be alleviated with documentation.

### Anyway better start coding

The advantages overcome these problems or can work around them, be able to implement complex workflows atomically and know in every moment how ever piece of software interact with each other instead of relaying in fragile orchestration systems is (in the opinion of [the author of this entry in the docs](https://dobon.dev)) enough reason to this code organization pattern.
