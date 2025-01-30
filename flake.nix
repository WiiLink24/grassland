{
  description = "The main monorepo of the WiiLink project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
  };

  outputs = {
      self,
      nixpkgs,
    }: let
      allSystems = [
        "x86_64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      # This functions defines the package for all the targets defined at the list `allSystems`.
      forAllSystems = callback:
        nixpkgs.lib.genAttrs allSystems
            (system: callback {pkgs = import nixpkgs {inherit system;};});
    in {
      formatter = forAllSystems ({pkgs}: pkgs.alejandra);

      devShells = forAllSystems ({pkgs}: {
        default = pkgs.mkShell {
          name = "WiiLink Grassland";
          nativeBuildInputs = with pkgs; [
            addlicense
            just
            alejandra
            nodejs_23
            pnpm
          ];
        };
      });
    };
}
