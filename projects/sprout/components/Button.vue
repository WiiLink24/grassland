<script setup lang="ts">
    const { color = "default", size = "default", type = "default", rounded = "normal" } = defineProps<{
        color: "default" | "primary" | "secondary" | "danger" | "success" | "warning" | "info";
        size: "default" | "small" | "large";
        type: "default" | "outline" | "text";
        rounded: "small" | "normal" | "large" | "full";
    }>();
</script>

<style scoped>
    .button {
        font-family: var(--font-system);
        font-size: 18px;
        font-weight: normal;
        border-width: 2px !important;
        border-style: solid !important;

        color: var(--c-text);

        background-color: var(--c-button-default);
        border: 0;
        border-radius: 4px;
        padding: 10px 20px;

        display: flex;
        align-items: center;

        cursor: pointer;
        transition: 0.1s ease-in-out;
    }

    .button:hover {
        background-color: var(--c-button-default-hover);
        border-color: var(--c-button-default-hover);
    }

    .button--primary {
        background-color: var(--c-button-primary);
        border-color: var(--c-button-primary);
    }

    .button--primary:hover {
        background-color: var(--c-button-primary-hover);
        border-color: var(--c-button-primary-hover);
    }

    .button--primary:active {
        transform: translate(0, var(--travel-distance));
        background-color: var(--c-button-primary-active);
        border-color: var(--c-button-primary-active);
    }

    .button--secondary {
        background-color: var(--c-button-secondary);
        border-color: var(--c-button-secondary);
    }

    .button--secondary:hover {
        background-color: var(--c-button-secondary-hover);
        border-color: var(--c-button-secondary-hover);
    }

    .button--secondary:active {
        transform: translate(0, var(--travel-distance));
        background-color: var(--c-button-secondary-active);
        border-color: var(--c-button-secondary-active);
    }

    .button--danger {
        background-color: var(--c-button-danger);
        border-color: var(--c-button-danger);
    }

    .button--danger:hover {
        background-color: var(--c-button-danger-hover);
        border-color: var(--c-button-danger-hover);
    }

    .button--danger:active {
        transform: translate(0, var(--travel-distance));
        background-color: var(--c-button-danger-active);
        border-color: var(--c-button-danger-active);
    }

    .button--success {
        background-color: var(--c-button-success);
        border-color: var(--c-button-success);
    }

    .button--success:hover {
        background-color: var(--c-button-success-hover);
        border-color: var(--c-button-success-hover);
    }

    .button--success:active {
        transform: translate(0, var(--travel-distance));
        background-color: var(--c-button-success-active);
        border-color: var(--c-button-success-active);
    }

    .button--warning {
        background-color: var(--c-button-warning);
        border-color: var(--c-button-warning);
    }

    .button--warning:hover {
        background-color: var(--c-button-warning-hover);
        border-color: var(--c-button-warning-hover);
    }

    .button--warning:active {
        transform: translate(0, var(--travel-distance));
        background-color: var(--c-button-warning-active);
        border-color: var(--c-button-warning-active);
    }

    .button--info {
        background-color: var(--c-button-info);
        border-color: var(--c-button-info);
    }

    .button--info:hover {
        background-color: var(--c-button-info-hover);
        border-color: var(--c-button-info-hover);
    }

    .button--info:active {
        transform: translate(0, var(--travel-distance));
        background-color: var(--c-button-info-active);
        border-color: var(--c-button-info-active);
    }

    .button--small {
        padding: 5px 10px;
    }

    .button--large {
        padding: 15px 30px;
    }

    .button--outline {
        background-color: transparent;
    }

    .button--outline:hover {
        color: var(--c-text);
    }

    .button--text {
        background-color: transparent;
        border-width: 0px !important;
        padding: 0 !important;
        color: var(--c-button-default);
    }

    .button--text:hover {
        background-color: transparent;
        color: var(--c-text);
    }

    .button--rounded-small {
        border-radius: var(--border-radius-small);
    }

    .button--rounded-large {
        border-radius: calc(var(--border-radius-standard) * 2);
    }

    .button--rounded-full {
        border-radius: 1000px;
    }

    .button--rounded-normal {
        border-radius: var(--border-radius-standard);
    }

</style>

<template>
    <button
        :class="[
            'button',
            `button--${color}`,
            `button--${size}`,
            `button--${type}`,
            `button--rounded-${rounded}`
        ]"
    >
        <slot></slot>
    </button>
</template>