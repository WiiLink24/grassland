# The CI/CD pipeline

The complexity of the CI/CD enough to be mentioned.

!!! note
    The default `latest` Docker image tag **MUST NOT** be used to avoid confusion.

## Versioned vs "versionless" projects

There are some projects that the artifacts they produce (binary files, container images, etc) are relevant to the integrity of the project and should be carefully checked before releasing the public, usually needing an staging deployment phase first to test that everything is ok, these are **versioned** projects.

In the other hand we can find projects where releasing things fast from the repository is a priority (for example the documentation you are reading right now). These so called **versionless** projects have their own CI/CD workflow which it triggered when its relevant files are modified and by consequence they rebuild themselves to be always up to date. See, for example, [the workflow configuration of the documentation](https://github.com/wiilink24/grassland/blob/main/.github/workflows/versionless-documentation.yml).

In the case of versionless projects Docker images they are released with the `versionless` tag.

### The `staging` tag

Somethings, usually with services deployed in the net, need to be tested on the infrastructure before been released to the public.

Any Docker image that has this tag means that should be deployed in production with version tagging and an stating instance can been spin up with the help of this tag and [Watchtower](https://containrrr.dev/watchtower/).

## How to publish a new version of a project

Just create a new GiHub release with a tag that has the following syntax:

```
<action>/<project_directory_name>/v<mayor>.<minor>.<patch>
```

Where `action` can be:

- `docker`: To try to create a new Docker image of the project.
- `artifact`: To try to generate and upload the relevant artifact files of the project (binary executables for example).

!!! warning
Be aware that the GitHub repository is set up that if the last uploaded commit to the `main` branch doesn't pass the global checks (`./run check` on the root of the repository) creating new tags will be refused to ensure integrity.
