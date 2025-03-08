<script setup lang="ts">
const props = defineProps<{
    href: string,
    dim: boolean,
}>();
</script>

<style scoped>
.anchor.dim {
    color: var(--c-text-dim);
    transition: color 0.1s linear;
}

.anchor.dim:hover, .anchor.dim:focus {
    color: var(--c-text);
}
</style>

<template>
<a :href="props.href" class="anchor" :class="{dim: props.dim}">
    <slot></slot>
</a>
</template>