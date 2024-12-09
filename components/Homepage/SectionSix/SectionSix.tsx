
"use client"
import React from 'react'
import {allText, sectionFour_cardsContent} from "@/constants";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';
import ColoredButton from '@/components/ColoredButton'


const SectionSix = () => {


   

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {

        gsap.to("#sectionSix_line", {
            scrollTrigger: {
                trigger: "#section6",
                // scrub: true,
                start: "top 60%",
                end: "10% 50%",
                // markers: false,

              },
            //   y: 0, //normal value
              opacity: 1,
              duration: 0.5,
              delay: 0,
              width: window.innerWidth*0.5,
              ease: "none"
      
          });

          gsap.to("#sectionSix_header", {
            scrollTrigger: {
                trigger: "#section6",
                // scrub: true,
                start: "top 60%",
                end: "10% 50%",
                // markers: false,

              },
            y: 0, //normal value
            opacity: 1,
            duration: 0.75,
            delay: 0.5,
            ease:  "none",
      
          });

          gsap.to("#sectionSix_para", {
            scrollTrigger: {
                trigger: "#section6",
                // scrub: true,
                start: "top 60%",
                end: "10% 50%",
                // markers: false,

              },
              y: 0, //normal value
              opacity: 1,
              duration: 0.75,
              delay: 0.5,
              ease: "none"
      
          });

    },[]);

  return (
    <div className='mt-[5rem] h-full w-full flex flex-col p-[2rem]' id="section6">

        <div className='w-full flex flex-col gap-0 items-center max-w-[1000px] mx-auto mb-[2rem] mt-[25vh] md:mt-[2rem]'>
            <h2 className='Heading2 translate-y-[-20px] opacity-0 text-center' id="sectionSix_header">{allText.sectionSix.header}</h2>
            <span className='w-0 opacity-0 h-[1px] bg-gray-700 mb-4 mt-1' id="sectionSix_line"></span>
            <p className='Paragraph1 pl-[0.5rem] translate-y-[20px] opacity-0' id="sectionSix_para">{allText.sectionSix.paragraph}</p>
        </div>


        <div className='w-full flex-1 flex lg:flex-row flex-col'>

            <div className='lg:w-[50%] h-full border w-full'>
                Contact form
            </div>

            <div className='lg:w-[50%] h-full w-full'>
                <div className='lg:h-[50%] h-0 mt-auto'></div>
                <div className='lg:h-[50%] mt-auto border h-full'>
                    Social media links
                </div>

            </div>

        </div>


      {/* <div className='border rounded-[2rem] h-full w-[50%] bg-[#0f0f0f]
      border-[#3b3b3b] flex items-start justify-center p-[2rem]
      flex-col'>

        <h2 className=' Heading2'>Get in touch</h2>

        <p className='Paragraph1 gradient_text'>
            Define your goals and identify areas where AI can add value to your business
        </p>

        <form className='w-full mt-[2rem]'>
            <ul className='flex flex-col gap-[2rem]'>
                <li className='flex flex-col w-[70%]'>
                    <input type="text" className="
                    pr-4 py-1 border-b border-[#818181] bg-[#0f0f0f]
                    " id="input1"
                    placeholder='Full name'></input>
                </li>

                <li className='flex flex-col w-[70%]'>
                    <input type="text" className="
                    pr-4 py-1 border-b border-[#818181] bg-[#0f0f0f]
                    " id="input1"
                    placeholder='Email'></input>
                </li>

                <li className='flex flex-col w-[70%]'>
                    <input type="text" className="
                    pr-4 py-1 border-b border-[#818181] bg-[#0f0f0f]
                    " id="input1"
                    placeholder='Subject'></input>
                </li>

                <li className='flex flex-col w-[70%] mt-[2rem]'>
                    <label htmlFor="contact_textArea" className='mb-2 opacity-60'>Message</label>
                    <textarea className='pr-4 py-1 border-b border-[#818181] bg-[#0f0f0f]'
                    id="contact_textArea">

                    </textarea>
                </li>
                
                <li className='w-[70%]'>
                    <ColoredButton text={"send"}/>
                </li>

            </ul>
        </form>


      </div>

        <div className='flex w-[50%] h-[300px] border mt-auto'>

        </div> */}


    </div>
  )
}

export default SectionSix
