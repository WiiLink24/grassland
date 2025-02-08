<script lang="ts">
    import type { Snippet } from "svelte";

    interface Props {
        type: "primary" | "secondary" | "danger";
        disabled: boolean;
        onclick: () => void;
        children: Snippet;
    }

    let {
        type: buttonType = "primary",
        disabled = false,
        onclick: callback = () => {},
        children
    }: Props = $props();
</script>

<style>
    .button {
        padding-block: 10px;
        padding-inline: 10px;

        border-radius: var(--border-radius-small);
        border-width: 2px;
        border-style: solid;

        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out;
    }

    .button:hover {
        cursor: pointer;
    }

    .disabled:hover {
        cursor: not-allowed;
    }

    .primary, .secondary:not(.disabled):hover, .danger {
        color: var(--color-accent-text);
    }

    .primary, .secondary:not(.disabled):hover {
        background-color: var(--color-accent-background);
        border-color: var(--color-accent-background);
        color: var(--color-accent-text);
    }

    .primary.disabled {
        background-color: var(--color-accent-background-disabled);
        border-color: var(--color-accent-background-disabled);
    }

    .primary:not(.disabled):hover {
        background-color: var(--color-accent-background-active);
        border-color: var(--color-accent-background-active);
        color: var(--color-accent-text-active);
    }

    .secondary {
        background-color: #00000000;
        border: 3px var(--color-accent-background) solid;
        color: var(--color-text);
    }
    
    .secondary.disabled {
        border-color: var(--color-accent-background-disabled);
        color: var(--color-text-disabled);
    }

    .danger {
        background-color: var(--color-red);
        border-color: var(--color-red);
        color: var(--color-white);
    }

    .danger.disabled {
        background-color: var(--color-light-red);
        border-color: var(--color-light-red);
    }

    .danger:not(.disabled):hover {
        background-color: var(--color-deep-red);
        border-color: var(--color-deep-red);
    }
</style>

<button class={[ "button", buttonType, disabled ? "disabled" : "" ]} onclick={() => {
    if (disabled) {
        return;
    }

    callback();
}}>
    {@render children()}
</button>