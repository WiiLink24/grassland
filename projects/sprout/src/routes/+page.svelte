<script>
// @ts-nocheck

    import App from "$lib/App.svelte";
    import Box from "$lib/Box.svelte";
    import Button from "$lib/Button.svelte";
    import CallToAction from "$lib/CallToAction.svelte";
    import H1 from "$lib/H1.svelte";
    import H2 from "$lib/H2.svelte";
    import H3 from "$lib/H3.svelte";
    import H4 from "$lib/H4.svelte";
    import Surface from "$lib/Surface.svelte";
    import ThemeProvider from "$lib/ThemeProvider.svelte";
    import { colorScheme } from "$lib/colorScheme.svelte.js";
</script>

<App>
    <ThemeProvider brandColor="generic">
        <Button disabled>I'm disabled</Button>
        <Button type="secondary"disabled>I'm secondary & disabled</Button>
        <Button type="danger"disabled>I'm secondary & disabled</Button>
    </ThemeProvider>
    <ThemeProvider brandColor="account">
        <Button disabled>I'm disabled</Button>
        <Button type="secondary"disabled>I'm secondary & disabled</Button>
        <Button type="danger"disabled>I'm secondary & disabled</Button>
    </ThemeProvider>
    <ThemeProvider brandColor="internal">
        <Button disabled>I'm disabled</Button>
        <Button type="secondary"disabled>I'm secondary & disabled</Button>
        <Button type="danger"disabled>I'm secondary & disabled</Button>
    </ThemeProvider>
    <ThemeProvider brandColor="wc24">
        <Button disabled>I'm disabled</Button>
        <Button type="secondary"disabled>I'm secondary & disabled</Button>
        <Button type="danger"disabled>I'm secondary & disabled</Button>
    </ThemeProvider>
    <ThemeProvider brandColor="generic">
        <Button disabled>I'm disabled</Button>
        <Button type="secondary"disabled>I'm secondary & disabled</Button>
        <Button type="danger"disabled>I'm secondary & disabled</Button>

        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <Button type="danger">Delete all data!</Button>
        <CallToAction>Call to action!</CallToAction>
        Non call to action
        <Surface>
            <Box vertical>
                <Box>
                    <CallToAction>GOO</CallToAction>
                    <Surface noPadding>
                        LEVEL 2! <Button>FALALO</Button>
                    </Surface>
                    TEXT AND
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = true;
                    }}>Dark Mode</Button>
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = false;
                    }}>Light Mode</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
                <Box vertical>
                    TEXT AND
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
            </Box>
            
        </Surface>
    </ThemeProvider>

    <ThemeProvider brandColor="internal">
        <Surface>
            <Box vertical>
                <Box>
                    TEXT AND
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = true;
                    }}>Dark Mode</Button>
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = false;
                    }}>Light Mode</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
                <Box vertical>
                    TEXT AND
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
            </Box>
            
        </Surface>
    </ThemeProvider>

    <ThemeProvider brandColor="account">
        <Surface>
            <Box vertical>
                <Box>
                    TEXT AND
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = true;
                    }}>Dark Mode</Button>
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = false;
                    }}>Light Mode</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
                <Box vertical>
                    TEXT AND
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
            </Box>
            
        </Surface>
    </ThemeProvider>

    <ThemeProvider brandColor="wc24">
        <Surface>
            <Box vertical>
                <Box>
                    TEXT AND
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = true;
                    }}>Dark Mode</Button>
                    <Button onclick={() => {
                        colorScheme.darkModeEnabled = false;
                    }}>Light Mode</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
                <Box vertical>
                    TEXT AND
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button>Buttons!</Button>
                    <Button type="secondary">Buttons!</Button>
                </Box>
            </Box>
            
        </Surface>
    </ThemeProvider>
</App>