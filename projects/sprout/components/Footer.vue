<style scoped>
.footer {
	padding-left: 220px;
	padding-right: 220px;
	
	padding-top: 65px;
	padding-bottom: 80px;
	
	background-color: var(--c-accent);
}

.footer__logo {
	height: 100px;
}

.footer__legal-warning {
	padding-left: 100px;
	padding-right: 100px;

	margin-bottom: 80px;
}

.footer__legal-warning h3 {
	text-wrap: auto;
}
</style>

<template>
	<footer class="footer">
		<Box vertical>
			<Box>
			<div class="footer__logo">
				<Logo />
			</div>
			<div>
				<H2>Site Pages</H2>
				<Hr />
				<List>
					<slot></slot>
				</List>
			</div>

			<div>
				<H2>The Team</H2>
				<Hr />
				<List>
					<!-- TODO: This page doesn't exist yet -->
					<ListItem><Anchor href="https://wiilink.ca/team">Members</Anchor></ListItem>
					<ListItem><Anchor href="https://github.com/WiiLink24">Organization</Anchor></ListItem>
					<ListItem><Anchor href="https://github.com/orgs/WiiLink24/repositories">Repositories</Anchor></ListItem>
				</List>
			</div>

			<div>
				<H2>Social Media</H2>
				<Hr />
				<List>
					<ListItem><Anchor href="https://discord.gg/wiilink">Discord</Anchor></ListItem>
					<ListItem><Anchor href="https://www.instagram.com/_wiilink">Instagram</Anchor></ListItem>
					
					<!-- TODO: Multilingual anchor -->
					<ListItem><Anchor href="https://example.com">Twitter</Anchor></ListItem>
					<ListItem><Anchor href="https://example.com">Bluesky</Anchor></ListItem>

					<ListItem><Anchor href="https://www.youtube.com/@wiilink">YouTube</Anchor></ListItem>
				</List>
			</div>
		</Box>
		<Hr spaced="big" />
		<div class="footer__legal-warning">
			<H3>
				WiiLink is an unofficial, non-profit homebrew project.
				It is not affiliated with Nintendo and all trademarks are the property of their respective owners.
				No copyright infringement intended.
			</H3>
		</div>
		<Box>
			<Anchor href="https://wiilink.ca/tos/" dim>Terms of Service</Anchor>
			<Anchor href="https://wiilink.ca/eula/" dim>End User License Agreement (EULA)</Anchor>
			<Anchor href="https://wiilink.ca/privacy-policy/" dim>Privacy Policy</Anchor>
		</Box>
		</Box>
	</footer>
</template>
