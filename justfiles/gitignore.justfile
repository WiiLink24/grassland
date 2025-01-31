# Take all the gitignore files in the ./gitignores/ directory and merge them
[script]
build-gitignore:
    const mainGitignoreFilePath = "./.gitignore"

    rm -f $mainGitignoreFilePath
    "#### WARNING: MACHINE GENERATED FILE, DO NOT EDIT!!!\n" | save --append $mainGitignoreFilePath
    "#### To generate this file run `just build-gitignore` at the root of the monorepo\n" | save --append $mainGitignoreFilePath

    ls ...(glob ./gitignores/**/*.gitignore) | each { |gitignoreFragmentPath|
        let header = $"\n### ($gitignoreFragmentPath.name | path basename)\n"

        $header | save --append $mainGitignoreFilePath
        open $gitignoreFragmentPath.name | save --append $mainGitignoreFilePath
    }