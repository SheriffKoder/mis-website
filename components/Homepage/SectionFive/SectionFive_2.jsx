"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { sectionFive_cardsContent } from '@/constants';

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';

/*

https://www.youtube.com/watch?v=j7GG009J9uc  
https://www.lundevweb.com/2023/11/design-effect-magic-slider-using-html.html
https://github.com/HoanghoDev/slider_1






*/


const sectionFour_2 = () => {

    useEffect(()=> {

        //step 1: get DOM
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');

        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.carousel .list');
        let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        let timeDom = document.querySelector('.carousel .time');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        let timeRunning = 500;
        let timeAutoNext = 500;

        nextDom.onclick = function(){
            showSlider('next');     
        }

        prevDom.onclick = function(){
            showSlider('prev');    
        }
        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            // next.click();
        }, timeAutoNext)
        function showSlider(type){
            let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
            let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
            
            if(type === 'next'){
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            }else{
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);

            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                // next.click();
            }, timeAutoNext)
        }
    },[])


    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    useGSAP(()=> {

        gsap.to("#sectionFive_header", {
            scrollTrigger: {
                trigger: "#section5",
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

    },[]);


  return (
    <div className='h-[90vh] md:h-[70vh] w-full flex items-center justify-center md:flex-row flex-col
    gap-[4rem]' id="section5">
        <div className='mb-auto'>
            <h1 className='Heading1 translate-x-[-10rem] opacity-0' id="sectionFive_header">What our customers say</h1>

        </div>
      <div className='w-full h-full'>
        <div className="carousel">
        <div className="list">

            {sectionFive_cardsContent.map((card, index)=> (
              <div className="item bg-[#0a0a0a] border border-[#252525] rounded-[10px]">
                {/* <div className=''> */}
                    {/* <div className='absolute w-full h-full top-0 left-0 bg-black'/> */}
                    {/* <div className='opacity-50'> */}
                        {/* <Image alt="" src={`/image/img1.jpg`} fill/> */}
                    {/* </div> */}
                {/* </div> */}
                <div className="content flex flex-col gap-2">
                    <div className="author">{card.company}</div>
                    <div className="title">{card.name}</div>
                    <div className="des">
                        <p className='opacity-50'>
                         {card.comment}
                        </p>
                    </div>
                    {/* <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div> */}
                </div>
            </div>
            ))}
            

            {/* <div className="item">
                <Image alt="" src="/image/img2.jpg" width={200} height={400}/>
                <div className="content">
                    <div className="author">LUNDEV</div>
                    <div className="title">DESIGN SLIDER</div>
                    <div className="topic">ANIMAL</div>
                    <div className="des">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                    </div>
                    <div className="buttons">
                        <button>SEE MORE</button>
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div> */}

        </div>
        <div className="thumbnail">


        {sectionFive_cardsContent.map((card, index)=> (
                <div className={`${index % 2 === 0 ? 'CardStyle_bg_1' : 'CardStyle_bg_2'} border rounded-[5px] item`}>
                {/* <Image alt="" src={`/image/img1.jpg`} width={200} height={400}/> */}
                <div className="content">
                    <div className="title">
                        {card.name}
                    </div>
                    <div className="description">
                        {card.company}
                    </div>
                </div>
            </div>
            ))}

{/* 
                <div className="item">
                <Image src="/image/img1.jpg" alt="" width={200} height={400}/>
                <div className="content">
                        <div className="title">
                            Name Slider
                        </div>
                        <div className="description">
                            Description
                        </div>
                    </div>
                </div> */}

          </div>

        <div className="arrows">
            <button id="prev">prev</button>
            <button id="next">next</button>
        </div>
        <div className="time"></div>
        </div>
      </div>
    </div>


  )
}

export default sectionFour_2
