module.exports = {
    purge: [
        './assets/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
      container: {
        center: true,
      },
      extend: {
        colors: {
          gray: "#d4d4d4",
          black: "#000",
          white: "#fff",
          japonais: {
            400: "#34d399",
            500: "#10b981",
            600: "#059669",
          },
          italien: {
            400: "#fbbf24",
            500: "#f59e0b",
            600: "",
          },
          fastfood: {
            400: "#60A5FA",
            500: "#3B82F6",
            600: "#2563EB",
          },
          rating: {
            1: "#fef3c7",
            2: "#fde68a",
            3: "#fcd34d",
            4: "#fbbf24",
            5: "#f59e0b",
          },
        },
      },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
