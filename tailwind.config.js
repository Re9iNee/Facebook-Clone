/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    // remove un-used styles in production
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: false,
};
