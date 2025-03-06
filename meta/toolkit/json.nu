use ./log.nu
use ./glob.nu

# Check, lint and format all JSON files
export def check [] {
    log info "Checking JSON files"

    glob safe-file-ext "json" | each { |path|
        log info $"Formatting '($path)'"
        hujsonfmt -w $path
    }
}