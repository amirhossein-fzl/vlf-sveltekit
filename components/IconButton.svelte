<script>
    import clsx from 'clsx';
    import Ripple from 'svelte-materialify/dist/actions/Ripple';
    // import { onMount } from 'svelte';

    export let size = 'small';
    export let color = 'primary';
    export let variant = 'contained';

    let ripple = { opacity: 0.2, centered: true, clearingDuration: '.7s' };

    switch (color) {
        case 'primary':
            ripple.opacity = 0.2;
            break;
        case 'secondary':
            if (variant == 'contained') {
                ripple.opacity = 0.4;
            }
            break;

        default:
            break;
    }
</script>

<button class={clsx('btn', size, variant, color, $$props.class)} on:click use:Ripple={ripple}>
    <span><slot /></span>
</button>

<style lang="scss">
    @import 'styles/variables.scss';
    .btn {
        @apply rounded-full;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        font-weight: 500;
        line-height: 1.75;
        user-select: none;
        transition: 0.3s;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        flex: 0 0 auto;
        &.small {
            padding: 5px;
            font-size: 1.125rem;
        }
        &.medium {
            padding: 12px;
            font-size: 1.75rem;
        }
        &.large {
            padding: 16px;
            font-size: 2rem;
        }
        :global(svg) {
            fill: currentColor;
        }
        &.contained {
            &.primary {
                @apply bg-primary-500;
                color: #fff;
                
                &:hover {
                    @apply bg-primary-600;
                }
            }
            &.secondary {
                @apply bg-secondary-500;
                color: #fff;
                
                &:hover {
                    @apply bg-secondary-600;
                }
            }
            &.white {
                background-color: transparent;
                color: #fff;
            }
        }
        &.outlined {
            border-width: 1px;
            border-style: solid;
            &.primary {
                @apply text-primary-500;
                @apply border-primary-500;
                background-color: lighten($color: $primary, $amount: 40%);
                &:hover {
                    @apply text-primary-600;
                    @apply border-primary-600;
                }
            }
            &.secondary {
                @apply text-secondary-500;
                
                @apply border-secondary-500;
                background-color: lighten($color: $secondary, $amount: 39%);
                &:hover {
                    @apply text-secondary-600;
                    @apply border-secondary-600;
                }
            }
        }
        &.flat {
            &.primary {
                &:hover {
                    @apply bg-primary-50;
                }
                @apply text-primary-500;
            }
            &.secondary {
                &:hover {
                    @apply bg-secondary-50;
                }
                @apply text-secondary-500;
            }
            &.danger {
                &:hover {
                    @apply bg-red-50;
                }
                @apply text-red-500;
            }
        }

        &.transparent {
            &.danger {
                &:hover {
                    @apply bg-transparent;
                }
                @apply text-red-500;
            }
        }
    }
</style>
