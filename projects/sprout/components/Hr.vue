<script setup lang="ts">
const { spaced = undefined } = defineProps<{
	spaced: "small" | "big" | undefined;
}>();

let top;
let bottom;

switch (spaced) {
	case undefined: {
		top = "2px";
		bottom = "15px";
		break;
	}

	case "small": {
		top = bottom = "15px";
		break;
	}

	case "big": {
		top = bottom = "50px";
		break;
	}
}
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
