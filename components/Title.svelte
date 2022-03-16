<script>
    import clsx from 'clsx';
</script>

<div class={clsx('px-10 py-10 mt-24 mb-6', $$props.class)}>
    <h3 class="sectionTitle sectionTitleCenter">
        <b />
        <span class="sectionTitleCenter">
            <slot />
        </span>
        <b />
    </h3>
</div>
