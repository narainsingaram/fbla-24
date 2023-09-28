// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/google-fonts',
    ["nuxt-chatgpt"],
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
    chatgpt: {
    apiKey: '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'
    },
})
