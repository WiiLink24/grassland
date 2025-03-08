<script setup lang="ts">
import { toggleDarkMode } from "../util";

function onClick(_event: Event) {
	toggleDarkMode();
}
</script>

<style scoped>
.dark-mode .button {
	background-color: black;
	color: white;
}
</style>

<template>
	<button class="button" @click="onClick">CHANGE THEME</button>
</template>
