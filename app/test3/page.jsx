"use client"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import React from 'react'
import {ScrollTrigger} from "gsap/all";
import {allText} from "@/constants";
import {sectionTwo_cardsContent} from "@/constants";
import { easeOut } from 'framer-motion';

const Page = () => {

    gsap.registerPlugin(ScrollTrigger);

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
            markers: true,

          },
          y: 0, //normal value
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: easeOut
  
      });


        gsap.utils.toArray(".section111").forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",    //top of element, top vh
                pin: true,
                // markers: true,
                pinSpacing: false,
                snap: 1,    // auto show
                // scrub: 0.5, // number of seconds for delay
                
            })
        })

 

    },[]);






  return (


        <div className="text-xl container1 border" id="section22">

            <div className='sticky top-[2rem] w-[100%]'>
              <div className='flex flex-col gap-0 text-center lg:text-start max-w-[1000px] mx-auto mb-[2rem] md:mt-[2rem]'>
                <h2 className='Heading2 translate-y-[50px] opacity-0' id="sectionTwo_header">{allText.sectionTwo.header}</h2>
                <p className='Paragraph1 pl-[0.5rem] translate-y-[30px] opacity-0' id="sectionTwo_para">{allText.sectionTwo.paragraph}</p>
              </div>
            </div>

            <div className='section111 w-[100%] h-[100vh]'>

            </div>

            {
                sectionTwo_cardsContent.map((cardContent, index)=> (
                    <div className='section111 w-[100%] h-[100vh]  
                    
                    ' key={index}>
                        

                        <div
                        className={`${index % 2 === 0 ? 'CardStyle_bg_1' : 'CardStyle_bg_2'}
                        CardStyle h-[100%] w-full rounded-lg
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


  )
}

export default Page