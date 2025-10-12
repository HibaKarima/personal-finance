/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
       colors: {
        primary: "#1E40AF",     // أزرق غامق
        secondary: "#FBBF24",   // أصفر ذهبي
        accent: "#10B981",      // أخضر زمردي
        background: "#0F172A",  // لون الخلفية العام
        surface: "#1E293B",     // لون صناديق / بطاقات
        text: {
          primary: "#F8FAFC",
          secondary: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
      },
    },
  },
  plugins: [],
}

