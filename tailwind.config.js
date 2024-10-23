/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        levitate1: {
          '0%, 100%': { transform: 'translateY(-5px)' },  // Small up movement
          '50%': { transform: 'translateY(5px)' },        // Small down movement
        },
        levitate2: {
          '0%, 100%': { transform: 'translateY(-10px)' }, // Medium up movement
          '50%': { transform: 'translateY(10px)' },       // Medium down movement
        },
        levitate3: {
          '0%, 100%': { transform: 'translateY(-15px)' }, // Larger up movement
          '50%': { transform: 'translateY(15px)' },       // Larger down movement
        },
        levitate4: {
          '0%, 100%': { transform: 'translateY(-20px)' }, // Largest up movement
          '50%': { transform: 'translateY(20px)' },       // Largest down movement
        },
        levitate5: {
          '0%, 100%': { transform: 'translateY(-25px)' }, // Most dramatic up movement
          '50%': { transform: 'translateY(25px)' },       // Most dramatic down movement
        },
      },
      animation: {
        levitate1: 'levitate1 3s ease-in-out infinite',  // 3s duration for small levitation
        levitate2: 'levitate2 4s ease-in-out infinite',  // 4s duration for medium levitation
        levitate3: 'levitate3 5s ease-in-out infinite',  // 5s duration for larger levitation
        levitate4: 'levitate4 6s ease-in-out infinite',  // 6s duration for largest levitation
        levitate5: 'levitate5 7s ease-in-out infinite',  // 7s duration for most dramatic levitation
      },
    },
    fontFamily: {
      sat: ["Satoshi", "Sans-serif"],
      pop: ["Poppins"],
      
    },
  },
  plugins: [],
}