<script setup lang="ts">
const { logo = "https://wiilink.ca/img/logo.webp" } = defineProps<{
	logo: string | undefined;
}>();
</script>

<template>
	<div class="w-screen h-[80px]"></div>
	<header class="top-0 left-0 w-screen py-3 flex flex-row justify-center fixed z-100">
		<div
			class="w-full max-w-[1600px] flex flex-row items-center justify-between gap-8"
		>
			<img :src="logo" class="h-[70px]" alt="WiiLink Logo" />
			<div class="flex flex-row gap-3 items-center">
				<slot></slot>
			</div>
		</div>
	</header>
</template>
