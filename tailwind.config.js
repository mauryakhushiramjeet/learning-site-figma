/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,tsx,ts,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        metting: "url('/src/Assets/svgs/meeting.svg')",
        EducationOfferbg1: "url('/src/Assets/svgs/bg1.svg')",
        EducationOfferbg2: "url('/src/Assets/svgs/bg2.svg')",
        EducationOfferbg3: "url('/src/Assets/svgs/bg3.svg')",
        feturebgImage: "url('/src/Assets/svgs/featurebgimage.png')",
        feturebgImage2: "url('/src/Assets/svgs/feturebgImage2.png')",
        bgHero: "url('/src/Assets/svgs/header-bg.svg')",
        "text-gradient": "linear-gradient(90deg, #136CB5 0%, #49BBBD 100%)",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        nunitosans: ["Nunito Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      letterSpacing: {
        "4p": "4%",
      },
      screens: {
        xxs: "390px",
        xs: "450px",
        sm: "640px",
        md: "768px",
        md992: "992px",
        lg: "1024px",
        xl: "1280px",
        "3xl": "1329px",
        "4xl": "1756px",
      },
    },
  },

  plugins: [],
};
