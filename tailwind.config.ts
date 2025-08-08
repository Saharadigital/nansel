import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: '#FBF3E4',
                foreground: '#3C2A1E',
                primary: '#3C2A1E',
                accent: '#B98D58',
                cream: '#FBF3E4',
            },
            fontFamily: {
                sans: ['var(--font-sans)', 'Arial', 'Helvetica', 'sans-serif'],
                mono: ['Courier New', 'monospace'],
            },
        },
    },
    darkMode: false,
    plugins: [],
};

export default config;
