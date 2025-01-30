# Default recipe of the justfile
default: help

# Show this info message
help:
  just --list

nix_config_dir_path := env("HOME") + "/.config/nix"
nix_config_file_path := nix_config_dir_path + "/nix.conf"

# Remove your Nix CLI configuration and set one that will only enable Nix Flakes experiment
enable-nix-flakes:
    rm -f {{nix_config_file_path}}
    mkdir -p {{nix_config_dir_path}}
    touch {{nix_config_file_path}}
    echo "experimental-features = nix-command flakes" > {{nix_config_file_path}}

# Open the development environment with a Bash shell
bash:
    nix develop

# Open the development environment with a Fish shell
fish:
    nix develop --command fish