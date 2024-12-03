"use client"
// import Spline from '@splinetool/react-spline/next';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import React from 'react'
import {ScrollTrigger} from "gsap/all";
/*

wrap rectangle on the face, for black screen




*/


export default function Home() {




  gsap.registerPlugin(ScrollTrigger);


  useGSAP(()=> {

    // const images = gsap.utils.toArray('img');
    
      document.body.style.overflow = 'auto';
      document.scrollingElement.scrollTo(0, 0);
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });
      
      gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        const [x, xEnd] = (index % 2) ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
        gsap.fromTo(w, {  x  }, {
          x: xEnd,
          scrollTrigger: { 
            trigger: section, 
            scrub: 0.5 
          }
        });
      });
    
    
    // imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);
  
  

},[]);








  return (
    <main className='relative'>

  


  <div className="demo-wrapper">
    <header className="df aic jcc">
      <div>
        <h1>ScrollTrigger</h1>
        <h2>demo</h2>
      </div>
    </header>

    <section className="demo-text">
      <div className="wrapper text">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </div>
    </section>

    <section className="demo-gallery">
      <ul className="wrapper">
        <li><img src="https://source.unsplash.com/random/1240x874?sig=0" width="1240" height="874" alt="Random Image"/></li>
        <li><img src="https://source.unsplash.com/random/1240x874?sig=1" width="1240" height="874" alt="Random Image"/></li>
        <li><img src="https://source.unsplash.com/random/1240x874?sig=2" width="1240" height="874" alt="Random Image"/></li>
      </ul>
    </section>

    <section className="demo-gallery">
      <ul className="wrapper">
        <li><img src="https://source.unsplash.com/random/1240x874?sig=3" width="1240" height="874" alt="Random Image"/></li>
        <li><img src="https://source.unsplash.com/random/1240x874?sig=4" width="1240" height="874" alt="Random Image"/></li>
        <li><img src="https://source.unsplash.com/random/1240x874?sig=5" width="1240" height="874" alt="Random Image"/></li>
      </ul>
    </section>




  </div>


    </main>
  );
}
