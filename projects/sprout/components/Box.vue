<script setup lang="ts">
const { vertical = false } = defineProps<{
    vertical: boolean,
}>();
</script>

<style scoped>
    .box {
        display: flex;
        justify-content: space-between;
    }

    .box.vertical {
        flex-direction: column;
    }
</style>

<template>
<div class="box" :class="{vertical}">
    <slot></slot>
</div>
</template>