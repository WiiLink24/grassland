# The modular Gitignore system

Instead of having a huge unmaintainable global `.gitignore` file it's split into domain specific files at `./gitignores/`. They can be organized as you want and use and undeterminated amout of subdirectories.

To build the final `.gitignore` file just run:
```shell
just generate-gitignore 
```