<style scoped>
@font-face {
	font-family: "Inter";
	src: url(/public/fonts/inter-18pt-regular.woff2) format(woff2);
	font-weight: normal;
}

@font-face {
	font-family: "Poppins";
	src: url(/public/fonts/poppins-bold.woff2) format(woff2);
	font-weight: bold;
}

.ui {
	--font-sans-serif-fallbacks: "Arial", "Helvetica", sans-serif;

	--font-inter: "Inter", var(--font-sans-serif-fallbacks);
	--font-poppins: "Poppins", var(--font-sans-serif-fallbacks);

	--c-accent: red;
}

.dark-mode .ui {
	--c-accent: blue;
}

:deep(li),
:deep(a),
:deep(p) {
	font-family: var(--font-inter);
	font-size: 16px;
	font-weight: normal;
}
</style>

<template>
	<div class="ui">
		<slot></slot>
	</div>
</template>
