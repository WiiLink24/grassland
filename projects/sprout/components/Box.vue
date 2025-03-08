<script setup lang="ts">
const props = defineProps({
    vertical: Boolean,
    alignItems: String,
})

const alignItemsStart = props.alignItems == "start";
</script>

<style scoped>
    .box {
        display: flex;
        justify-content: space-between;
    }

    .box.vertical {
        flex-direction: column;
    }

    .box.alignItemsStart {
        align-items: start;
    }
</style>

<template>
<div class="box" :class="{vertical: props.vertical, alignItemsStart: alignItemsStart}">
    <slot></slot>
</div>
</template>