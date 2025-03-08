<script setup lang="ts">
import { setupDarkMode } from "../util";

setupDarkMode();
</script>

<style lang="scss">
@import 'normalize-scss';
@include normalize();
</style>

<style scoped>
/*
	Normalize styling,
	check: https://www.joshwcomeau.com/css/custom-css-reset/
*/

:deep(*), :deep(*::before), :deep(*::after) {
  box-sizing: border-box;
}

:deep(*) {
  margin: 0;
}

:deep(img), :deep(picture), :deep(video), :deep(canvas), :deep(svg) {
  display: block;
  max-width: 100%;
}

:deep(input), :deep(button), :deep(textarea), :deep(select) {
  font: inherit;
}

:deep(p), :deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
  overflow-wrap: break-word;
}

:deep(p) {
  text-wrap: pretty;
}

:deep(h1), :deep(h2), :deep(h3), :deep(h4), :deep(h5), :deep(h6) {
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

.ui {
	--font-sans-serif-fallbacks: "Arial", "Helvetica", sans-serif;

	--font-inter: "Inter";
	--font-poppins: "Poppins";

	--c-white: #FFFFFF;
	--c-black: #090909;
	--c-white-dim: #FFFFFF41;

	--c-accent: var(--c-black);
	--c-text: var(--c-white);
	--c-text-dim: var(--c-white-dim);

	line-height: 1.5;
  	-webkit-font-smoothing: antialiased;
}

.dark-mode .ui {
}
</style>

<template>
	<div class="ui">
		<slot></slot>
	</div>
</template>
