<script setup lang="ts">
const {
	href,
	dim = false,
	nochevron = false,
} = defineProps<{
	href: string;
	dim?: boolean; // Make optional with ?
	nochevron?: boolean; // Make optional with ?
}>();
</script>

<style scoped>
.anchor,
.anchor:visited {
	font-family: var(--font-inter);
	font-size: 18px;
	font-weight: normal;

	color: var(--c-text);

	position: relative;
	transition: 0.5s;
}

.anchor:hover {
	text-decoration: underline;
}

.anchor::before {
	content: "\f105";
	font-family: "FontAwesome";
	font-weight: 900;
	position: absolute;
	left: -20px;
	opacity: 0;
	transition: all 0.5s ease;
}
.anchor.animscroll:hover {
	padding-left: 25px;
	transition: 0.5s;
}
.anchor.animscroll:hover::before {
	left: 0px;
	opacity: 1;
}

.anchor.dim {
	color: var(--c-text-dim);
	transition: color 0.1s linear;
}

.anchor.dim:hover,
.anchor.dim:focus {
	color: var(--c-text);
}
</style>

<template>
	<a
		:href="href"
		class="anchor flex flex-row items-center gap-2"
		:class="{ dim: dim, animscroll: !nochevron }"
	>
		<slot></slot>
	</a>
</template>
