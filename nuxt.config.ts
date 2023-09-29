// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
    ],
    googleFonts: {
    families: {
        // Add the font families you want to use
        'Open+Sans': true,
        'Roboto': true,
        'Josefin+Sans': true,
        'IBM+Plex+Sans': true,
    },
    },
})
