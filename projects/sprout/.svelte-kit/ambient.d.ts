
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const KDE_FULL_SESSION: string;
	export const NIX_CC: string;
	export const patches: string;
	export const LANGUAGE: string;
	export const _PYTHON_SYSCONFIGDATA_NAME: string;
	export const USER: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const npm_config_user_agent: string;
	export const PYTHONHASHSEED: string;
	export const XDG_SEAT: string;
	export const STARSHIP_SHELL: string;
	export const stdenv: string;
	export const SSH_AGENT_PID: string;
	export const npm_package_devDependencies_vite: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const OBJCOPY: string;
	export const npm_node_execpath: string;
	export const XCURSOR_SIZE: string;
	export const TEMPDIR: string;
	export const npm_package_files_0: string;
	export const SIZE: string;
	export const SHLVL: string;
	export const HOME: string;
	export const outputs: string;
	export const npm_package_files_1: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const OLDPWD: string;
	export const NIX_BUILD_CORES: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const npm_package_files_2: string;
	export const propagatedNativeBuildInputs: string;
	export const shellHook: string;
	export const npm_package_scripts_prepack: string;
	export const depsHostHost: string;
	export const GTK_RC_FILES: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const KDE_SESSION_VERSION: string;
	export const NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const buildInputs: string;
	export const LAST_EXIT_CODE: string;
	export const STRINGS: string;
	export const builder: string;
	export const NIX_PROFILES: string;
	export const MANAGERPID: string;
	export const npm_package_scripts_check: string;
	export const npm_package_exports___svelte: string;
	export const SYSTEMD_EXEC_PID: string;
	export const VISUAL: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const PYTHONNOUSERSITE: string;
	export const NIX_ENFORCE_NO_NATIVE: string;
	export const npm_package_devDependencies_typescript: string;
	export const doInstallCheck: string;
	export const npm_package_devDependencies__storybook_svelte: string;
	export const CURRENT_FILE: string;
	export const npm_package_types: string;
	export const mesonFlags: string;
	export const WEZTERM_EXECUTABLE: string;
	export const TMPDIR: string;
	export const out: string;
	export const npm_package_scripts_dev: string;
	export const STRIP: string;
	export const npm_package_sideEffects_0: string;
	export const LOGNAME: string;
	export const npm_package_dependencies_normalize_css: string;
	export const npm_package_type: string;
	export const strictDeps: string;
	export const NIX_GCROOT: string;
	export const npm_package_scripts_check_watch: string;
	export const NIX_BINTOOLS: string;
	export const cmakeFlags: string;
	export const TEMP: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const JOURNAL_STREAM: string;
	export const propagatedBuildInputs: string;
	export const _: string;
	export const npm_package_scripts_prepare: string;
	export const READELF: string;
	export const depsBuildBuild: string;
	export const XDG_SESSION_CLASS: string;
	export const AR: string;
	export const NIX_CFLAGS_COMPILE: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies_publint: string;
	export const phases: string;
	export const IN_NIX_SHELL: string;
	export const TERM: string;
	export const AS: string;
	export const npm_package_devDependencies__storybook_addon_interactions: string;
	export const XDG_SESSION_ID: string;
	export const buildPhase: string;
	export const WEZTERM_CONFIG_FILE: string;
	export const depsBuildTarget: string;
	export const _PYTHON_HOST_PLATFORM: string;
	export const npm_package_peerDependencies_svelte: string;
	export const GTK2_RC_FILES: string;
	export const npm_package_devDependencies__chromatic_com_storybook: string;
	export const npm_config_node_gyp: string;
	export const WEZTERM_EXECUTABLE_DIR: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const NODE: string;
	export const depsTargetTarget: string;
	export const system: string;
	export const INVOCATION_ID: string;
	export const npm_package_name: string;
	export const XDG_SESSION_PATH: string;
	export const npm_package_devDependencies_storybook: string;
	export const npm_config_frozen_lockfile: string;
	export const XDG_RUNTIME_DIR: string;
	export const XCURSOR_THEME: string;
	export const FILE_PWD: string;
	export const SOURCE_DATE_EPOCH: string;
	export const DISPLAY: string;
	export const npm_package_devDependencies__storybook_addon_svelte_csf: string;
	export const DESKTOP_STARTUP_ID: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const NIX_LDFLAGS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const npm_lifecycle_script: string;
	export const TMP: string;
	export const TERM_PROGRAM: string;
	export const SSH_AUTH_SOCK: string;
	export const NIX_BUILD_TOP: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const NIX_HARDENING_ENABLE: string;
	export const depsHostHostPropagated: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const doCheck: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const QT_ACCESSIBILITY: string;
	export const npm_config_use_node_version: string;
	export const npm_package_scripts_build: string;
	export const CXX: string;
	export const npm_package_devDependencies_svelte: string;
	export const NU_VERSION: string;
	export const NIX_STORE: string;
	export const npm_package_svelte: string;
	export const npm_package_devDependencies__storybook_sveltekit: string;
	export const NIX_SSL_CERT_FILE: string;
	export const preferLocalBuild: string;
	export const __structuredAttrs: string;
	export const npm_package_devDependencies__storybook_blocks: string;
	export const GPG_AGENT_INFO: string;
	export const CONFIG_SHELL: string;
	export const WEZTERM_CONFIG_DIR: string;
	export const XDG_VTNR: string;
	export const dontAddDisableDepTrack: string;
	export const NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
	export const name: string;
	export const PWD: string;
	export const HOST_PATH: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const LD: string;
	export const npm_package_exports___types: string;
	export const XDG_DATA_DIRS: string;
	export const depsBuildBuildPropagated: string;
	export const npm_command: string;
	export const WEZTERM_UNIX_SOCKET: string;
	export const QTWEBENGINE_DICTIONARIES_PATH: string;
	export const npm_package_scripts_build_storybook: string;
	export const STARSHIP_SESSION_KEY: string;
	export const PYTHONPATH: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const PROCESS_PATH: string;
	export const DETERMINISTIC_BUILD: string;
	export const configureFlags: string;
	export const shell: string;
	export const KDE_SESSION_UID: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies__storybook_addon_essentials: string;
	export const npm_package_scripts_storybook: string;
	export const npm_package_devDependencies__storybook_test: string;
	export const CC: string;
	export const depsBuildTargetPropagated: string;
	export const RANLIB: string;
	export const WEZTERM_PANE: string;
	export const nativeBuildInputs: string;
	export const PNPM_HOME: string;
	export const EDITOR: string;
	export const depsTargetTargetPropagated: string;
	export const INIT_CWD: string;
	export const NM: string;
	export const OBJDUMP: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		KDE_FULL_SESSION: string;
		NIX_CC: string;
		patches: string;
		LANGUAGE: string;
		_PYTHON_SYSCONFIGDATA_NAME: string;
		USER: string;
		PAM_KWALLET5_LOGIN: string;
		npm_config_user_agent: string;
		PYTHONHASHSEED: string;
		XDG_SEAT: string;
		STARSHIP_SHELL: string;
		stdenv: string;
		SSH_AGENT_PID: string;
		npm_package_devDependencies_vite: string;
		XDG_SESSION_TYPE: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		OBJCOPY: string;
		npm_node_execpath: string;
		XCURSOR_SIZE: string;
		TEMPDIR: string;
		npm_package_files_0: string;
		SIZE: string;
		SHLVL: string;
		HOME: string;
		outputs: string;
		npm_package_files_1: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		OLDPWD: string;
		NIX_BUILD_CORES: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		npm_package_files_2: string;
		propagatedNativeBuildInputs: string;
		shellHook: string;
		npm_package_scripts_prepack: string;
		depsHostHost: string;
		GTK_RC_FILES: string;
		GTK_MODULES: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies_svelte_check: string;
		KDE_SESSION_VERSION: string;
		NIX_BINTOOLS_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		buildInputs: string;
		LAST_EXIT_CODE: string;
		STRINGS: string;
		builder: string;
		NIX_PROFILES: string;
		MANAGERPID: string;
		npm_package_scripts_check: string;
		npm_package_exports___svelte: string;
		SYSTEMD_EXEC_PID: string;
		VISUAL: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		PYTHONNOUSERSITE: string;
		NIX_ENFORCE_NO_NATIVE: string;
		npm_package_devDependencies_typescript: string;
		doInstallCheck: string;
		npm_package_devDependencies__storybook_svelte: string;
		CURRENT_FILE: string;
		npm_package_types: string;
		mesonFlags: string;
		WEZTERM_EXECUTABLE: string;
		TMPDIR: string;
		out: string;
		npm_package_scripts_dev: string;
		STRIP: string;
		npm_package_sideEffects_0: string;
		LOGNAME: string;
		npm_package_dependencies_normalize_css: string;
		npm_package_type: string;
		strictDeps: string;
		NIX_GCROOT: string;
		npm_package_scripts_check_watch: string;
		NIX_BINTOOLS: string;
		cmakeFlags: string;
		TEMP: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		JOURNAL_STREAM: string;
		propagatedBuildInputs: string;
		_: string;
		npm_package_scripts_prepare: string;
		READELF: string;
		depsBuildBuild: string;
		XDG_SESSION_CLASS: string;
		AR: string;
		NIX_CFLAGS_COMPILE: string;
		npm_config_registry: string;
		npm_package_devDependencies_publint: string;
		phases: string;
		IN_NIX_SHELL: string;
		TERM: string;
		AS: string;
		npm_package_devDependencies__storybook_addon_interactions: string;
		XDG_SESSION_ID: string;
		buildPhase: string;
		WEZTERM_CONFIG_FILE: string;
		depsBuildTarget: string;
		_PYTHON_HOST_PLATFORM: string;
		npm_package_peerDependencies_svelte: string;
		GTK2_RC_FILES: string;
		npm_package_devDependencies__chromatic_com_storybook: string;
		npm_config_node_gyp: string;
		WEZTERM_EXECUTABLE_DIR: string;
		PATH: string;
		SESSION_MANAGER: string;
		NODE: string;
		depsTargetTarget: string;
		system: string;
		INVOCATION_ID: string;
		npm_package_name: string;
		XDG_SESSION_PATH: string;
		npm_package_devDependencies_storybook: string;
		npm_config_frozen_lockfile: string;
		XDG_RUNTIME_DIR: string;
		XCURSOR_THEME: string;
		FILE_PWD: string;
		SOURCE_DATE_EPOCH: string;
		DISPLAY: string;
		npm_package_devDependencies__storybook_addon_svelte_csf: string;
		DESKTOP_STARTUP_ID: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies__sveltejs_package: string;
		NIX_LDFLAGS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		npm_lifecycle_script: string;
		TMP: string;
		TERM_PROGRAM: string;
		SSH_AUTH_SOCK: string;
		NIX_BUILD_TOP: string;
		npm_package_devDependencies__sveltejs_kit: string;
		NIX_HARDENING_ENABLE: string;
		depsHostHostPropagated: string;
		SHELL: string;
		npm_package_version: string;
		doCheck: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		QT_ACCESSIBILITY: string;
		npm_config_use_node_version: string;
		npm_package_scripts_build: string;
		CXX: string;
		npm_package_devDependencies_svelte: string;
		NU_VERSION: string;
		NIX_STORE: string;
		npm_package_svelte: string;
		npm_package_devDependencies__storybook_sveltekit: string;
		NIX_SSL_CERT_FILE: string;
		preferLocalBuild: string;
		__structuredAttrs: string;
		npm_package_devDependencies__storybook_blocks: string;
		GPG_AGENT_INFO: string;
		CONFIG_SHELL: string;
		WEZTERM_CONFIG_DIR: string;
		XDG_VTNR: string;
		dontAddDisableDepTrack: string;
		NIX_CC_WRAPPER_TARGET_HOST_x86_64_unknown_linux_gnu: string;
		name: string;
		PWD: string;
		HOST_PATH: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		LD: string;
		npm_package_exports___types: string;
		XDG_DATA_DIRS: string;
		depsBuildBuildPropagated: string;
		npm_command: string;
		WEZTERM_UNIX_SOCKET: string;
		QTWEBENGINE_DICTIONARIES_PATH: string;
		npm_package_scripts_build_storybook: string;
		STARSHIP_SESSION_KEY: string;
		PYTHONPATH: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		PROCESS_PATH: string;
		DETERMINISTIC_BUILD: string;
		configureFlags: string;
		shell: string;
		KDE_SESSION_UID: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies__storybook_addon_essentials: string;
		npm_package_scripts_storybook: string;
		npm_package_devDependencies__storybook_test: string;
		CC: string;
		depsBuildTargetPropagated: string;
		RANLIB: string;
		WEZTERM_PANE: string;
		nativeBuildInputs: string;
		PNPM_HOME: string;
		EDITOR: string;
		depsTargetTargetPropagated: string;
		INIT_CWD: string;
		NM: string;
		OBJDUMP: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
