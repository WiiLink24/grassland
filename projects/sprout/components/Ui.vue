<script setup lang="ts">
import { setupDarkMode } from "../util";

setupDarkMode();
</script>

<style lang="scss">
@import "normalize-scss";
@include normalize();
</style>

<style scoped>
/*
	Normalize styling,
	check: https://www.joshwcomeau.com/css/custom-css-reset/
*/

:deep(*),
:deep(*::before),
:deep(*::after) {
	box-sizing: border-box;
}

:deep(*) {
	margin: 0;
}

:deep(img),
:deep(picture),
:deep(video),
:deep(canvas),
:deep(svg) {
	display: block;
	max-width: 100%;
}

:deep(input),
:deep(button),
:deep(textarea),
:deep(select) {
	font: inherit;
}

:deep(p),
:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
	overflow-wrap: break-word;
}

:deep(p) {
	text-wrap: pretty;
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
	text-wrap: balance;
}

#__nuxt {
	isolation: isolate;
}

@font-face {
	font-family: "Inter";
	src: url(/sprout/fonts/inter-18pt-regular.woff2) format(woff2);
}

@font-face {
	font-family: "Poppins";
	src: url(/sprout/fonts/poppins-bold.woff2) format(woff2);
}

@font-face {
	font-family: "Gilroy";
	src: url(/sprout/fonts/Gilroy.otf) format("opentype");
}

@font-face {
	font-family: "Rubik";
	src: url(/sprout/fonts/Rubik.ttf) format("truetype");
}

@font-face {
	font-family: "FontAwesome";
	src: url(/sprout/fonts/fontawesome.ttf) format("truetype");
}

.ui {
	--font-sans-serif-fallbacks: "Arial", "Helvetica", sans-serif;

	--font-inter: "Inter";
	--font-poppins: "Poppins";
	--font-gilroy: "Gilroy";
	--font-rubik: "Rubik";
	--font-system: system-ui, -apple-system, BlinkMacSystemFont,
		"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
		"Fira Sans", "Droid Sans", "Helvetica Neue",
		var(--font-sans-serif-fallbacks);

	--c-white: #ffffff;
	--c-black: #090909;
	--c-white-dim: #ffffff41;

	--c-accent: var(--c-black);
	--c-gradient: linear-gradient(41deg, #008aff 0%, #ff003b 100%);
	--c-text: var(--c-white);
	--c-text-dim: var(--c-white-dim);

	--max-width: 1500px;
	line-height: 1.5;
	-webkit-font-smoothing: antialiased;

	--spacing-stadard: 1rem;
	--transition-slow: 0.3s;
	--transition-standard: 0.2s;
	--border-radius-small: 4px;
	--border-radius-standard: 8px;
	--travel-distance: 3px;

	--color: #000000;
    --bg-color: #ffffff;
    --bg-color-hero: #ffffffde;
    --bg-color-light: #ffffff;
    --bg-color-secondary: #f8f9fa;
    --bg-color-tertiary: #f1f3f5;
    --bg-color-absolute: #ffffff;
    --border-color: #00000020;
    --shadow-color: #00000020;
    --bg-select: #eaeaea30;
    --bg-opaque-1: #00000010;
    --bg-opaque-2: #00000020;
    --opacity: 0.6;
    --invert: 1;

	--c-button-default: var(--c-accent);
	--c-button-default-hover: #333333;
	--c-button-default-active: #000000;
	--c-button-primary: #007bff;
	--c-button-primary-hover: #1a88ff;
	--c-button-primary-active: #0056b3;
	--c-button-secondary: #6c757d;
	--c-button-secondary-hover: #5a6268;
	--c-button-secondary-active: #545b62;
	--c-button-danger: #dc3545;
	--c-button-danger-hover: #e04553;
	--c-button-danger-active: #bd2130;
	--c-button-success: #28a745;
	--c-button-success-hover: #2dbe4e;
	--c-button-success-active: #218838;
	--c-button-warning: #ffc107;
	--c-button-warning-hover: #ffcb33;
	--c-button-warning-active: #d39e00;
	--c-button-info: #17a2b8;
	--c-button-info-hover: #1ab6cf;
	--c-button-info-active: #117a8b;
}

.dark-mode .ui {
	--color: #ffffff;
    --bg-color: #161515;
    --bg-color-hero: #161515ee;
    --bg-color-light: #202020;
    --bg-color-secondary: #1a1a1a;
    --bg-color-tertiary: #1e1e1e;
    --bg-color-absolute: #000000;
    --border-color: #ffffff20;
    --shadow-color: #ffffff05;
    --bg-select: #0a0a0a30;
    --bg-opaque-1: #ffffff10;
    --bg-opaque-2: #ffffff20;
    --opacity: 0.3;
    --invert: 0;

	--c-button-default: var(--c-accent);
	--c-button-default-hover: #000000;
	--c-button-primary: #007bff;
	--c-button-primary-hover: #0056b3;
	--c-button-secondary: #6c757d;
	--c-button-secondary-hover: #545b62;
	--c-button-danger: #dc3545;
	--c-button-danger-hover: #bd2130;
	--c-button-success: #28a745;
	--c-button-success-hover: #218838;
	--c-button-warning: #ffc107;
	--c-button-warning-hover: #d39e00;
	--c-button-info: #17a2b8;
	--c-button-info-hover: #117a8b;
}
</style>

<template>
	<div class="ui">
		<slot></slot>
	</div>
</template>
