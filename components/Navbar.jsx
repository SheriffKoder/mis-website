"use client"
// import { useGSAP } from "@gsap/react";
// import gsap from 'gsap'
import React, { useEffect } from 'react'
// import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

// import "./SmoothRevealNav.css"

import { nav_links } from '@/constants';
import Link from 'next/link';
import Image from "next/image";
import ColoredButton from './ColoredButton';
// https://codepen.io/GreenSock/pen/qBawMGb
// https://codepen.io/GreenSock/pen/mdVyPvK

const Page = () => {

    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // useGSAP(()=> {

    //     // register the .from, progress=1 (complete), pause it then play on the window
    //     const showAnim = gsap.from(".main-tool-bar", {
    //         yPercent: -100,
    //         paused: true,
    //         duration: 0.2
    //     }).progress(1);


    //     // onUpdate self direction, play a registered .from
    //     ScrollTrigger.create({
    //         start: "top top",
    //         end: "max",
    //         // markers: true,
    //         onUpdate: (self) => {self.direction === -1 ? showAnim.play() : showAnim.reverse()}
    //     })

    //     // version 2: hide only 40px, above not needed
    //     // ScrollTrigger.create({
    //     //   start: 'top -80',
    //     //   end: 99999,
    //     //   toggleClass: {className: 'scrolled', targets: '.main-tool-bar'}
    //     // });


    // },[]);

    useEffect(()=> {
        let prevScrollPos = window.pageYOffset;

        window.addEventListener('scroll', function() {
          // current scroll position
          const currentScrollPos = window.pageYOffset;
        
          if (prevScrollPos > currentScrollPos) {
            // user has scrolled up
            document.querySelector('.main-tool-bar').classList.remove('navShow');
          } else {
            // user has scrolled down
            document.querySelector('.main-tool-bar').classList.add('navShow');
          }
        
          // update previous scroll position
          prevScrollPos = currentScrollPos;
        });
    },[])




  return (
    <div className="z-[99]">
        <div className='main-tool-bar fixed w-full top-0 h-[120px] md:h-[65px] bg-[#000000]
        ButtonText'>


            <nav className='md:pt-0 pt-[2rem] w-full h-full flex flex-row justify-center items-center'>
                <ul className='max-w[400px] flex flex-row justify-evenly gap-[max(4vw,2rem)]
                '>
                    {
                    nav_links.map((link, index)=> (
                        <li key={"nav_link "+index}>
                            <Link href={link.href}  aria-label={link.aria}
                            className=" ActiveNavLink relative color2">{link.text}</Link>
                        </li>
                    ))
                    }
                </ul>

            </nav>

            <div className="absolute right-[1rem] top-[1rem]">
                    <div id="nav_main_button">
                        <ColoredButton text={"Contact"}/>
                    </div>
                </div >

            <div className="absolute left-[1rem] top-[1rem]">
                    <button id="logo" className='w-[calc(2rem*1.5)] h-[calc(0.75rem*1.5)] 
                    lg:w-[calc(2rem*2)] lg:h-[calc(0.75rem*2)] relative'>
                        <Image src="/Logo/Logo_white.png" alt="company logo" fill ></Image>
                    </button>
            </div>

            {/* <div className='w-full h-full flex-row flex justify-between items-center
            px-4'>







  
            </div> */}


        
        
        </div>
        {/* <div className="h-[200vh]"> Scrollable Area</div> */}
    </div>
  )
}

export default Page



/*

// CSS
@font-face {
  font-display: block;
  font-family: Mori;
  font-style: normal;
  font-weight: 400;
  src: url(https://assets.codepen.io/16327/PPMori-Regular.woff) format("woff");
}







*/

{/* <header className='main-tool-bar fixed w-full top-0 h-[50px] bg-[#3535355d]
text-xs'
id="Navbar">

<div className='w-full h-full flex-row flex justify-between items-center
px-4'>
    <div id="logo" className='w-[calc(2rem*1.5)] h-[calc(0.75rem*1.5)] relative'>
        <Image src="/Logo/Logo_white.png" alt="company logo" fill ></Image>
    </div>

    <div id="nav_main_button">
        <DefaultButton/>
    </div>
</div>

<nav className='absolute top-0 left-0 w-full h-full flex flex-row justify-center items-center'>
    <ul className='flex flex-row gap-2'>
        {
        nav_links.map((link)=> (
            <li>
                <Link href={link.href} aria-label={link.aria}>{link.text}</Link>
            </li>
        ))
        }
    </ul>

</nav>

</header>
import { nav_links } from '@/constants';
import Link from 'next/link';
import DefaultButton from './DefaultButton'; */}