<script>
    import Header from '$lib//Header.svelte';
    import Title from '$lib/Title.svelte';
    import CategoryCard from '$lib/CategoryCard.svelte';
    import Container from 'sveltestrap/src/Container.svelte';
    import Row from 'sveltestrap/src/Row.svelte';
    import Col from 'sveltestrap/src/Col.svelte';

    const categories = [
        {
            title: 'هوش مصنوعی',
            icon: '/svg/categories/ai.svg',
            link: '#/category/id',
        },
        {
            title: 'اندروید',
            icon: '/svg/categories/android.svg',
            link: '#/category/id',
        },
        {
            title: 'سیستم ها مدیریت محتوا',
            icon: '/svg/categories/cms.svg',
            link: '#/category/id',
        },
        {
            title: 'ارز دیجیتال',
            icon: '/svg/categories/cryptocurrency.svg',
            link: '#/category/id',
        },
        {
            title: 'گرافیک',
            icon: '/svg/categories/graphic.svg',
            link: '#/category/id',
        },
        {
            title: 'جاوااسکریپت',
            icon: '/svg/categories/javascript.svg',
            link: '#/category/id',
        },
        {
            title: 'شبکه',
            icon: '/svg/categories/network.svg',
            link: '#/category/id',
        },
        {
            title: 'PHP',
            icon: '/svg/categories/php.svg',
            link: '#/category/id',
        },
        {
            title: 'پایتون',
            icon: '/svg/categories/python.svg',
            link: '#/category/id',
        },
        {
            title: 'استارتاپ و کسب و کار',
            icon: '/svg/categories/startup.svg',
            link: '#/category/id',
        },
        {
            title: 'رابط کاربری',
            icon: '/svg/categories/ui.svg',
            link: '#/category/id',
        },
        {
            title: 'برنامه نویسی وب',
            icon: '/svg/categories/web.svg',
            link: '#/category/id',
        },
    ];

</script>

<Header isHome />

<main>
    <section>
        <Title>مسیر خود را انتخاب کنید !</Title>

        <Container>
            <Row>
                {#each categories as category}
                    <Col lg={2} sm={4} xs={6}>
                        <CategoryCard title={category.title} link={category.link} icon={category.icon} />
                    </Col>
                {/each}
            </Row>
        </Container>
    </section>
</main>