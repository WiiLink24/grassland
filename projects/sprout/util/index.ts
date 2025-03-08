export function setupDarkMode() {
	if (!import.meta.client) {
		return;
	}

	const darkMode = useState("darkMode");
	darkMode.value = localStorage.getItem("dark-mode") == "true";

	if (darkMode.value) {
		document.documentElement.className = "dark-mode";
	} else {
		document.documentElement.className = "";
	}
}

export function toggleDarkMode() {
	if (!import.meta.client) {
		return;
	}

	const darkMode = useState("darkMode");

	darkMode.value = !darkMode.value;

	if (darkMode.value) {
		document.documentElement.className = "dark-mode";
		localStorage.setItem("dark-mode", "true");
	} else {
		document.documentElement.className = "";
		localStorage.setItem("dark-mode", "false");
	}
}
