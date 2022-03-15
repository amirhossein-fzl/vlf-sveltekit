<script>
    import Container from 'sveltestrap/src/Container.svelte';
    import Button from '$lib/Button.svelte';
    import IconButton from '$lib/IconButton.svelte';
    import Drawer from '$lib/Drawer.svelte';

    let isMenuOpen = false;
    let isUserMenuOpen = false;

</script>

<header class="bg-primary-500 py-1.5">
    <div class="flex justify-between items-center">
        <IconButton color="white" size="medium" on:click={() => isMenuOpen = !isMenuOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
        </IconButton>

        <Drawer open={isMenuOpen} class="w-64" on:close={() => isMenuOpen = !isMenuOpen}>
            <div class="flex justify-end">
                <IconButton size="medium" color="danger" variant="transparent" on:click={() => isMenuOpen = false}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
                </IconButton>
            </div>

            <div class="flex flex-col px-2">
                <a href="/" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    صفحه اصلی
                </a>
                <a href="/blog" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    وبلاگ
                </a>
                <a href="/about" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    درباره ما
                </a>
                <a href="/contact" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    تماس باما
                </a>

                <Button class="mt-5">مدرس شوید</Button>
            </div>
        </Drawer>

        <a href="/">
            <img src="/vercel.svg" class="w-[100px] h-[50px]" alt="Logo" />
        </a>

        <IconButton color="white" size="medium" on:click={() => isUserMenuOpen = !isUserMenuOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
        </IconButton>

        <Drawer open={isUserMenuOpen} position="left" on:close={() => isUserMenuOpen = !isUserMenuOpen}>
            <!-- <div class="flex justify-start">
                <IconButton size="medium" color="danger" variant="flat" on:click={() => isUserMenuOpen = false}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
                </IconButton>
            </div> -->
            <div class="bg-slate-600 w-64 border-b-2 border-red-500 pb-5">
                <IconButton size="medium" color="danger" variant="transparent" on:click={() => isUserMenuOpen = false}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 320 512"><path d="M312.1 375c9.369 9.369 9.369 24.57 0 33.94s-24.57 9.369-33.94 0L160 289.9l-119 119c-9.369 9.369-24.57 9.369-33.94 0s-9.369-24.57 0-33.94L126.1 256L7.027 136.1c-9.369-9.369-9.369-24.57 0-33.94s24.57-9.369 33.94 0L160 222.1l119-119c9.369-9.369 24.57-9.369 33.94 0s9.369 24.57 0 33.94L193.9 256L312.1 375z"/></svg>
                </IconButton>
                <div class="flex justify-center">
                    <img src="/img/Amir-developer-avatar.jpg" class="rounded-full w-20 h-20" alt="Avatar" />
                </div>

                <div class="flex flex-col justify-center items-center mt-1 text-white">
                    <span class="text-sm">امیرحسین فضلی</span>
                    <span class="text-xs mt-1">عضویت : 1400/03/25</span>
                </div>
            </div>
            <div class="flex flex-col px-2">
                
                <a href="/" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    صفحه اصلی
                </a>
                <a href="/blog" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    وبلاگ
                </a>
                <a href="/about" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    درباره ما
                </a>
                <a href="/contact" class="!bg-gray-100 text-center shadow-sm duration-300 hover:!bg-blue-500 hover:text-white mt-3 px-2 py-1.5 rounded-lg text-base">
                    تماس باما
                </a>

                <Button class="mt-5">مدرس شوید</Button>
            </div>
        </Drawer>
    </div>
</header>

<style lang="scss">
</style>
