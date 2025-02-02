# Grassland

The main [WiiLink](https://wiilink.ca) monorepo. Holds from custom libraries and websites up to CLI tools and backend server code.

Maybe you are interested in [checking why a monorepo is used](monorepo.md).

## Getting started
### Setting up the environment

!!! note
    There is available a Nix Flake with a `devShell` tailored for the repository, if you know how [Nix](https://nixos.org/) works feel free to use it and ski this section.

>>>>>>TODO<<<<<<<

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

!!! note
    If you want to create a new project just run:
    ```shell
    just new-project name_of_the_project
    ```