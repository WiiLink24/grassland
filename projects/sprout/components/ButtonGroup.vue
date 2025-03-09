<script setup lang="ts">
const { join = false, direction = "row" } = defineProps<{
    join?: boolean;
    direction?: "row" | "column";
}>();
</script>

<style global>
.buttongroup {
    display: flex;
    flex-direction: v-bind(direction);
    gap: 10px;
}

.joined, .joincol {
    gap: 3px !important;
}

.joined button:first-child {
    border-top-left-radius: calc(var(--border-radius-standard) * 2) !important;
    border-bottom-left-radius: calc(var(--border-radius-standard) * 2) !important;
}

.joined button:last-child {
    border-top-right-radius: calc(var(--border-radius-standard) * 2) !important;
    border-bottom-right-radius: calc(var(--border-radius-standard) * 2) !important;
}

.joincol button:first-child {
    border-top-left-radius: calc(var(--border-radius-standard) * 2) !important;
    border-top-right-radius: calc(var(--border-radius-standard) * 2) !important;
}

.joincol button:last-child {
    border-bottom-left-radius: calc(var(--border-radius-standard) * 2) !important;
    border-bottom-right-radius: calc(var(--border-radius-standard) * 2) !important;
}
</style>

<template>
    <div class="buttongroup" :class="join ? (direction === 'column' ? 'joincol' : 'joined') : ''">
        <slot></slot>
    </div>
</template>