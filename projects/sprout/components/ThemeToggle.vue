<script lang="ts">
export default {
	data() {
		return {
			darkMode: localStorage.getItem("dark-mode") == "true",
		};
	},

	mounted() {
		if (this.darkMode) {
			document.documentElement.className = "dark-mode";
		} else {
			document.documentElement.className = "";
		}
	},

	methods: {
		toggleTheme(_event: Event) {
			this.darkMode = !this.darkMode;

			if (this.darkMode) {
				document.documentElement.className = "";
				localStorage.setItem("dark-mode", "false");
			} else {
				document.documentElement.className = "dark-mode";
				localStorage.setItem("dark-mode", "true");
			}
		},
	},
};
</script>

<template>
	<button @click="toggleTheme">CHANGE THEME</button>
</template>
