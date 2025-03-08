<script setup lang="ts">
const { href } = defineProps<{
    href: string,
}>();
</script>

<template>
<ListItem>
    <Anchor :href>
        <slot></slot>
    </Anchor>
</ListItem>
</template>