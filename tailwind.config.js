/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        backgroundImage: {
          'team-section': "url('./images/member1.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        }
      }
    }
  }
  