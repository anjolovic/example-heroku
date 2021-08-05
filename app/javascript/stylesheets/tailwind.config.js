// See the Tailwind default theme values here:
// https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  // Opt-in to TailwindCSS future changes
  future: {},

  // https://tailwindcss.com/docs/just-in-time-mode
  mode: "jit",

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],

  // Purge unused TailwindCSS styles
  purge: {
    enabled: ["production", "staging"].includes(process.env.NODE_ENV),
    content: [
      "./app/helpers/**/*.rb",
      "./app/javascript/**/*.js",
      "./app/views/**/*.erb",
    ],
  },

  // All the default values will be compiled unless they are overridden below
  theme: {
    // Extend (add to) the default theme in the `extend` key
    extend: {
      // Create your own at: https://javisperez.github.io/tailwindcolorshades
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: colors.violet,
        secondary: colors.emerald,
        tertiary: colors.coolGray,
        danger: colors.red,
        "code-400": "#fefcf9",
        "code-600": "#3c455b",
      },
    },
    // override the default theme using the key directly
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    borderWidth: ["responsive", "last", "hover", "focus"],
  },
};
