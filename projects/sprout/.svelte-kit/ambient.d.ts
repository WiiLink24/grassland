
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
	export const LANGUAGE: string;
	export const PAM_KWALLET5_LOGIN: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const STARSHIP_SHELL: string;
	export const XDG_SEAT: string;
	export const SSH_AGENT_PID: string;
	export const XDG_SESSION_TYPE: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const SHLVL: string;
	export const XCURSOR_SIZE: string;
	export const npm_package_files_0: string;
	export const HOME: string;
	export const KDE_APPLICATIONS_AS_SCOPE: string;
	export const OLDPWD: string;
	export const npm_package_files_1: string;
	export const DESKTOP_SESSION: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_files_2: string;
	export const npm_package_scripts_prepack: string;
	export const GTK_MODULES: string;
	export const GTK_RC_FILES: string;
	export const KDE_SESSION_VERSION: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const LAST_EXIT_CODE: string;
	export const MANAGERPID: string;
	export const NIX_PROFILES: string;
	export const npm_package_scripts_check: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const SYSTEMD_EXEC_PID: string;
	export const VISUAL: string;
	export const npm_package_exports___svelte: string;
	export const npm_config_engine_strict: string;
	export const COLORTERM: string;
	export const DIRS_POSITION: string;
	export const npm_package_devDependencies_typescript: string;
	export const CURRENT_FILE: string;
	export const npm_package_devDependencies__storybook_svelte: string;
	export const npm_package_types: string;
	export const WEZTERM_EXECUTABLE: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_sideEffects_0: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const npm_package_dependencies_normalize_css: string;
	export const JOURNAL_STREAM: string;
	export const QT_AUTO_SCREEN_SCALE_FACTOR: string;
	export const npm_package_scripts_check_watch: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_scripts_prepare: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const XDG_SESSION_ID: string;
	export const npm_package_devDependencies__storybook_addon_interactions: string;
	export const npm_package_devDependencies_publint: string;
	export const WEZTERM_CONFIG_FILE: string;
	export const GTK2_RC_FILES: string;
	export const WEZTERM_EXECUTABLE_DIR: string;
	export const npm_package_devDependencies__chromatic_com_storybook: string;
	export const npm_package_peerDependencies_svelte: string;
	export const PATH: string;
	export const INVOCATION_ID: string;
	export const SESSION_MANAGER: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const FILE_PWD: string;
	export const XCURSOR_THEME: string;
	export const XDG_RUNTIME_DIR: string;
	export const XDG_SESSION_PATH: string;
	export const npm_package_devDependencies_storybook: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_devDependencies__storybook_addon_svelte_csf: string;
	export const DESKTOP_STARTUP_ID: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const TERM_PROGRAM: string;
	export const XAUTHORITY: string;
	export const XDG_SESSION_DESKTOP: string;
	export const npm_lifecycle_script: string;
	export const SSH_AUTH_SOCK: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const NU_VERSION: string;
	export const QT_ACCESSIBILITY: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_build: string;
	export const npm_config_use_node_version: string;
	export const npm_package_devDependencies__storybook_sveltekit: string;
	export const npm_package_svelte: string;
	export const NIX_SSL_CERT_FILE: string;
	export const GPG_AGENT_INFO: string;
	export const npm_package_devDependencies__storybook_blocks: string;
	export const WEZTERM_CONFIG_DIR: string;
	export const XDG_VTNR: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_package_exports___types: string;
	export const PROCESS_PATH: string;
	export const QTWEBENGINE_DICTIONARIES_PATH: string;
	export const STARSHIP_SESSION_KEY: string;
	export const WEZTERM_UNIX_SOCKET: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_scripts_build_storybook: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const KDE_SESSION_UID: string;
	export const WEZTERM_PANE: string;
	export const npm_package_devDependencies__storybook_addon_essentials: string;
	export const npm_package_devDependencies__storybook_test: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_scripts_storybook: string;
	export const PNPM_HOME: string;
	export const EDITOR: string;
	export const INIT_CWD: string;
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
		LANGUAGE: string;
		PAM_KWALLET5_LOGIN: string;
		USER: string;
		npm_config_user_agent: string;
		STARSHIP_SHELL: string;
		XDG_SEAT: string;
		SSH_AGENT_PID: string;
		XDG_SESSION_TYPE: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		SHLVL: string;
		XCURSOR_SIZE: string;
		npm_package_files_0: string;
		HOME: string;
		KDE_APPLICATIONS_AS_SCOPE: string;
		OLDPWD: string;
		npm_package_files_1: string;
		DESKTOP_SESSION: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_files_2: string;
		npm_package_scripts_prepack: string;
		GTK_MODULES: string;
		GTK_RC_FILES: string;
		KDE_SESSION_VERSION: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies_svelte_check: string;
		LAST_EXIT_CODE: string;
		MANAGERPID: string;
		NIX_PROFILES: string;
		npm_package_scripts_check: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		SYSTEMD_EXEC_PID: string;
		VISUAL: string;
		npm_package_exports___svelte: string;
		npm_config_engine_strict: string;
		COLORTERM: string;
		DIRS_POSITION: string;
		npm_package_devDependencies_typescript: string;
		CURRENT_FILE: string;
		npm_package_devDependencies__storybook_svelte: string;
		npm_package_types: string;
		WEZTERM_EXECUTABLE: string;
		npm_package_scripts_dev: string;
		npm_package_sideEffects_0: string;
		LOGNAME: string;
		npm_package_type: string;
		npm_package_dependencies_normalize_css: string;
		JOURNAL_STREAM: string;
		QT_AUTO_SCREEN_SCALE_FACTOR: string;
		npm_package_scripts_check_watch: string;
		XDG_SESSION_CLASS: string;
		npm_package_scripts_prepare: string;
		npm_config_registry: string;
		TERM: string;
		XDG_SESSION_ID: string;
		npm_package_devDependencies__storybook_addon_interactions: string;
		npm_package_devDependencies_publint: string;
		WEZTERM_CONFIG_FILE: string;
		GTK2_RC_FILES: string;
		WEZTERM_EXECUTABLE_DIR: string;
		npm_package_devDependencies__chromatic_com_storybook: string;
		npm_package_peerDependencies_svelte: string;
		PATH: string;
		INVOCATION_ID: string;
		SESSION_MANAGER: string;
		npm_package_name: string;
		NODE: string;
		FILE_PWD: string;
		XCURSOR_THEME: string;
		XDG_RUNTIME_DIR: string;
		XDG_SESSION_PATH: string;
		npm_package_devDependencies_storybook: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_devDependencies__storybook_addon_svelte_csf: string;
		DESKTOP_STARTUP_ID: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_devDependencies__sveltejs_package: string;
		TERM_PROGRAM: string;
		XAUTHORITY: string;
		XDG_SESSION_DESKTOP: string;
		npm_lifecycle_script: string;
		SSH_AUTH_SOCK: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		NU_VERSION: string;
		QT_ACCESSIBILITY: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_build: string;
		npm_config_use_node_version: string;
		npm_package_devDependencies__storybook_sveltekit: string;
		npm_package_svelte: string;
		NIX_SSL_CERT_FILE: string;
		GPG_AGENT_INFO: string;
		npm_package_devDependencies__storybook_blocks: string;
		WEZTERM_CONFIG_DIR: string;
		XDG_VTNR: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		XDG_DATA_DIRS: string;
		npm_package_exports___types: string;
		PROCESS_PATH: string;
		QTWEBENGINE_DICTIONARIES_PATH: string;
		STARSHIP_SESSION_KEY: string;
		WEZTERM_UNIX_SOCKET: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_scripts_build_storybook: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		KDE_SESSION_UID: string;
		WEZTERM_PANE: string;
		npm_package_devDependencies__storybook_addon_essentials: string;
		npm_package_devDependencies__storybook_test: string;
		npm_package_scripts_preview: string;
		npm_package_scripts_storybook: string;
		PNPM_HOME: string;
		EDITOR: string;
		INIT_CWD: string;
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
