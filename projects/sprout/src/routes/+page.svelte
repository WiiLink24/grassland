<script>
    import App from "$lib/App.svelte";
    import Button from "$lib/Button.svelte";
    import DarkModeButton from "$lib/DarkModeButton.svelte";
    import LightModeButton from "$lib/LightModeButton.svelte";
    import ThemeProvider from "$lib/ThemeProvider.svelte";

    let foo = $state(4);
    let bar = $state(false);
</script>

<div style="padding: 20px; background-color: #f2f2f2;">
    <h1>Welcome to your library project</h1>
    <p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
    <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

    <p>{foo}</p>

    <App>
        <ThemeProvider colorScheme="generic">
            <DarkModeButton/>
            <LightModeButton/>
            <Button onclick={() => {
            }}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {
                foo--;
            }}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        <br>
        <ThemeProvider colorScheme="wc24">
            <Button onclick={() => {console.log("PRIMARY"); foo++}}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {console.log("SECONDARY"); foo--}}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        <br>
        <ThemeProvider colorScheme="account">
            <Button onclick={() => {console.log("PRIMARY"); foo++}}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {console.log("SECONDARY"); foo--}}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        <br>
        <ThemeProvider colorScheme="internal">
            <Button onclick={() => {console.log("PRIMARY"); foo++}}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {console.log("SECONDARY"); foo--}}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        
        <br>

        <div style="background-color: var(--color-black); padding: 30px">
        <ThemeProvider colorScheme="generic" >
            <Button onclick={() => {console.log("PRIMARY"); foo++}}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {console.log("SECONDARY"); foo--}}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        <br>
        <ThemeProvider colorScheme="wc24" >
            <Button onclick={() => {console.log("PRIMARY"); foo++}}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {console.log("SECONDARY"); foo--}}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        <br>
        <ThemeProvider colorScheme="account" >
            <Button onclick={() => {console.log("PRIMARY"); foo++}}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {console.log("SECONDARY"); foo--}}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        <br>
        <ThemeProvider colorScheme="internal">
            <Button onclick={() => {console.log("PRIMARY"); foo++}}>Installation Guide</Button>
            <Button type="secondary" onclick={() => {console.log("SECONDARY"); foo--}}>Installation Guide</Button>
            <Button type="danger" onclick={() => {console.log("DANGER!")}}>Installation Guide</Button>

            <Button disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="secondary" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
            <Button type="danger" disabled onclick={() => {console.log("THIS IS NOT GOING TO BE PRINTED")}}>Installation Guide</Button>
        </ThemeProvider>
        </div>
    </App>
</div>