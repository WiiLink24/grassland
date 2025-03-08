# Grassland

This is the main [WiiLink](https://wiilink.ca) monorepo. It holds from custom libraries and websites up to CLI tools and backend server code.

## Getting started

### Downloading the source code

You just need to have [Git](https://git-scm.com/) in your environment [with SSH support enabled](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) and run:

```
git clone git@github.com:wiilink24/grassland.git
```

### Setting up the environment

!!! note
There is available a Nix Flake with a `devShell` tailored for the repository, if you know how [Nix](https://nixos.org/) works feel free to use it and skip this section.

For work in the project you need the follow software, please install it with the system package manager available on your OS:

- [`addlicense`](https://github.com/google/addlicense)
- [`pnpm`](https://pnpm.io/)
- [`Nushell`](https://www.nushell.sh/)
- [`yamlfmt`](https://github.com/google/yamlfmt)
- [`Python`](https://www.python.org/) 3.13 available with the `python3` command _(see below)_

#### Python versioning hell

So Python has a [_little_ issue with its binary name](https://stackoverflow.com/a/70528020). There is no reliable way to spin up Python from a shell script, at the time of writing Python 3 **MAY** be available in the terminal as:

- `python3`
- `py3`
- `python` (Only on some Linux distributions)
- `py -3` (Only on Windows... [and on Unix compatible OSs sometimes?](https://python-launcher.app/))

Having seen this we've decided to use `python3` as it looks like to be the most sensible one and available on all platforms.

### Ensure that everything is working

To check that every tool is set up correctly just run:

```shell
./run tools ensure
```

### Scaffold the repository

To install all dependencies in all projects (_recommended_) run:

```shell
./run setup
```

### Check the integrity of the code

To check that the last commit that was pushed to `main` was in good share and that you are working on the safe side of things run:

```shell
./run check
```

### Lint files

If the previous check command failed or you want your code to not fail at the CI/CD you can run:

```shell
./run fix
```

### And start coding!

Check the `README.md` stored inside each project at `./projects/` to learn more about them. Remember each one has its one `run` file, there you will find the most important commands to run in that project.

!!! warning
Remember to avoid using the language native command runners, like the scripts sections of a `package.json` file, too ensure consistency in all the projects in the repository and make things easier for external and new devs.

Maybe you are interested in [checking how this monorepo one works and why this software architecture pattern have been decided to be used](monorepo.md).
