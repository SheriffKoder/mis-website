"use client"

import Robot from '@/components/Homepage/3dComponents/Robot'
import Hero from '@/components/Homepage/HeroSection/Hero'
import React from 'react'
import VaporWave from '@/components/Homepage/HeroSection/VaporWave'
import SectionTwo from '@/components/Homepage/SectionTwo/SectionTwo'


import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";
import { easeOut } from 'framer-motion';
import SectionThree from '@/components/Homepage/SectionThree/SectionThree'

const page = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // const [robotRotationY, setRobotRotationY] = React.useState(-1.6);
  const [robotRotationZ, setRobotRotationz] = React.useState(-0.05);

  // const robotRotationY = React.useRef(-1.6);
  const [robotRotationY, setRobotRotationY] = React.useState(-1.9);

  const [robotMouseTrack, setRobotMouseTrack] = React.useState(true);

  function mapProgressToRangeY(progress:number) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // Map the progress to the new range [-1.6, -1.1]
    const output = -1.9 + (progress * ( -1.1 - -1.9 ));
    
    return output;
}

  useGSAP(()=> {


    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2",
        start: "top 80%",
        end: "5% top",
        scrub: 0.25,
        // markers: true,
        id: "scrub",
        onUpdate: (self) => {
          // console.log("progress", self.progress);
          // robotRotationY.current = mapProgressToRangeY(self.progress);
          setRobotRotationY(mapProgressToRangeY(self.progress));
          // console.log(robotRotationY.current);
          if (self.progress < 0.01) {
            setRobotMouseTrack(true);
          }
          if (self.progress >= 0.01 && self.progress < 0.04) {
            setRobotMouseTrack(false);
          }
          if (self.progress >= 0.9) {
            setRobotMouseTrack(true);
          }

        },
        // onScrubComplete: ({progress, direction, isActive}) => {
        //   console.log(progress, direction, isActive);
        //   if (!isActive) setRobotMouseTrack(true);
        // }
        
      } 
    })
    tl.add("Section2")
    .to("#RobotContainer", {
      duration: 1,
      left: 0,
      // rotationY: 360,
      // scale: 2
      zIndex: -1,
    }, "Section2")
    .to("#RobotSceneContainer", {
      duration: 1,
      maxHeight: 1000,
      maxWidth: 1000,
      height: 500,
      width: 500,

    }, "Section2")


    gsap.to("#RobotContainer", {
      scrollTrigger: {
          trigger: "#section3",
          start: "top 20%",
          end: "50% top",
          // scrub: 0.25,
          // markers: true,
          // id: "scrub",
          // pin: true,

          },
          zIndex: 1,

  })
    

  },[]);


  return (

    <main className='z-[0] overflow-hidden'>


      <div className='w-full h-full absolute top-0 left-0 z-[-2]  overflow-hidden vaporWave'
      id="#vaporWave">
          <VaporWave/>
      </div>

      <div className='px-[2rem] lg:px-[4rem] max-w-[1500px] mx-auto relative'>
        <Robot bodyRotation={{x:0,y:robotRotationY, z:robotRotationZ}} robotMouseTrack={robotMouseTrack}/>

        <section className='w-full h-[100vh]'>
          <Hero/>
        </section>

        <section className='w-full min-h-[100vh] overflow-clip'>
          <SectionTwo/>
        </section>

        <section className='w-full h-[100vh]'>
          <SectionThree/>
        </section>

        <section className='w-full h-[100vh] border'>
        </section>

      </div>
      
    </main>

  )
}

export default page
