<script setup lang="ts">
const { spaced = undefined, divider = false } = defineProps<{
    spaced: "small" | "big" | undefined;
    divider?: boolean;
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
        top = bottom = "30px";
        break;
    }
}
</script>

<style scoped>
.hr {
    background-color: var(--c-text);
    height: 2px;
    border: 0;
	opacity: 0.25;

    margin-top: v-bind(top);
    margin-bottom: v-bind(bottom);
}

.hr--divider {
    width: 50px;
    margin-left: 0;
}
</style>

<template>
    <hr :class="['hr', { 'hr--divider': divider }]" />
</template>