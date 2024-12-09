"use client"
import React from 'react'
import {allText, sectionFour_cardsContent} from "@/constants";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';


const SectionFive = () => {



    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const duration = 2;

    useGSAP(()=> {

        // let feedbackCards = document.querySelectorAll(".FeedbackCard");
        document.querySelectorAll(".FeedbackCard").forEach((div) => {
            div.addEventListener("mouseenter", function (event) {
              // Select all divs with the same class
              const allDivs = document.querySelectorAll(".FeedbackCard");

              // Exclude the one that triggered the event
              allDivs.forEach((otherDiv) => {
                if (otherDiv !== event.target) {
                  // Apply your logic (e.g., add a blur effect)
                  otherDiv.style.filter = "blur(4px)";
                } else {
                    otherDiv.classList.remove("clamp")
                }
              });
            });
          
            div.addEventListener("mouseleave", function () {
              // Remove the blur effect when mouse leaves
              document.querySelectorAll(".FeedbackCard").forEach((div) => {
                div.style.filter = "none";
              });
            });
          });


        // // full width vertical layered feddbacks on small screens
        // if (window.innerWidth < 850) {
        //     const spacing = 120/window.innerWidth;
        //     console.log(window.innerWidth);
    
        //     gsap.to(".SectionFive_card_b_1", {
        //         scrollTrigger: {
        //             trigger: "#section5",
        //             // scrub: true,
        //             start: "50% 50%",
        //             end: "bottom 50%",
        //             markers: true,
    
        //           },
        //           y: (window.innerWidth*spacing)+0, //normal value
        //           // x: window.innerWidth*0.1,
        //         opacity: 1,
        //         duration: duration,
        //         delay: 0,
        //         ease: "power2.out",      
        //       });
    
        //       gsap.to(".SectionFive_card_b_2", {
        //         scrollTrigger: {
        //             trigger: "#section5",
        //             // scrub: true,
        //             start: "50% 50%",
        //             end: "bottom 50%",
        //             markers: true,
    
        //           },
        //           y: (window.innerWidth*spacing)+100, //normal value
        //           // x: window.innerWidth*0.1,
        //         opacity: 1,
        //         duration: duration,
        //         delay: duration,
        //         ease: "power2.out",      
        //       });
    
        //       gsap.to(".SectionFive_card_b_3", {
        //         scrollTrigger: {
        //             trigger: "#section5",
        //             // scrub: true,
        //             start: "50% 50%",
        //             end: "bottom 50%",
        //             markers: true,
    
        //           },
        //         y: (window.innerWidth*spacing)+200, //normal value
        //         // x: window.innerWidth*0.1,
        //         opacity: 1,
        //         duration: duration,
        //         delay: duration*2,
        //         ease: "power2.out",      
        //       });
    
    
        //       //////////////////////////////////////////////////////////////////
    
        //       gsap.to(".SectionFive_card_t_1", {
        //         scrollTrigger: {
        //             trigger: "#section5",
        //             // scrub: true,
        //             start: "50% 50%",
        //             end: "bottom 50%",
        //             markers: true,
    
        //           },
        //           y: -(window.innerWidth*spacing)+0, //normal value
        //         // x: window.innerWidth*0.1,
        //         opacity: 1,
        //         duration: duration,
        //         delay: 0,
        //         ease: "power2.out",      
        //       });
    
        //       gsap.to(".SectionFive_card_t_2", {
        //         scrollTrigger: {
        //             trigger: "#section5",
        //             // scrub: true,
        //             start: "50% 50%",
        //             end: "bottom 50%",
        //             markers: true,
    
        //           },
        //           y: -(window.innerWidth*spacing)-100, //normal value
        //         // x: window.innerWidth*0.1,
        //         opacity: 1,
        //         duration: duration,
        //         delay: duration,
        //         ease: "power2.out",      
        //       });
    
        //       gsap.to(".SectionFive_card_t_3", {
        //         scrollTrigger: {
        //             trigger: "#section5",
        //             // scrub: true,
        //             start: "50% 50%",
        //             end: "bottom 50%",
        //             markers: true,
    
        //           },
        //           y: -(window.innerWidth*spacing)-200, //normal value
        //         // x: window.innerWidth*0.1,
        //         opacity: 1,
        //         duration: duration,
        //         delay: duration*2,
        //         ease: "power2.out",      
        //       });
        
        // }

        if (window.innerWidth >= 850) {
            const spacing = 120/window.innerWidth;
            console.log(window.innerWidth);
    
            gsap.to(".SectionFive_card_b_1", {
                scrollTrigger: {
                    trigger: "#section5",
                    // scrub: true,
                    start: "20% 50%",
                    end: "bottom 50%",
                    markers: false,
    
                  },
                y: (window.innerWidth*spacing*1.2)+10+20, //normal value
                x: (window.innerWidth*spacing*1.2)+300,
                opacity: 1,
                duration: duration,
                delay: 0.5,
                ease: "power2.out",
                zIndex: 1,      
              });
    
              gsap.to(".SectionFive_card_t_2", {
                scrollTrigger: {
                    trigger: "#section5",
                    // scrub: true,
                    start: "20% 50%",
                    end: "bottom 50%",
                    markers: false,
    
                  },
                y: (window.innerWidth*spacing*1.2)+200+20, //normal value
                x: (window.innerWidth*spacing*1.2)-100,
                opacity: 1,
                duration: duration,
                delay: 0.5,
                ease: "power2.out",  
                zIndex: 3,    
              });
    
              gsap.to(".SectionFive_card_b_2", {
                scrollTrigger: {
                    trigger: "#section5",
                    // scrub: true,
                    start: "20% 50%",
                    end: "bottom 50%",
                    markers: false,
    
                  },
                  y: (window.innerWidth*spacing*1.2)+50+20, //normal value
                  x: -(window.innerWidth*spacing*1.2)-200,
                opacity: 1,
                duration: duration,
                delay: 0.5,
                ease: "power2.out",
                zIndex: 2,    
              });
    
    
              ////////////////////////////////////////////////////////////////////
    
              gsap.to(".SectionFive_card_t_1", {
                scrollTrigger: {
                    trigger: "#section5",
                    // scrub: true,
                    start: "20% 50%",
                    end: "bottom 50%",
                    markers: false,
    
                  },
                  y: -(window.innerWidth*spacing*1.2)-200, //normal value
                  x: -(window.innerWidth*spacing*1.7)+100,
                opacity: 1,
                duration: duration,
                delay: 0.5,
                ease: "power2.out",
                zIndex: 1 
              });
    
              gsap.to(".SectionFive_card_b_3", {
                scrollTrigger: {
                    trigger: "#section5",
                    // scrub: true,
                    start: "20% 50%",
                    end: "bottom 50%",
                    markers: false,
    
                  },
                  y: -(window.innerWidth*spacing*1.2)-10, //normal value
                  x: -(window.innerWidth*spacing)-200*1.7,
                opacity: 1,
                duration: duration,
                delay: 0.5,
                ease: "power2.out",
                zIndex: 3 
              });
    
              gsap.to(".SectionFive_card_t_3", {
                scrollTrigger: {
                    trigger: "#section5",
                    // scrub: true,
                    start: "20% 50%",
                    end: "bottom 50%",
                    markers: false,
    
                  },
                  y: -(window.innerWidth*spacing*1.2)-50, //normal value
                  x: -(window.innerWidth*spacing)+500*1.2,
                opacity: 1,
                duration: duration,
                delay: 0.5,
                ease: "power2.out",  
                zIndex: 2,    
              });
        
        }

    },[]);


  return (
<div className="flex items-center justify-center min-h-[100vh] relative md2:mt-[5rem] " id="section5">


{/* <div className='absolute w-full h-full flex flex-col items-center justify-center z-[-1]'> */}

        <div className='SectionFive_card_t_1 FeedbackCard md2:w-[25vw]'>
            <div className='FeedbackCard_title'>
                <div className='FeedbackCard_title__circle'/>
                <p>John Smith</p>
                <p>Republic Co.</p>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className='FeedbackCard_content '>
                Easing is the primary way to change the timing of your tweens. 
                Simply changing the ease can adjust the entire feel and personality of your animation.
            </p>
            <p className='FeedbackCard_content2 p-2'>
                Easing is the primary way to change the timing of your tweens. 
                Simply changing the ease can adjust the entire feel and personality of your animation.
            </p>
        </div>

        <div className='SectionFive_card_t_2 FeedbackCard md2:w-[27vw]'>
            <div className='FeedbackCard_title'>
                    <div className='FeedbackCard_title__circle'/>
                    <p>John Smith</p>
                    <p>Republic Co.</p>
                    <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className='FeedbackCard_content'>
                Easing is the primary way to change the timing of your tweens. Simply changing the ease can adjust the entire feel and personality of your animation.
            </p>
        </div>

        <div className='SectionFive_card_t_3 FeedbackCard md2:w-[30vw]'>
            <div className='FeedbackCard_title'>
                <div className='FeedbackCard_title__circle'/>
                <p>John Smith</p>
                <p>Republic Co.</p>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className='FeedbackCard_content'>
                Easing is the primary way to change the timing of your tweens. Simply changing the ease can adjust the entire feel and personality of your animation.
            </p>
        </div>

        <div className='SectionFive_card_b_1 FeedbackCard md2:w-[25vw]'>
            <div className='FeedbackCard_title'>
                <div className='FeedbackCard_title__circle'/>
                <p>John Smith</p>
                <p>Republic Co.</p>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className='FeedbackCard_content'>
                Easing is the primary way to change the timing of your tweens. Simply changing the ease can adjust the entire feel and personality of your animation.
            </p>
        </div>

        <div className='SectionFive_card_b_2 FeedbackCard md2:w-[27vw]'>
            <div className='FeedbackCard_title'>
                <div className='FeedbackCard_title__circle'/>
                <p>John Smith</p>
                <p>Republic Co.</p>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className='FeedbackCard_content'>
                Easing is the primary way to change the timing of your tweens. Simply changing the ease can adjust the entire feel and personality of your animation.
            </p>
        </div>

        <div className='SectionFive_card_b_3 FeedbackCard md2:w-[30vw]'>
            <div className='FeedbackCard_title'>
                <div className='FeedbackCard_title__circle'/>
                <p>John Smith</p>
                <p>Republic Co.</p>
                <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className='FeedbackCard_content'>
                Easing is the primary way to change the timing of your tweens. Simply changing the ease can adjust the entire feel and personality of your animation.
            </p>
        </div>


    {/* </div> */}

    <h2 className='Heading2 text-center'>Hear from our customers</h2>



</div>
  )
}

export default SectionFive
