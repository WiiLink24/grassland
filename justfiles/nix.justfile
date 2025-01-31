# Check, lint and format all available Nix files
check-nix:
    #!/usr/bin/env bash
    
    nix fmt **/.nix

# Remove your Nix CLI configuration and set one that will only enable Nix Flakes experiment
enable-nix-flakes:
    #!/usr/bin/env bash

    nix_config_dir_path="${HOME}/.config/nix"
    nix_config_file_path="${nix_config_dir_path}/nix.conf"

    mkdir -p "${nix_config_dir_path}"

    rm -f "${nix_config_file_path}"
    touch "${nix_config_file_path}"

    echo "experimental-features = nix-command flakes" > "${nix_config_file_path}"
