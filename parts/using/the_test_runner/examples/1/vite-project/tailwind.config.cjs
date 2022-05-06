const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    // themes: [],
    themes: [
      // Daisy UI built-in Themes
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
      // Custom personal themes
      {
        // "light" customized existing theme ("light" exists, because it is a Daisy UI built-in Theme)
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "blue",
          "primary-focus": "mediumblue",
        },
        elections_legislatives_theme: {
            "primary": "#570DF8",
            "secondary": "#F000B8",
            "accent": "#37CDBE",
            "neutral": "#3D4451",
            "base-100": "#FFFFFF",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
        },
        elections_imaginaires_theme: {
            "primary": "#FF0DF8",
            "secondary": "#FF0000",
            "accent": "#90FD00",
            "neutral": "#3DFF01",
            "base-100": "#053F42",
            "info": "#EB513F",
            "success": "#360099",
            "warning": "#F00D20",
            "error": "#F8AAFF",

        },
        elections_imaginaires_theme_backup: {
            "primary": "#FF0DF8",
            "secondary": "#F05622",
            "accent": "#90FD00",
            "neutral": "#3DFF01",
            "base-100": "#939393",
            "info": "#EB513F",
            "success": "#360099",
            "warning": "#F00D20",
            "error": "#F8AAFF",

        },
        autre_election_imaginaire_theme: {
            primary: "#a991f7",
            secondary: "#f6d860",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
            "info": "#EB513F",
            "success": "#360099",
            "warning": "#F00D20",
            "error": "#F8AAFF",

            "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
            "--rounded-btn": "0.5rem", // border radius rounded-btn utility class, used in buttons and similar element
            "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
            "--animation-btn": "0.25s", // duration of animation when you click on button
            "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
            "--btn-text-case": "uppercase", // set default text transform for buttons
            "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
            "--border-btn": "1px", // border width of buttons
            "--tab-border": "1px", // border width of tabs
            "--tab-radius": "0.5rem", // border radius of tabs

        },
      },
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
