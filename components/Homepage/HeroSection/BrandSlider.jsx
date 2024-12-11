"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

// import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger} from "gsap/all";


/*
same text twice
second offside
animate till reach -100 xPercent
reset

// 2 change direction on scroll scrub


*/

const BrandSlider = () => {

    const firstText = useRef(null);
    const secondText = useRef(null);

    const slider = useRef(null); //2

    const factor = useRef(0.025);

    let xPercent = 10;
    let direction = 1; // -1 left, 1 right

    useEffect(()=> {

        gsap.registerPlugin(ScrollTrigger); //2

        requestAnimationFrame(animation);
        
        gsap.to(slider.current, {   //2
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,    // instead of 1 to be more smooth
                onUpdate: e => direction = e.direction * -1, // reverse direction
            },
            x: "-=75px", // original: 300
        })


    },[]);

    const animation = () => {

        // reset (left)
        if(xPercent <= -100) {
            xPercent = 0;
        }

        // reset (right)
        if(xPercent > 0 ) {
            xPercent = -100;
        }

        gsap.set(firstText.current, {
            xPercent: xPercent
        });
        gsap.set(secondText.current, {
            xPercent: xPercent
        });
        xPercent += factor.current * direction; //speed   original: 0.1
        requestAnimationFrame(animation);
    }

  return (

    <div ref={slider} className="relative whitespace-nowrap flex flex-row"
    onMouseEnter={()=> factor.current = 0.01}
    onMouseLeave={()=> factor.current = 0.025}
    id=""
    >
        <span ref={firstText} className="relative left-[0]"> 
            <div className='w-[150vw] md:w-[100vw] h-[50px] lg:h-[75px] 
            flex flex-row justify-around items-center'>
                <Image src="/Logo/logo2.png.png" alt="" height={77} width={100}></Image>
                <Image src="/Logo/logo2.png.png" alt="" height={50} width={100}></Image>
                <Image src="/Logo/logo2.png.png" alt="" height={50} width={100}></Image>
                <Image src="/Logo/logo2.png.png" alt="" height={50} width={100}></Image>

            </div>

        </span>


        <span ref={secondText} className="absolute left-[150vw] md:left-[100vw]"> 
        <div className='w-[150vw] md:w-[100vw] h-[50px] lg:h-[75px] 
            flex flex-row justify-around items-center'>
                <Image src="/Logo/logo2.png.png" alt="" height={77} width={100}></Image>
                <Image src="/Logo/logo2.png.png" alt="" height={50} width={100}></Image>
                <Image src="/Logo/logo2.png.png" alt="" height={50} width={100}></Image>
                <Image src="/Logo/logo2.png.png" alt="" height={50} width={100}></Image>

            </div>
        </span>
    </div>



  )
}

export default BrandSlider