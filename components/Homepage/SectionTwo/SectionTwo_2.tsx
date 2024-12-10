"use client"
import React from 'react'
import {allText} from "@/constants";
import HorizontalCards from './HorizontalCards';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';
import {sectionTwo_cardsContent} from "@/constants";

const SectionTwo_2 = () => {

 

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
    <div className='w-full h-full relative' id="section22">
        
        <div className='h-[20%] flex flex-col gap-0 text-center lg:text-start max-w-[1000px] mx-auto mb-[2rem] md:mt-[2rem]'>
            <h2 className='Heading2 translate-y-[50px] opacity-0' id="sectionTwo_header">{allText.sectionTwo.header}</h2>
            <p className='Paragraph1 pl-[0.5rem] translate-y-[30px] opacity-0' id="sectionTwo_para">{allText.sectionTwo.paragraph}</p>
        </div>

        {/* <div className="w-full flex flex-col items-start justify-start"> */}
        <div className='flex flex-col gap-[2rem] px-[1rem]'>
        {
                sectionTwo_cardsContent.map((cardContent, index)=> (
                    <div className=' 
                    ' key={index}>
                        

                        <div
                        className={`${index % 2 === 0 ? 'CardStyle_bg_1' : 'CardStyle_bg_2'}
                        CardStyle w-full rounded-lg h-[300px]
                        `}
                        >
                            <div className=" rounded-lg
                            flex flex-col p-[0px] md:p-[2rem] gap-[1.5rem] text-white  valueCard2
                            ">

                                <div className="">
                                    <h3 className="">{cardContent.name}</h3>
                                </div>
                                <p className="">
                                    {cardContent.content}
                                </p>
                                {/* <div className="box-1 w-[100px] h-[100px] bg-black">

                                </div> */}
                            </div>
                        </div>
                        {/* border border-[rgba(255,255,255,0.06)] */}

                        

                        
                    </div>
                ))
                }
        </div>

                {/* </div> */}


    </div>
  )
}

export default SectionTwo_2
