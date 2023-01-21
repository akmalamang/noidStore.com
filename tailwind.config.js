/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                satu: '#2C3333',
                dua: '#395B64',
                tiga: '#A5C9CA',
                empat: '#E7F6F2',
            },
            fontFamily: {
                oswald: 'Oswald',
            },
            textShadow: {
                custom: '2px 2px 2px rgba(0,0,0,.5)',
            },
        },
    },
    plugins: [],
};