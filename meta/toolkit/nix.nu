use ./log.nu
use ./glob.nu

# Remove your Nix CLI configuration and set one that will only enable Nix Flakes experiment
export def setup [] {
    log info "Setting up Nix"

    let nix_config_dir_path = $"($env.HOME)/.config/nix"
    let nix_config_file_path = $"($nix_config_dir_path)/nix.conf"

    mkdir $nix_config_dir_path

    rm -f $nix_config_file_path
    "experimental-features = nix-command flakes" | save $nix_config_file_path
}

# Check, lint and format all available Nix files
export def check [] {
    log info "Checking Nix"

    glob safe-file-ext "nix" | each { |path| 
        log info $"Formatting '($path)'"
        nix fmt $path
    }
}
