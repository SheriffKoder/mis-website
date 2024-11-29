"use client"

import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

// import useThemeToggler from "@/hooks/use-theme-toggle";



const ThemeToggler = () => {

    // const { theme, toggleTheme } = useThemeToggler();

    // load the button after this component is mounted, to avoid an error and flicker
    const [mounted, setMounted] = useState(false);

    const {theme, setTheme} = useTheme();

    const handleClick = () => {
        // toggleTheme();
        if (theme === "light") setTheme("dark");
        if (theme === "dark") setTheme("neon");
        if (theme === "neon") setTheme("light");

    }

    // load the actual button after mounting
    useEffect(()=> {
        setMounted(true);
    },[])

    // this will be loaded before the actual button
    if (!mounted) return <button className='
    text-xs bg-foreground text-background rounded size-7 animate-pulse'></button>;

  return (
    <button className='text-xs bg-foreground text-background rounded size-7 px-2 py-1' 
    onClick={handleClick}>
    {theme === 'dark' ? "D" : theme === "neon" ? "N" : "L"}    
    </button>
  )
}

export default ThemeToggler