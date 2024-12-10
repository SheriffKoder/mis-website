import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';
import { sectionSix_socials } from "@/constants";
import Form from "./Form";
import SparkleSVG from "@/public/SVG/sparkle";

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

      let socialIcons = gsap.utils.toArray(".socialIcon");

      gsap.to(socialIcons, {
        scrollTrigger: {
            trigger: "#section6",
            // scrub: true,
            start: "center 60%",
            end: "top top",
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
    gap-2' id="section6">

      <div className='order-2 lg:order-1 w-full h-full bg-[#0a0a0a] border border-[#252525] rounded-[10px]'>
        <h3 className="Heading3 text-center my-[2rem]">Tell us your inquiry</h3>
        <Form/>
      </div>

    <div className='flex flex-col w-full order-1 h-[10%] lg:order-2 lg:h-full items-center'>
        <div className='text-end h-[20%] lg:h-auto lg:mb-[1rem]'>
                <h2 className='Heading1 translate-x-[10rem] opacity-0'
                id="sectionSix_header">Contact us</h2>
        </div>
        <div className='lg:h-full w-full hidden lg:flex items-start justify-center gap-[4rem] mt-4'>
            {
              sectionSix_socials.map((social, index)=> (
                <div className="socialIcon w-[3rem] h-[3rem] rounded-full border-4 items-center justify-center flex
                scale-0 opacity-0" key={'social'+index}><SparkleSVG fill={"#ffffff"}/></div>
              ))
            }
        </div>
    </div>

    <div className='h-[20%] w-full visible lg:hidden order-3'>
      {
        sectionSix_socials.map((social, index)=> (
          <div className="socialIcon w-[2rem] h-[2rem] rounded-full
          scale-0 opacity-0" key={'social_sm'+index}><SparkleSVG fill={"#ffffff"}/></div>
        ))
      }
    </div>


    </div>
  )
}

export default SectionSix
