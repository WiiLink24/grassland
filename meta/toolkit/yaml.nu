use ./log.nu
use ./glob.nu

# Check, lint and format all YAML files
export def check [] {
    log info "Checking YAML files"

    glob safe-file-ext "yml" "yaml" | each { |path|
        log info $"Formatting '($path)'"
        yamlfmt $path
    }
}