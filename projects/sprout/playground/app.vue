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

			<div class="!my-6 max-w-[600px]">
				<H1 class="flex flex-row items-center gap-2"
					>Welcome to <span class="font-[var(--font-rubik)]">WiiLink</span>
					<span
						class="py-1 px-2 rounded-[var(--border-radius-standard)] bg-[var(--c-button-primary)] font-[var(--font-gilroy)] text-2xl font-bold"
						>WFC</span
					></H1
				>
				<Text class="!mt-1 !mb-3">
					WiiLink WFC is a custom server for the Nintendo Wii console that
					allows you to play online games with friends, as well as download
					custom content for your games. It is a non-profit project that is not
					affiliated with Nintendo.
				</Text>

				<ButtonGroup>
					<Button
						size="small"
						type="text"
						class="!text-white/40 -translate-y-[2px] flex flex-row items-center gap-2"
						><img
							src="https://avatars.githubusercontent.com/u/26661008?v=4"
							class="w-6 rounded-full"
						/>
						Developed by <u>Palapeli</u></Button
					>
					<Hr class="!mt-5 !my-6 flex-grow block relative" />
				</ButtonGroup>

				<div class="flex flex-row items-center gap-3">
					<ButtonGroup join direction="row" class="mt-10 flex-grow">
						<Button
							color="success"
							size="default"
							type="default"
							rounded="small"
							class="flex-grow"
						>
							<Anchor
								href="https://wiilink.ca/download/windows"
								nochevron
								nounderline
								class="flex justify-center"
								><LucideDownload :size="20" />Download WFC Patcher</Anchor
							>
						</Button>
						<Button
							color="success"
							size="default"
							type="default"
							rounded="small"
							class="flex justify-center"
						>
							<LucideChevronDown />
						</Button>
					</ButtonGroup>

					<Button color="success" size="default" type="outline" rounded="large">
						<Anchor
							href="https://wiilink.ca/guide/install"
							nochevron
							nounderline
							class="flex justify-center"
							><LucideArrowUpRight /> Installation Guide</Anchor
						>
					</Button>
				</div>
				<br>
				<Progress color="var(--c-button-primary)" progress="30" height="15" rounded="full" >
					Progressbar content not visible
				</Progress>
				<br>
				<Progress color="var(--c-button-success)" progress="70" height="30" rounded="normal" >
					<Text>Progressbar content visible</Text>
				</Progress>
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
