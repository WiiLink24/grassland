# Generic logger that will just print a message in a predefined format given an status,
# a color and a message
def generic_log [
    color: string, # The color of the status prefix
    status: string, # The status prefix to be printed
    message: string # The message to be printed
] {
    let color_escape_code = (ansi $"($color)_bold")

    print $"(ansi white_bold)[($color_escape_code)($status)(ansi white_bold)](ansi reset) ($message)"
}

# Print an info message
export def info [
    message: string # The message to be printed
] {
    generic_log blue INFO $message
}

# Print a warning message
export def warning [
    message: string # The message to be printed
] {
    generic_log yellow WARNING $message
}

# Print an error message
export def error [
    message: string # The message to be printed
] {
    generic_log red ERROR $message
}