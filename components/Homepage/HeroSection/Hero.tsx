"use client"
import React from 'react'
import ColoredButton from '../../ColoredButton'
import GradientButton from '../../GradientButton'
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { easeInOut, easeOut } from 'framer-motion'
import BrandSlider from './BrandSlider'
import Link from 'next/link'
import Image from 'next/image'
import AppleButton from './AppleButton'

const Hero = () => {


  useGSAP(()=> {


    gsap.set("#hero_text1", {
      y: 50, //normal value
      opacity: 0
    });

    gsap.to("#hero_text1", {
      y: 0, //normal value
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease:  easeOut

    });

    gsap.set("#hero_text2", {
      y: 30, //normal value
      opacity: 0
    });

    gsap.to("#hero_text2", {
      y: 0, //normal value
      opacity: 1,
      duration: 1,
      delay: 1.5,
      ease: easeOut

    });


    gsap.set("#hero_button1", {
      y: 15, //normal value
      opacity: 0
    });

    gsap.to("#hero_button1", {
      y: 0, //normal value
      opacity: 1,
      duration: 1,
      delay: 1.75,
      ease: easeInOut

    });


    gsap.set("#hero_button2", {
      y: 15, //normal value
      opacity: 0
    });

    gsap.to("#hero_button2", {
      y: 0, //normal value
      opacity: 1,
      duration: 1,
      delay: 1.75,
      ease: easeInOut

    });
    
    

},[]);




  
  return (
    <section className='h-full flex flex-col items-start justify-center
    gap-4' id="section_hero">

        <h1 className='Heading1 flex flex-col items-start justify-center mt-[5rem]'
        id="hero_text1">
          <span>Modern</span>
          <span>Intelligence</span>
          <span className='relative flex flex-row gap-[1.5rem] items-center justify-center'>Solutions
           <AppleButton/>
          </span>
        </h1>

        <p className='ml-1 Paragraph1 md:max-w-[50vw] mb-2' id="hero_text2">
        → A premier digital solutions company 
          specializing in saving people time through innovative automation and tailored services. 
          If you can imagine it, we can make it a reality.
        </p>

        <div className='flex flex-col md:flex-row gap-2 md:gap-4 Paragraph1 relative w-full'>
          <Link href="#section6" id="hero_button1">
            <ColoredButton text={"Get started"} hero={true}/>
          </Link>
            
          <Link href="#section2" id="hero_button2" className=''>
            <GradientButton text={"Explore all features"} />
          </Link>

        </div>

        <div className='w-full overflow-hidden mt-[5rem] opacity-60 relative'
        id="brandStrip">
          <BrandSlider/> 
        </div>


    </section>
  )
}

export default Hero
