import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: sveltePreprocess(),
    kit: {
        adapter: adapter(),
        // adapter: adapter({ out: 'build' }),
        files: {
            assets: 'public',
            hooks: 'hooks',
            lib: 'components',
            routes: 'pages',
            serviceWorker: 'src/service-worker',
            template: 'src/app.html'
        },
        vite: {
            plugins: [
            ],
            server: {
                fs: {
                    allow: [
                        './styles'
                    ]
                }
            },
        }
    },
};

export default config;
