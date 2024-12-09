"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { sectionFive_cardsContent } from '@/constants';
/*

/* https://www.youtube.com/watch?v=mF9yOwlunWk&t=11s

.brandSliderItem {
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    animation-delay: calc((10s/10) * (var(--position) - 1) );
  }
  
  @keyframes autoRun {
    from {
      left: calc(100px*-1);
  
    } to {
      left: 100%;
  
    }
  }
  








*/


const page = () => {

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
let timeRunning = 1000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
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
        next.click();
    }, timeAutoNext)
}
},[])

  return (
    <div className='h-[100vh] w-full flex items-center justify-center'>
      <div className='w-full h-[70vh]'>
        <div className="carousel">
        <div className="list">

            {sectionFive_cardsContent.map((card, index)=> (
              <div className="item">
                <Image alt="" src={`/image/img1.jpg`} fill/>
                <div className="content">
                    <div className="author">{card.company}</div>
                    <div className="title">{card.name}</div>
                    <div className="des">
                       {card.comment}
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
                <div className="item">
                <Image alt="" src={`/image/img1.jpg`} width={200} height={400}/>
                <div className="content">
                    <div className="title">
                        Name Slider
                    </div>
                    <div className="description">
                        Description
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

export default page
