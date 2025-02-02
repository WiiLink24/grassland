<!-- WARNING: MACHINE GENERATED FILE, DO NOT EDIT!!! -->
<!-- To generate this file run `just generate-indices` at `/projects/documentation/` in the monorepo -->

# Grassland

The main [WiiLink](https://wiilink.ca) monorepo. Holds from custom libraries and websites up to CLI tools and backend server code.

## Getting started
_TODO_

## Why a monorepo?
Development in a big project with the traditional microrepo aproach can become really hard to manage in the long term.

Orchestraing breaking changes with multiple repositories is usually prone to errors and have risk to leave for some time the `main` branch completly broken and in the worst cases make some downtime. By having everything in one file hierchary even the most complex refactorizations are just one temporal branch away.

To sum things up, the advantages that monorepos give are:

- Using custom libraries without having to relay on [SemVer](https://semver.org/) or the platform package registry, just change your code and the dependant projects in one commit.
- Be able to share the CI/CD code and configurations without Git submodules or complex code deduplication systems. See more at [the CI/CD pipeline explanation](ci-cd-pipeline.md).


If you are interested in learning more about this aproach to software architecture, the [Monorepo Tools webite](https://monorepo.tools) is a really intereting resource to take a look.

### Why not