<script setup lang="ts">
const { href, dim = false } = defineProps<{
	href: string;
	dim: boolean;
}>();
</script>

<style scoped>
.anchor,
.anchor:visited {
	font-family: var(--font-inter);
	font-size: 16px;
	font-weight: normal;

	color: var(--c-text);
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
	<a :href class="anchor" :class="{ dim: dim }">
		<slot></slot>
	</a>
</template>
