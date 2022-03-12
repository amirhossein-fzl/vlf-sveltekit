<script>
    import MediaQuery from './navs/MediaQuery.svelte';
    import DisplayDesktop from './navs/DisplayDesktop.svelte';
    import DisplayMobile from './navs/DisplayMobile.svelte';
    import HeaderSection from '$lib/HeaderSection.svelte';
    import Container from 'sveltestrap/src/Container.svelte';

    export let isHome = false;
</script>

<MediaQuery query="(min-width: 768px)">
    <DisplayDesktop />
</MediaQuery>

<MediaQuery query="(max-width: 768px)">
    <DisplayMobile />
</MediaQuery>

{#if isHome}
    <section>
        <Container>
            <HeaderSection />
        </Container>
    </section>
{/if}
