<script setup lang="ts">
const { color = "var(--color)", progress = 0, height = 20, rounded = "normal" } = defineProps<{
    color: string;
    progress: number;
    height: number;
    rounded: "small" | "normal" | "large" | "full";
}>();

const transparentColor = computed(() => {
    if (color.startsWith('var(')) {
        return `color-mix(in srgb, ${color} 30%, transparent)`;
    }
    
    if (color.startsWith('#')) {
        return `${color}4D`;
    }
    
    return `${color}4D`;
});
</script>

<style scoped>
.rounded--small {
    border-radius: var(--border-radius-small);
}

.rounded--large {
    border-radius: calc(var(--border-radius-standard) * 2);
}

.rounded--full {
    border-radius: 1000px;
}

.rounded--normal {
    border-radius: var(--border-radius-standard);
}
</style>

<template>
    <div 
        class="w-full bg-gray-300 relative" 
        :class="`rounded--${rounded}`"
        :style="{ height: `${height}px`, backgroundColor: transparentColor }"
    >
        <div
            class="top-0 left-0 h-full flex items-center justify-end absolute"
            :class="[`rounded--${rounded}`, height > 20 ? 'pr-3' : '']"
            :style="{ width: `${progress}%`, backgroundColor: color }"
        >
            <template v-if="height > 20">
                <slot></slot>
            </template>
        </div>
    </div>
</template>