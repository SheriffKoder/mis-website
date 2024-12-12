"use client"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';
import { sectionSix_socials } from "@/constants";
import Form from "./Form";

const SectionSix = () => {


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useGSAP(()=> {

      gsap.to("#sectionSix_header", {
          scrollTrigger: {
              trigger: "#section6",
              // scrub: true,
              start: "top 60%",
              end: "10% 50%",
              // markers: false,

          },
          x: 0, //normal value
          opacity: 1,
          duration: 1,
          delay: 0,
          ease:  easeOut,

      });

      
      gsap.to("#sectionSix_element", {
        scrollTrigger: {
            trigger: "#section6",
            // scrub: true,
            start: "top 60%",
            end: "10% 50%",
            // markers: false,

        },
        x: 0, //normal value
        opacity: 1,
        duration: 1,
        delay: 0,
        ease:  easeOut,

    });

      //   gsap.to("#sectionFive_para", {
      //     scrollTrigger: {
      //         trigger: "#section5",
      //         // scrub: true,
      //         start: "top 60%",
      //         end: "10% 50%",
      //         // markers: false,

      //       },
      //       y: 0, //normal value
      //       opacity: 1,
      //       duration: 1,
      //       delay: 0.5,
      //       ease: easeOut

      //   });

      const socialIcons = gsap.utils.toArray(".socialIcon");

      gsap.to(socialIcons, {
        scrollTrigger: {
            trigger: "#section6",
            // scrub: true,
            start: "top 60%",
            end: "10% 50%",
            // markers: true,

          },
          scale: 1, //normal value
          // x:0,
          opacity: 1,
          duration: 1,
          delay: 0,
          ease: easeOut,
          stagger: -0.2, // delay between elements
  
      });



 


  },[]);




  return (
    <div className='h-full w-full flex items-center justify-center lg:flex-row flex-col
    gap-[2rem] max-w-[1500px] z-[2] relative md2:pt-[10rem]' id="section6">


      <div className="w-full lg:w-[50%] lg:order-2 lg:mb-auto lg:flex gap-[2rem] flex-col lg:justify-start">
        <div className='text-center h-full lg:h-auto'>
          <h2 className='Heading1 translate-x-[10rem] opacity-0'
          id="sectionSix_header">Contact us</h2>
        </div>

        <div className='mt-[1rem] w-full visible flex flex-row items-center justify-center gap-[1rem]'>
        {
          sectionSix_socials.map((social)=> (
            <div className="socialIcon w-[2rem] h-[2rem] rounded-full border flex items-center justify-center
            scale-0 opacity-0" key={social.name+" sm"}>Hi</div>
          ))
        }
      </div>

      </div>


      <div className='lg:order-1 lg:w-[50%] w-full h-full bg-[#0a0a0a] border border-[#252525] rounded-[10px] py-[2rem]
      translate-x-[-10rem] opacity-0 max-w-[600px] lg:max-w-[800px]' id="sectionSix_element">
        <h3 className="Heading3 text-center my-[1rem]">Tell us your inquiry</h3>
        <Form/>
      </div>



    </div>
  )
}

export default SectionSix
