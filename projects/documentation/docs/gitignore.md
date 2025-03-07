# The modular Gitignore system

Instead of having a huge unmaintainable global `.gitignore` file it's split into domain specific files at `./gitignores/`. They can be organized as you want and use an undetermined amount of subdirectories.

To build the final `.gitignore` file just run:

```shell
./run gitignore build
```
