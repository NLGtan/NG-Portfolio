/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // ensure all React files are included
  theme: {
    extend: {
      screens: {
        '1xs': '440px',
        'xs': '360px',
        '3xl': '1440px',
        '4xl': '1920px',  
      },
      fontFamily: {
        sat: ["Satoshi", "sans-serif"],
        pop: ["Poppins", "sans-serif"],
        ral: ["Raleway", "sans-serif"],
        inc: ["Inconsolata", "sans-serif"],
      },
      keyframes: {
        levitate1: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(5px)" },
        },
        levitate2: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        levitate3: {
          "0%, 100%": { transform: "translateY(-15px)" },
          "50%": { transform: "translateY(15px)" },
        },
        levitate4: {
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(20px)" },
        },
        levitate5: {
          "0%, 100%": { transform: "translateY(-25px)" },
          "50%": { transform: "translateY(25px)" },
        },
      },
      animation: {
        levitate1: "levitate1 3s ease-in-out infinite",
        levitate2: "levitate2 4s ease-in-out infinite",
        levitate3: "levitate3 5s ease-in-out infinite",
        levitate4: "levitate4 6s ease-in-out infinite",
        levitate5: "levitate5 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
