<script setup lang="ts">
const { siteDesc = undefined, logo = "https://wiilink.ca/img/logo.webp" } = defineProps<{
	siteDesc: string | undefined;
	logo: string | undefined;
}>();
</script>

<style scoped>
.footer {
	background: var(--c-gradient);
}
</style>

<template>
	<footer class="footer py-8 flex flex-col justify-center items-center">
		<div class="flex flex-col max-w-[1200px]">
			<div class="flex flex-row justify-between items-start gap-[40px]">
				<div class="footer__logo min-w-[300px]">
					<img :src="logo" class="h-[100px]" alt="WiiLink Logo" />
				</div>
				<div>
					<H2 class="!font-[system-ui]">Site Pages</H2>
					<Hr divider />
					<List>
						<slot></slot>
					</List>
				</div>

				<div>
					<H2 class="!font-[system-ui]">The Team</H2>
					<Hr divider />
					<List>
						<!-- TODO: This page doesn't exist yet -->
						<ListItem
							><Anchor href="https://sso.riiconnect24.net"
								>WiiLink Internal</Anchor
							></ListItem
						>
						<ListItem
							><Anchor href="https://wiilink.ca/team">Members</Anchor></ListItem
						>
						<ListItem
							><Anchor href="https://github.com/WiiLink24"
								>Organization</Anchor
							></ListItem
						>
						<ListItem
							><Anchor href="https://github.com/orgs/WiiLink24/repositories"
								>Repositories</Anchor
							></ListItem
						>
					</List>
				</div>

				<div>
					<H2 class="!font-[system-ui]">Social Media</H2>
					<Hr divider />
					<List>
						<ListItem
							><Anchor href="https://discord.gg/wiilink" nochevron
								><Icon name="uil:discord" /> Discord</Anchor
							></ListItem
						>
						<ListItem
							><Anchor href="https://www.instagram.com/_wiilink" nochevron
								><Icon name="uil:instagram" />Instagram</Anchor
							></ListItem
						>

						<!-- TODO: Multilingual anchor -->
						<ListItem
							><Anchor href="https://example.com" nochevron
								><Icon name="uil:twitter" />Twitter</Anchor
							></ListItem
						>
						<ListItem
							><Anchor href="https://example.com" nochevron
								><Icon name="uil:bluesky" />Bluesky</Anchor
							></ListItem
						>

						<ListItem
							><Anchor href="https://www.youtube.com/@wiilink" nochevron
								><Icon name="uil:youtube" />YouTube</Anchor
							></ListItem
						>
					</List>
				</div>

				<div>
					<H2 class="!font-[system-ui]">Github Repos</H2>
					<Hr divider />
					<List>
						<ListItem
							><Anchor href="https://discord.gg/wiilink"
								>WiiLink Patcher</Anchor
							></ListItem
						>
						<ListItem
							><Anchor href="https://www.instagram.com/_wiilink"
								>WiiLink WFC</Anchor
							></ListItem
						>

						<!-- TODO: Multilingual anchor -->
						<ListItem
							><Anchor href="https://www.instagram.com/_wiilink"
								>Website</Anchor
							></ListItem
						>
						<ListItem
							><Anchor href="https://www.instagram.com/_wiilink"
								>Food Channel</Anchor
							></ListItem
						>

						<ListItem
							><Anchor href="https://www.youtube.com/@wiilink"
								>Wii Room</Anchor
							></ListItem
						>
					</List>
				</div>
			</div>
			<Hr spaced="big" />
			<div class="w-full">
				<Text class="!text-2xl !font-bold">
					{{ siteDesc }}
					<br /><br />
					&copy; {{ new Date().getFullYear() }}
					<span class="font-[Rubik]">WiiLink</span>
					<span class="font-[Gilroy]">Team</span>
				</Text>
			</div>
			<div class="!mt-8 flex flex-row items-center justify-between gap-6">
				<Anchor href="https://wiilink.ca/tos/" dim nochevron
					><LucideArrowRight /> Terms of Service</Anchor
				>
				<Anchor href="https://wiilink.ca/eula/" dim nochevron
					><LucideArrowRight /> End User License Agreement (EULA)</Anchor
				>
				<Anchor href="https://wiilink.ca/privacy-policy/" dim nochevron
					><LucideArrowRight /> Privacy Policy</Anchor
				>
			</div>
		</div>
	</footer>
</template>
