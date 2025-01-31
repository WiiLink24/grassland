# Check, lint and format all available Nix files
[script]
check-nix:
    # Because some programming language package managers just clone the source repository (_cough_ NPM _cough_)
    # sometimes it can be inside of them Nix files which should not be modified to avoid possible breakage of packages
    # What this does is:
    # 1. Get all the files that ends with `.nix`
    # 2. Exclude all of them that in their path
    #    have one of the strings listed in the BANNED_PATH_SUBSTRINGS constant

    const BANNED_PATH_SUBSTRINGS = ["node_modules"]

    def string_not_contains_in_list [substringList] {
        let string_to_check = $in
        let is_not_contained = true

        let matches = $substringList | filter { |substring|
            $string_to_check | str contains $substring
        } | length

        return (not ($matches > 0))
    }

    ls ...(glob **/*.nix) | where {|path| $path.name | string_not_contains_in_list $BANNED_PATH_SUBSTRINGS} | each { |path|
        print $"Info: Formating '($path.name)'"
        nix fmt $path.name
    }

# Remove your Nix CLI configuration and set one that will only enable Nix Flakes experiment
[script]
enable-nix-flakes:
    let nix_config_dir_path = $"($env.HOME)/.config/nix"
    let nix_config_file_path = $"($nix_config_dir_path)/nix.conf"

    mkdir $nix_config_dir_path

    rm -f $nix_config_file_path
    touch $nix_config_file_path

    "experimental-features = nix-command flakes" out> $nix_config_file_path
