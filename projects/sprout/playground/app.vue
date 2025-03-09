<script setup>
import { ref } from "vue";

const isModalOpened = ref(false);
console.log("isModalOpened", isModalOpened);

const openModal = () => {
	console.log("Opening modal");
	isModalOpened.value = true;
};
const closeModal = () => {
	isModalOpened.value = false;
};

const submitHandler = () => {
	//here you do whatever
};
</script>

<template>
	<Ui class="bg-slate-900">
		<Header logo="/img/logo.webp">
			<HeaderSitePagesItem
				href="https://example.com"
				icon="home"
				title="Example"
			/>
			<HeaderSitePagesItem
				href="https://example.com"
				icon="box-open"
				title="Example2"
			>
			</HeaderSitePagesItem>
			<HeaderSitePagesItem
				href="https://example.com"
				icon="newspaper"
				title="Example3"
			/>
			<ButtonGroup join>
				<Button color="success" size="small" type="default" rounded="small">
					WiiLink
				</Button>
				<Button
					color="primary"
					size="small"
					type="default"
					rounded="small"
					@click="openModal"
				>
					<LucideChevronDown />
				</Button>
				<Dropdown
					:isOpen="isModalOpened"
					@modal-close="closeModal"
					@submit="submitHandler"
					name="first-modal"
				>
					<template #header>Custom header</template>
					<template #content>Custom content</template>
					<template #footer>Custom content</template>
				</Dropdown>
			</ButtonGroup>
		</Header>
		<Main class="flex flex-col gap-3 pb-8">
			<ThemeToggle />

			<ButtonGroup direction="row">
				<Button color="default" size="default" type="outline" rounded="normal">
					Click Me
				</Button>
				<Button color="primary" size="default" type="outline" rounded="normal">
					Click Me
				</Button>
				<Button
					color="secondary"
					size="default"
					type="outline"
					rounded="normal"
				>
					Click Me
				</Button>
				<Button color="danger" size="default" type="outline" rounded="normal">
					Click Me
				</Button>
				<Button color="success" size="default" type="outline" rounded="normal">
					Click Me
				</Button>
				<Button color="warning" size="default" type="outline" rounded="normal">
					Click Me
				</Button>
				<Button color="info" size="default" type="outline" rounded="normal">
					Click Me
				</Button>
			</ButtonGroup>

			<ButtonGroup join>
				<Button color="info" size="default" type="default" rounded="normal">
					Click Me
				</Button>
				<Button color="primary" size="default" type="default" rounded="normal">
					Click Me
				</Button>
				<Button
					color="secondary"
					size="default"
					type="default"
					rounded="normal"
				>
					Click Me
				</Button>
				<Button color="danger" size="default" type="default" rounded="normal">
					Click Me
				</Button>
			</ButtonGroup>

			<div class="max-w-[400px]">
				<ButtonGroup join direction="column">
					<Button color="info" size="default" type="default" rounded="normal">
						Click Me
					</Button>
					<Button
						color="primary"
						size="default"
						type="default"
						rounded="normal"
					>
						Click Me
					</Button>
					<Button
						color="secondary"
						size="default"
						type="default"
						rounded="normal"
					>
						Click Me
					</Button>
					<Button color="danger" size="default" type="default" rounded="normal">
						Click Me
					</Button>
				</ButtonGroup>
			</div>

			<div class="flex flex-row items-center gap-3">
				<ButtonGroup join direction="row" class="mt-10">
					<Button color="primary" size="default" type="default" rounded="small">
						<Anchor
							href="https://wiilink.ca/download/windows"
							nochevron
							nounderline
							class="flex justify-center"
							><Icon name="uil:microsoft" />Download for Windows</Anchor
						>
					</Button>
					<Button
						color="primary"
						size="default"
						type="default"
						rounded="small"
						class="flex justify-center"
					>
						<LucideChevronDown />
					</Button>
				</ButtonGroup>

				<Button color="primary" size="default" type="outline" rounded="large">
					<Anchor
						href="https://wiilink.ca/guide/install"
						nochevron
						nounderline
						class="flex justify-center"
						><LucideArrowUpRight /> Installation Guide</Anchor
					>
				</Button>
			</div>

			<ButtonGroup>
				<Button
					color="primary"
					size="small"
					type="default"
					rounded="small"
					class="flex justify-center"
				>
					Small
				</Button>
				<Button
					color="primary"
					size="default"
					type="default"
					rounded="small"
					class="flex justify-center"
				>
					Default
				</Button>

				<Button
					color="primary"
					size="large"
					type="default"
					rounded="small"
					class="flex justify-center"
				>
					Large
				</Button>
			</ButtonGroup>

			<ButtonGroup>
				<Button
					color="primary"
					size="default"
					type="default"
					rounded="small"
					class="flex justify-center"
				>
					Small
				</Button>

				<Button
					color="primary"
					size="default"
					type="default"
					rounded="normal"
					class="flex justify-center"
				>
					Default
				</Button>

				<Button
					color="primary"
					size="default"
					type="default"
					rounded="large"
					class="flex justify-center"
				>
					Large
				</Button>

				<Button
					color="primary"
					size="default"
					type="default"
					rounded="full"
					class="flex justify-center"
				>
					Rounded
				</Button>
			</ButtonGroup>
		</Main>

		<Footer
			logo="/img/logo.webp"
			siteDesc="WiiLink is an unofficial, non-profit homebrew project. It is not affiliated with Nintendo and all trademarks are the property of their respective owners. No copyright infringement intended."
			class="top-[1500px]"
		>
			<FooterSitePagesItem href="https://example.com">
				TESTING
			</FooterSitePagesItem>
			<FooterSitePagesItem href="https://example.com">
				TESTING
			</FooterSitePagesItem>
			<FooterSitePagesItem href="https://example.com">
				TESTING
			</FooterSitePagesItem>
			<FooterSitePagesItem href="https://example.com">
				TESTING
			</FooterSitePagesItem>
			<FooterSitePagesItem href="https://example.com">
				TESTING
			</FooterSitePagesItem>
		</Footer>
	</Ui>
</template>
