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
		<Box vertical padded>
			<Box align-items="start">
			<div class="footer__logo">
				<Logo />
			</div>
			<div>
				<h2>Site Pages</h2>
				<Hr />
				<List>
					<ListItem><a>Up</a></ListItem>
					<ListItem><a>To</a></ListItem>
					<ListItem><a>Six</a></ListItem>
					<ListItem><a>Different</a></ListItem>
					<ListItem><a>Links</a></ListItem>
					<ListItem><a>On</a></ListItem>
				</List>
			</div>

			<div>
				<h2>The Team</h2>
				<Hr />
				<List>
					<!-- TODO: This page doesn't exist yet -->
					<ListItem><a href="https://wiilink.ca/team">Members</a></ListItem>
					<ListItem><a href="https://github.com/WiiLink24">Organization</a></ListItem>
					<ListItem><a href="https://github.com/orgs/WiiLink24/repositories">Repositories</a></ListItem>
				</List>
			</div>

			<div>
				<h2>Social Media</h2>
				<Hr />
				<List>
					<ListItem><a href="https://discord.gg/wiilink">Discord</a></ListItem>
					<ListItem><a href="https://www.instagram.com/_wiilink">Instagram</a></ListItem>
					<!-- TODO: Multilingual anchor -->
					<ListItem><a href="https://example.com">Twitter</a></ListItem>
					<ListItem><a href="https://example.com">Bluesky</a></ListItem>
					<ListItem><a href="https://www.youtube.com/@wiilink">YouTube</a></ListItem>
				</List>
			</div>
		</Box>
		<Hr top="50" bottom="50"/>
		<div class="footer__legal-warning">
			<h3>
				WiiLink is an unofficial, non-profit homebrew project.
				It is not affiliated with Nintendo and all trademarks are the property of their respective owners.
				No copyright infringement intended.
			</h3>
		</div>
		<Box>
			<Anchor href="https://wiilink.ca/tos/" dim>Terms of Service</Anchor>
			<Anchor href="https://wiilink.ca/eula/" dim>End User License Agreement (EULA)</Anchor>
			<Anchor href="https://wiilink.ca/privacy-policy/" dim>Privacy Policy</Anchor>
		</Box>
		</Box>
	</footer>
</template>
