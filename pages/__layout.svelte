<script>
    // import '../styles/global.scss';
    import NProgress from 'nprogress';
    import { navigating } from '$app/stores';

    import '../styles/global.scss';
    import '../styles/nprogress.css';
    import '../styles/bootstrap-grid.scss';

    NProgress.configure({ parent: 'body', rtl: true });

    $: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}

</script>

<slot></slot>

