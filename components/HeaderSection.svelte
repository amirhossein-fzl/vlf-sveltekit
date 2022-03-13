<script>
    import Row from 'sveltestrap/src/Row.svelte';
    import Col from 'sveltestrap/src/Col.svelte';
    import Button from './Button.svelte';
    // import OnlineCourseImage from '../public/svg/online-course.svg?url';
    // console.log(OnlineCourseImage);
</script>

<Row class="!mt-24 items-center">
    <Col lg={6}>
        <div class="text-center">
            <h1 class="text-[3.5rem] font-['Aviny']">با ویرولرن</h1>
            <h2 class="mt-3 text-3xl font-['Aviny']">لحظه ای از تکنولوژی عقب نمانید !</h2>
            <p class="mt-8 text-base">آموزش آنلاین توسط بهترین اساتید برای ساخت آینده کاری شما و تضمین یادگیری شما در ویرولرن</p>

            <div class="mt-10 flex justify-evenly">
                <Button variant="outlined" color="primary">از دوره های ما دیدن کنید</Button>
                <Button variant="outlined" color="secondary">از فروشگاه ما دیدن کنید</Button>
            </div>
        </div>
    </Col>

    <Col lg={6}>
        <img src="/svg/online-course.svg" alt="Online course image" aria-hidden="false" />

    </Col>
</Row>
