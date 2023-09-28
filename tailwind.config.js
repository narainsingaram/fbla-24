module.exports = {
    plugins: [require("daisyui")],
    daisyui: {
    themes: ["synthwave", "cupcake", "night", "retro"], // Set the theme to "synthwave"
    // ... other daisyui options
    },
    theme: {
    extend: {
        colors: {
        "primary": {
            500: "#15457e",
        },
        },
    },
    },
    // ... other configuration options
};
