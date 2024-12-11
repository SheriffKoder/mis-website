"use client"
import React from 'react'
import {allText, sectionFour_cardsContent} from "@/constants";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';


const SectionFour = () => {


   

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {


          gsap.to("#sectionFour_header", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "top 60%",
                end: "10% 50%",
                // markers: false,

              },
            y: 0, //normal value
            opacity: 1,
            duration: 1,
            delay: 0,
            ease:  easeOut,
      
          });

          gsap.to("#sectionFour_para", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "top 60%",
                end: "10% 50%",
                // markers: false,

              },
              y: 0, //normal value
              opacity: 1,
              duration: 1,
              delay: 0.5,
              ease: easeOut
      
          });

        //   let sectionsFour_cards = gsap.utils.toArray(".sectionFour_card");

        //   gsap.to(sectionsFour_cards, {
        //     scrollTrigger: {
        //         trigger: "#section4",
        //         scrub: true,
        //         start: "20% 60%",
        //         end: "50% 50%",
        //         markers: false,

        //       },
        //       y: 0, //normal value
        //       opacity: 1,
        //       duration: 1,
        //       delay: 0.5,
        //       ease: easeOut,
        //       stagger: 1
      
        //   });
        const tweenDuration = 0.5;

        gsap.to("#sectionFourCard_1_num", {
                scrollTrigger: {
                    trigger: "#section4",
                    // scrub: true,
                    start: "20% 60%",
                    // end: "50% 50%",
                    markers: false,
    
                  },
                  y: 0, //normal value
                  opacity: 1,
                  duration: tweenDuration,
                  delay: 1,
                  ease: "power2.out",
                //   stagger: 1
          
        });

        gsap.to("#sectionFourCard_1_content", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "20% 60%",
                // end: "50% 50%",
                markers: false,

              },
              y: 0, //normal value
              opacity: 1,
              duration: tweenDuration,
              delay: 1,
              ease: "power2.out",
            //   stagger: 1
      
        });
       

        gsap.to("#sectionFourCard_2_num", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "40% 70%",
                // end: "50% 50%",
                markers: false,

              },
              y: 0, //normal value
              opacity: 1,
              duration: tweenDuration,
              delay: 1.5,
              ease: "power2.out",
            //   stagger: 1
      
        });

        gsap.to("#sectionFourCard_2_content", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "40% 70%",
                // end: "50% 50%",
                markers: false,

            },
            y: 0, //normal value
            opacity: 1,
            duration: tweenDuration,
            delay: 1.5,
            ease: "power2.out",
            //   stagger: 1
    
        });

        gsap.to("#sectionFourCard_3_num", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "60% 80%",
                // end: "50% 50%",
                markers: false,

              },
              y: 0, //normal value
              opacity: 1,
              duration: tweenDuration,
              delay: 2,
              ease: "power2.out",
            //   stagger: 1
      
        });

        gsap.to("#sectionFourCard_3_content", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "60% 80%",
                // end: "50% 50%",
                markers: false,

            },
            y: 0, //normal value
            opacity: 1,
            duration: tweenDuration,
            delay: 2,
            ease: "power2.out",
            //   stagger: 1
    
        });

        gsap.to("#sectionFourCard_4_num", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "80% 90%",
                // end: "50% 50%",
                markers: false,

              },
              y: 0, //normal value
              opacity: 1,
              duration: tweenDuration,
              delay: 2.5,
              ease: "power2.out",
            //   stagger: 1
      
        });

        gsap.to("#sectionFourCard_4_content", {
            scrollTrigger: {
                trigger: "#section4",
                // scrub: true,
                start: "80% 90%",
                // end: "50% 50%",
                markers: false,

            },
            y: 0, //normal value
            opacity: 1,
            duration: tweenDuration,
            delay: 2.5,
            ease: "power2.out",
            //   stagger: 1
    
        });



    },[]);


  return (
    <div className=' flex flex-col items-center w-full h-full max-w-[1500px] mx-auto
    px-[2rem] py-[4rem] bg-[#000000b4] rounded-b-none rounded-[20px] lg:rounded-[10px] lg:rounded-b-[10px] glass_bg2'
    id="section4" style={{background: 'background: rgba(0, 0, 0, 0.2)'}}>
        <div className='flex flex-col gap-0 text-center lg:text-start max-w-[1000px] mx-auto mb-[2rem]'>
            <h2 className='Heading3 translate-y-[50px] opacity-0 mb-4' id="sectionFour_header">{allText.sectionFour.header}</h2>
            <p className='Paragraph1 pl-[0.5rem] translate-y-[30px] opacity-0' id="sectionFour_para">{allText.sectionFour.paragraph}</p>
        </div>


        {sectionFour_cardsContent.map((card, index)=> (
            <div className={` ${(index % 2 === 0) ? 'md2:mr-auto' : 'md2:ml-auto'} 
            sectionFour_card mt-[2rem] flex flex-col gap-4 justify-start items-center1`}
            id={`sectionFourCards_container${index+1}`} key={"sectionFour_cardsContent"+index}>
                <div className='flex flex-row gap-8 items-center justify-center'>
                    
                    <div className='Heading2 w-[100px] border-r flex items-center justify-center
                    translate-y-[3rem] opacity-0 gradient_text'
                    id={`sectionFourCard_${index+1}_num`}>
                        {card.number}
                    </div>

                    <div className='w-full max-w-[300px] lg:max-w-[500px] flex flex-col gap-2 translate-y-[-3rem] opacity-0'
                    id={`sectionFourCard_${index+1}_content`}>    
                        <div className='text-[1.5rem] md2:text-[min(40px,8vw)]'>{card.name}</div>
                        <div className='Paragraph1'>{card.content}</div>    
                    </div>

                </div>
            </div>
        ))}




    </div>
  )
}

export default SectionFour
