<script setup lang="ts">
interface Props {
    top?: string,
    bottom?: string,
}

const props = withDefaults(defineProps<Props>(), {
    top: "2",
    bottom: "15",
})

const top = `${props.top}px`;
const bottom = `${props.bottom}px`;

</script>

<style scoped>
.hr {
    background-color: var(--c-text);
    height: 3px;
    border-radius: 8px;
    border: 0;

	margin-top: v-bind(top);
	margin-bottom: v-bind(bottom);
}
</style>

<template>
<hr class="hr" />
</template>