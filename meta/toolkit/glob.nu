# Return a list of files with the given extension that are not in a excluded directory
export def safe-file-ext [...exts: string]: nothing -> list<path> {
    $exts
        | each { |ext|
            glob $"**/*.($ext)" --exclude ["**/node_modules/**", "**/.venv/**"]
        }
        | flatten
}