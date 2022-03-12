module.exports = {
    content: [
        './components/**/*.svelte',
        './pages/**/*.svelte'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['IRANSans'],
                aviny: ['Aviny'],
            },
            borderRadius: {
                'theme': '8px',
            },
            colors: {
                'primary': {
                    600: '#2563eb',
                    500: '#3b82f6',
                    50: '#eff6ff',
                },
                'secondary': {
                    600: '#e11d48',
                    500: '#f43f5e',
                    50: '#fff1f2',
                },
            },
        },
        screens: {
            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    corePlugins: {
        container: false,
    },
    plugins: [require('@tailwindcss/line-clamp'),],
}
