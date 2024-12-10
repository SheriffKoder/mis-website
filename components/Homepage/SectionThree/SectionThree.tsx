import React from 'react'


import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';

import { allText } from '@/constants';

import { AnimatedNumbers } from './IncreasingNumbers';
import { sectionThree_cardsContent } from '@/constants';

const SectionThree = () => {

    const circle1Ref = React.useRef<HTMLDivElement|null>(null);

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {

        // gsap.to("#circle1", {
        //     scrollTrigger: {
        //         trigger: "#section3",
        //         start: "top 20%",
        //         end: "5% top",
        //         // scrub: 0.25,
        //         markers: true,
        //         // id: "scrub",
    
        //         },
        //         opacity: 1,
        //         duration: 1,
        //         ease: easeOut,
        //         width: window.innerWidth*1.7,
        //         height: window.innerWidth*1.7,
        //         borderWidth: window.innerWidth/5,
        
        //     });
        let ambientCircle = gsap.to("#circle2", {
            scrollTrigger: {
                trigger: "#section3",
                start: "top 20%",
                end: "50% top",
                // scrub: 0.25,
                // markers: true,
                // id: "scrub",
                // pin: true,

                },
            opacity: 0.5,
            duration: 2,
            delay: 0,
            ease: easeOut,
            // rotate: 180,
            width: "60%",
            height: "60%",
            borderWidth: 1,
        })

        gsap.to("#circle3", {
            scrollTrigger: {
                trigger: "#section3",
                start: "top 20%",
                end: "50% top",
                // scrub: 0.25,
                // markers: true,
                // id: "scrub",
                // pin: true,

                },
            opacity: 0.1,
            duration: 2,
            delay: 0,
            ease: easeOut,
        })

        gsap.to("#dot1", {
            scrollTrigger: {
                trigger: "#section3",
                start: "top 20%",
                end: "50% top",
                // scrub: 0.25,
                // markers: true,
                // id: "scrub",
                // pin: true,

                },
            opacity: 1,
            duration: 2,
            delay: 0,
            ease: easeOut,

        })

        gsap.to("#dot2", {
            scrollTrigger: {
                trigger: "#section3",
                start: "top 20%",
                end: "50% top",
                // scrub: 0.25,
                // markers: true,
                // id: "scrub",
                // pin: true,

                },
            opacity: 1,
            duration: 2,
            delay: 0,
            ease: easeOut,
 
        })

        ambientCircle.yoyo(true);

        let tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#section3",
                start: "top 20%",
                end: "50% top",
                // scrub: 0.25,
                // markers: true,
                // id: "scrub",
                // pin: true,
    
                }
            })

        tl3.add("Section3_1")
        .to("#circle1", {
            opacity: 0.5,
            duration: 1,
            ease: easeOut,
            rotate: 180,
            width: window.innerWidth*1.7,
            height: window.innerWidth*1.7,
            borderWidth: window.innerWidth/10,
            onComplete: (e)=> {if (circle1Ref.current) circle1Ref.current.style.display="none"}
        }, "Section3_1")


        .to("#sectionThreeHeader", {
            opacity: 1,
            duration: 1,
            delay: 0.25,
        }, "Section3_1")

        /////////////////////////
        tl3.add("Section3_2")
        .to("#sectionThreeHeader", {
            translateY: -120,
            duration: 2.5,
            ease: "elastic.out(1,0.3)",
            // ease: easeOut
            // delay: 0.25,
        }, "Section3_2")
        .to("#sectionThreeCardsContainer", {
            translateY: 0,
            opacity: 1,
            duration: 0.5,
            ease: easeOut,
            // delay: 0.25,
        }, "Section3_2")
    
    
        },[]);
        
    

  return (
    <div className=' w-full ml-auto h-full flex items-start pt-[10rem] md:pt-0 md:items-center justify-center text-white
    relative'
    id="section3">


            {/* <div className='absolute w-[0px] h-[0px] rounded-full
            border-[0px] border_neon1 border-dashed' id="circle1" ref={circle1Ref}></div> */}
            <div className='absolute min-w-[200vw] top-[-5rem] h-[200vw] flex items-center justify-center
            md:min-h-[70vw] md:min-w-[70vw] md:h-[70vw] md:w-[70vh]'>
            
                <div className='absolute w-[60%] h-[60%] rounded-full opacity-0
                border-[10px] border_neon2 rotate360' id="circle2">
                    <div className=' w-full h-full border-dashed border-[10px] rounded-full opacity-[0.05]'>
                    </div> 
                </div> 

                <div className='absolute w-[76%] h-[76%] rounded-full
                rotate360 border-2 opacity-0' id="circle3">
                </div> 

                <div className='absolute w-[55%] h-[55%] rounded-full opacity-0
                rotate360' id="dot1">
                    <div className='h-4 w-4 rounded-full bg-[#242424]'></div>
                </div>

                <div className='rotate-180 absolute w-[55%] h-[55%] opacity-0' id="dot2">
                    <div className='rounded-full opacity-1 w-full h-full
                    rotate360'>
                        <div className='h-4 w-4 rounded-full bg-[#242424]'></div>
                    </div>
                </div>
            </div>


            <div className='flex flex-col mt-[7rem]'>
                <div className='absolute left-0 w-full text-center opacity-0' id="sectionThreeHeader">
                    
                    <h2 className='Heading2'>{allText.sectionThree.header}</h2>
                    <p className='Paragraph1'>{allText.sectionThree.paragraph}</p>
                </div>

                <div className='flex flex-col md:flex-row gap-4 md2:gap-[2rem] opacity-0 translate-y-[4rem]' id="sectionThreeCardsContainer">
                    
                {sectionThree_cardsContent.map((card)=> (
                    <div className='section3_card w-[150px] md2:w-[200px] md2:h-[200px] flex flex-col gap-0 md2:gap-2 items-center justify-center'>
                        <h3 className='Heading3'>{card.name}</h3>
                        <p className='Paragraph1'>{card.content}</p>
                        <span className='Heading2'><AnimatedNumbers value={card.number}/>+</span>
                    </div>
                ))}
                    
                </div>

            </div>


    </div>
  )
}

export default SectionThree
