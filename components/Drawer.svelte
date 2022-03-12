<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, fly } from 'svelte/transition';

    const dispatch = createEventDispatcher();

    export let open = false;
</script>

{#if open}
    <div class="container">
        <div class="backdrop" transition:fade="{{delay: 0, duration: 300}}" on:click={() => dispatch('close', false)} />
        <div class="content" transition:fly="{{delay: 0, duration: 300}}">
            <div class="w-4/12">Ahbar</div>
        </div>
    </div>
{/if}

<style>
    .container {
        position: fixed;
        inset: 0px;
        z-index: 1200;
    }
    .backdrop {
        position: fixed;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        inset: 0px;
        background-color: rgba(0, 0, 0, 0.5);
        -webkit-tap-highlight-color: transparent;
        z-index: -1;
    }
    .content {
        background-color: rgb(18, 18, 18);
        color: rgb(255, 255, 255);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: rgb(0 0 0 / 20%) 0px 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
        background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        height: 100%;
        flex: 1 0 auto;
        z-index: 1200;
        position: fixed;
        top: 0px;
        outline: 0px;
        right: 0px;
        /* transform: translate(100%, 0); */
    }
</style>
