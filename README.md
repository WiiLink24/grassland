# Grassland

This is the main [WiiLink](https://wiilink.ca) monorepo. It holds from custom libraries and websites up to CLI tools and backend server code.

**Note:** If you are reading this outside the documentation website some links may be broken, go to the [WiiLink Grassland documentation page](https://docs.wiilink.ca) if you want a better experience _(recommended)_.

## Getting started
### Downloading the source code
You just need to have [Git](https://git-scm.com/) in your environment [wit SSH support enabled](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) and run:
```
git clone git@github.com:wiilink24/grassland.git
```

### Setting up the environment

!!! note
    There is available a Nix Flake with a `devShell` tailored for the repository, if you know how [Nix](https://nixos.org/) works feel free to use it and skip this section.

For work in the project you need the follow software, please install it with the system package manager available on your OS:

- [`addlicense`](https://github.com/google/addlicense)
- [`just`](https://just.systems/man/en/introduction.html)
- [`pnpm`](https://pnpm.io/)
- Any version of [`Node.js`](https://nodejs.org/en) that provides a somewhat modern version of [`npm`](https://www.npmjs.com/).
- [`Nushell`](https://www.nushell.sh/).
- [`Python`](https://www.python.org/) 3.13 available with the `python3` command. _(see below)_

#### Python versioning hell
So Python has a [_little_ issue with its binary name](https://stackoverflow.com/a/70528020). There is no reliable way to spin up Python from any shell script, at the time of writing Python 3 **MAY** be available in the terminal as:

- `python3`
- `py3`
- `python` (Only on some Linux distributions)
- `py -3` (Only on Windows... [and on Unix compatible OSs?](https://python-launcher.app/))

Having seen this we've decided to use `python3` as it looks like to be the most sensible one. The only exceptions is on **Windows**, if you are in this system this command is only available if you [have installed Python from the Microsoft Store](https://apps.microsoft.com/detail/9pnrbtzxmb4z?hl=en-US&gl=US) (which is in any case the recommended installation method).

### Ensure that everything is working
To check that every tool is set up correctly just run:
```shell
just ensure-tools
```

### Scaffold the repository
To install all dependencies in all projects (_recommended_) run:
```shell
just setup
```

### Check the integrity of the code
To check that the last commit that was pushed to `main` was in good share and that you are working on the safe side of things run:
```shell
just check
```

### And start coding!
Check the `README.md` stored inside each project at `./projects/` to learn more about them. Remember each one has its one `justfile` so you can run `just` to check the available recipes.

Maybe you are interested in [checking how this monorepo one works and why this software architecture pattern have been decided to be used](monorepo.md).

!!! note
    If you want to create a new project just run:
    ```shell
    just new-project name_of_the_project
    ```