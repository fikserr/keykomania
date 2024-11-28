/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ['"Poppins"', "sans-serif"],
        Roboto: ['"Roboto"', "sans-serif"],
        Stray: ['"Stray"', "sans-serif"],
      },
      colors: {
        orange: "#804C2ECC",
        lightOrange: "#9A6240",
      },
      backdropOpacity: {
        15: ".15",
      },
      boxShadow: {
        "3xl": "0px 0px 8px 2px rgba(0, 0, 0, 0.4)",
        "4xl": "-20px 0px 40px -10px rgba(0, 0, 0, 0.15)",
      },
      backgroundImage: {
        "nav-back": "url('/src/assets/images/navBack.webp')",
        "portfolio-back": "url('/src/assets/images/mainCardImgTwo.webp')",
        "billing-back": "url('/src/assets/images/billingBack.webp')",
      },
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': { display: 'none' },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      },
    },
  },
  plugins: [],
};
