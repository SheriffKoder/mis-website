import type { Metadata } from "next";

import "./globals.css";
import ThemeToggler from "@/components/BaseEffects/ThemeToggler";
import { ThemeProvider } from "@/providers/theme-provider";

import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en" className="relative" suppressHydrationWarning>
      <body className="Poppins"
      >


        <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        themes={["light", "dark", "neon"]}
        >



          {children}

          <div className="absolute top-2 right-2 hidden">
            <ThemeToggler/>
          </div>


          {/* <footer className="w-full h-[300px] bg-slate-800 z-[-1]"></footer> */}


        </ThemeProvider>

        {/* //positioned here to have higher index */}
        <Navbar/> 


      </body>
    </html>

  );
}
