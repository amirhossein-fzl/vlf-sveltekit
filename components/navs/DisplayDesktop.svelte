<script>
    import Container from 'sveltestrap/src/Container.svelte';
    import Button from '$lib/Button.svelte';
    import IconButton from '$lib/IconButton.svelte';

</script>

<header class="shadow-md py-1.5">
    <Container>
        <div class="flex justify-between items-center">
            <a href="/">
                <img src="/vercel.svg" class="w-[100px] h-[50px]" alt="Logo" />
            </a>

            <nav>
                <a href="/">صفحه اصلی</a>
                <a href="/blog">وبلاگ</a>
                <a href="/about">درباره ما</a>
                <a href="/contact">تماس باما</a>
                <a href="/#" class="!mr-2.5">
                    <Button variant="outlined">مدرس شوید !</Button>
                </a>
            </nav>
            
            <div class="flex items-center">
                <IconButton variant="flat" class="!p-2">
                    <!-- SearchIcon -->
                    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 512 512"><path d="M504.1 471l-134-134C399.1 301.5 415.1 256.8 415.1 208c0-114.9-93.13-208-208-208S-.0002 93.13-.0002 208S93.12 416 207.1 416c48.79 0 93.55-16.91 129-45.04l134 134C475.7 509.7 481.9 512 488 512s12.28-2.344 16.97-7.031C514.3 495.6 514.3 480.4 504.1 471zM48 208c0-88.22 71.78-160 160-160s160 71.78 160 160s-71.78 160-160 160S48 296.2 48 208z"/></svg>
                </IconButton>
                <a href="/singin" class="mr-2.5">
                    <Button>ورود</Button>
                </a>
                <a href="/singup" class="mr-2.5">
                    <Button variant="outlined" color="secondary">ثبت نام</Button>
                </a>
            </div>
        </div>
    </Container>
</header>

<style lang="scss">
    header {
        nav {
            align-items: center;
            a {
                margin-right: 15px;
                &:first-child {
                    margin-right: 0px;
                }
            }
        }
    }
</style>
