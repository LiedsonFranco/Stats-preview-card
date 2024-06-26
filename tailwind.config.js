/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'main-background': 'hsl(233, 47%, 7%)',
        "card-background": "hsl(244, 38%, 16%)",
        'accent': 'hsl(277, 64%, 61%)',
        'main-paragraph': 'hsla(0, 0%, 100%, 0.75)',
        'stat-headings': 'hsla(0, 0%, 100%, 0.6)',
      },
    },
  },
  plugins: [],
}

