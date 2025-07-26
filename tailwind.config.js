/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
  
    './*.{html,js}',


],

  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin'],
        montserrat: ['Montserrat Alternates'],
        poppins: ['Poppins'],
        lato: ['Lato'],
        lobster: ['Lobster'],
        bitcoin: ['Bitcount']
      },

      
       textShadow: {
        sm: '1px 1px 2px rgba(0,0,0,0.25)',
        DEFAULT: '2px 2px 4px rgba(0,0,0,0.3)',
        lg: '3px 3px 6px rgba(0,0,0,0.35)',
      },
      
      colors: {
        'primary': "#e0f7fa",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "button": "#79f3f3",
        "bright-green": '#28A745',
        "blue-violet":"#5932EA",
        "light-gray": "#8A8888",
        "soft-teal": "#5ED4B8",
        "stroke": "#00B087",
        "active-text" : "008767",
        "baseline": "#1e8fff",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
   
      screens: {
        "wide": "1440px",
        "custom":"846px",
        "nb":"731px",
        "card": "1044px",
        "scroll": "660px"
      },

      boxShadow: {
      'inner-lg': 'inset 0 8px 20px rgba(0, 0, 0, 0.15)',
    },

      backgroundImage: {
          hotel: "url('images/ambaras-hotel.png')",
          educational: "url('images/Learniverse.jpg')",
          ev_2: "url('images/ev-2.jpeg')",
          child_care: "url('images/child-care.jpeg')",
          gymnify: "url('images/Gymnify.svg')",
          payease: "url('images/payease.png')"
        },




    },
  },
  plugins: [],
};