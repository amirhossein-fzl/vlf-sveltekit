<script>
    import Ripple from "svelte-materialify/dist/actions/Ripple";
    // import Ripple from "../src/actions/Ripple";
    export let icon;
    export let link;
    export let title;
</script>

<a href={link} use:Ripple={{ class: '!text-pink-500' }} class="!p-2.5 !rounded-theme flex flex-col !mt-2.5 items-center w-full mb-4 relative overflow-hidden">
    <img src={icon} alt={title} class="w-20 h-20" />
    <h5 class="mt-5 text-center w-full">
        {title}
    </h5>
</a>
