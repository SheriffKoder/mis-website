"use client"
import React from 'react'
import {allText} from "@/constants";
import HorizontalCards from './HorizontalCards';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';


const SectionTwo = () => {


   

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {


          gsap.to("#sectionTwo_header", {
            scrollTrigger: {
                trigger: ".container2",
                // scrub: true,
                start: "center 60%",
                end: "top top",
                // markers: true,

              },
            y: 0, //normal value
            opacity: 1,
            duration: 1,
            delay: 0,
            ease:  easeOut,
      
          });

          gsap.to("#sectionTwo_para", {
            scrollTrigger: {
                trigger: ".container2",
                // scrub: true,
                start: "center 60%",
                end: "top top",
                // markers: true,

              },
              y: 0, //normal value
              opacity: 1,
              duration: 1,
              delay: 0.5,
              ease: easeOut
      
          });
       

    },[]);




  return (
    <div className='h-full flex flex-col pt-[3vw] container2' id="section2">

        <div className='flex flex-col gap-4 text-center lg:text-start max-w-[1500px] mx-auto mb-[2rem] md:mt-[2rem]'>
            <h2 className='Heading2 translate-y-[50px] opacity-0' id="sectionTwo_header">{allText.sectionTwo.header}</h2>
            <p className='Paragraph1 pl-[0.5rem] translate-y-[30px] opacity-0' id="sectionTwo_para">{allText.sectionTwo.paragraph}</p>
        </div>


        {/* <div className='card border rounded-[10px] w-[40vw] h-[20vw]'>
            <h3>Card Header</h3>
            <p>Card Text</p>
        </div> */}
        <div className='md:pl-[min(200px,20vw)] md:gap-[3vw]'>
            <HorizontalCards/>
        </div>


    </div>
  )
}

export default SectionTwo
