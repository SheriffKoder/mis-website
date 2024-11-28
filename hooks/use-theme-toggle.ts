// "use client"
// import { useEffect, useState } from "react";

// const useThemeToggler = () => {

//   const [theme, setTheme] = useState<null|'dark'|'neon'>(null);

//   // load saved theme from local storage on initial mount
//   useEffect(()=> {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme === "dark" || savedTheme === "neon") {
//       setTheme(savedTheme);

//       const html = document.querySelector("html")!
//       html.classList.add(savedTheme);
//     }
//   }, [])

//   // update the theme class on <html> and save/remove theme from local storage
//   useEffect(()=> {
//     const html = document.querySelector("html")!

//     // each time remove these classes
//     html.classList.remove('dark', 'neon');

//     if (theme === 'dark') {
//       html.classList.add('dark');
//       localStorage.setItem('theme', 'dark');
//     } else if (theme === "neon") {
//       html.classList.add('neon');
//       localStorage.setItem('theme', 'neon');
//     } else {
//       localStorage.removeItem('theme');
//     }


//   }, [theme])

//   // toggle between themes
//   const toggleTheme = () => {
//     if (theme === 'dark') {
//       setTheme("neon");
//     } else if (theme === "neon") {
//       setTheme(null)
//     } else {
//       setTheme("dark")
//     }

//   }

//   return {theme, toggleTheme};

// }

// export default useThemeToggler