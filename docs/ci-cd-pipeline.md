# The CI/CD pipeline
The CI/CD complex enough to be mentioned.

!!! note
    The default `latest` tag SHOULD NOT be used to avoid confusion.

## Versioned vs "versionless" projects
There are some projects that the artifacts they produce (binary files, container images, etc) are relevant to the integrity of the project and should be carefully checked before releasing the public, usually needing an staging deployment first to test that everything is ok, these are **versioned** projects.

In the other hand we can find projects where releasing things fast from the repository is a priority (for example the documentation you are reading right now). These so called **versionless** projects have their one CI/CD workflow when its relevant files add modified they rebuild themselves to be always up to date. See, for example, [the workflow configuration of the documentation](https://github.com/wiilink24/grassland/blob/main/.github/workflows/versionless-documentation.yml).

### The `stating` tag
Somethings, usually with services deployed in the net, need to be tested on the infrastructure before been released.

Any Docker image that has this tag means that should be deployed in production with version tagging and an stating instance and been spin up with the help of this tag and [Watchtower](https://containrrr.dev/watchtower/).

## How to publish a new version of a project
Just create a new GiHub release with a tag that has the following syntax:

```
<action>/<project_directory_name>/v<mayor>.<minor>.<patch>
```

Where `action` can be:

- `docker`: To try to create a new Docker image of the project.
- `artifact`: To try to generate and upload the relevant artifact files of the project (binary executables for example).