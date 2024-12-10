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
import SectionFour from '@/components/Homepage/SectionFour/SectionFour'
import SectionFive from '@/components/Homepage/SectionFive/SectionFive'
import SectionFive_2 from '@/components/Homepage/SectionFive/SectionFive_2'

import SectionFivePhone from '@/components/Homepage/SectionFive/SectionFivePhone'
import SectionSix from '@/components/Homepage/SectionSix/SectionSix'
import SectionTwo_2 from '@/components/Homepage/SectionTwo/SectionTwo_2'
import Page from './test3/page'

const page = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // const [robotRotationY, setRobotRotationY] = React.useState(-1.6);
  const [robotRotationZ, setRobotRotationZ] = React.useState(-0.05);

  // const robotRotationY = React.useRef(-1.6);
  const [robotRotationY, setRobotRotationY] = React.useState(-1.9);

  const [robotMouseTrack, setRobotMouseTrack] = React.useState(true);

  const [robotSectionId, setRobotSectionId] = React.useState(1);

  const [robotPositionScale, setRobotPositionScale] = React.useState({scale:0.8, posX:0, posY:-1.7, posZ:0})

  // Section2 Rotation
  function mapProgressToRangeY(progress:number) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // Map the progress to the new range [-1.9, -1.1] 1,2,1
    const output = -1.9 + (progress * ( -1.1 - -1.9 ));
    
    return output;
}

  // Section3 Rotation
  function mapProgressToRangeY_3(progress:number) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // Map the progress to the new range [-1.1 to -1.45] 1,2,1
    const output = -1.1 + (progress * ( -1.45 - -1.1 ));
    
    return output;
}

  // Section 6 rotation
  function mapProgressToRangeY_6(progress:number) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // Map the progress to the new range [-1.9, -1.1] 1,2,1
    const output = -1.45 + (progress * ( -1.9 - -1.45 ));
    
    return output;
}

  // Section3 Scale In
  // FROM
  // scale={0.9}
  // position={[0,-1.5,0]}
  // TO
  // scale={8}
  // position={[-0.75,-30,0]}
  function mapProgressToScale_3(progress:number) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // 1,2,1
    // Map the progress to the new range 0.9 to 6
    const scale = 0.8 + (progress * ( 5 - 0.8 ));

    // Map the progress to the new range 0 to -1.7
    const posX = 0 + (progress * ( -3 - 0 ));

    // Map the progress to the new range -1.5 to -26
    const posY = -1.5 + (progress * ( -21 - -1.5 ));

    //
    const posZ = 0
    
    return {scale, posX, posY, posZ};
}

  // Section 4 Scale out
  function mapProgressToScale_4(progress:number) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // 1,2,1
    // Map the progress to the new range 2.5 to 6 reverse
    const scale = 6 + (progress * ( 2.5 - 6 ));

    // Map the progress to the new range 0 to -1.7 reverse
    const posX = -1.7 + (progress * ( -2.7 - -1.7 ));

    // Map the progress to the new range -1.5 to -26 reverse
    const posY = -20 + (progress * ( -16.5 - -26 ));
    console.log(posY);

    //
    const posZ = 0
    
    return {scale, posX, posY, posZ};
}

  // Section 4 Scale out
  function mapProgressToScale_5(progress:number) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // 1,2,1
    // Map the progress to the new range 2.5 to 6 reverse
    const scale = 2.5 + (progress * ( 0.4 - 2.5 ));

    // Map the progress to the new range 0 to -1.7 reverse
    const posX = -2.7 + (progress * ( -2 - -2.7 ));

    // Map the progress to the new range -1.5 to -26 reverse
    const posY = -10.5 + (progress * ( -1.7 - -10.5 ));

    //
    const posZ = 0
    
    return {scale, posX, posY, posZ};
}


  useGSAP(()=> {


    let TransitionTimeline_Robot_To_SectionTwo = gsap.timeline({
      scrollTrigger: {
        trigger: "#section2",
        start: "top 90%",
        end: "bottom top",
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
            setRobotSectionId(2);
          }
          if (self.progress >= 0.01 && self.progress < 0.04) {
            setRobotMouseTrack(false);
            setRobotSectionId(2);
          }
          if (self.progress >= 0.9) {
            setRobotMouseTrack(true);
            setRobotSectionId(2);

          }

        },
        // onScrubComplete: ({progress, direction, isActive}) => {
        //   console.log(progress, direction, isActive);
        //   if (!isActive) setRobotMouseTrack(true);
        // }
        
      } 
    })
    TransitionTimeline_Robot_To_SectionTwo.add("Section2")
    .to("#RobotWrapper", {
      duration: 1,
      // left: 0,
      // rotationY: 360,
      // scale: 2
      zIndex: -1,
    }, "Section2")
    .to("#RobotSceneContainer", {
      // duration: 1,
      // maxHeight: 1000,
      // maxWidth: 1000,
      // height: 500,
      // width: 500,
      left: 0,


    }, "Section2")


    // width of container full
    // put robot in the middle
    // 
    let TransitionTimeline_Robot_To_SectionThree = gsap.timeline({
      scrollTrigger: {
        trigger: "#section3",
        start: "60% 100%",
        end: "0% top",
        scrub: 0.25,
        // markers: true,
        id: "scrub",
        onEnter: (self) => {
          setRobotMouseTrack(false);
          setRobotSectionId(3);
        },
        onUpdate: (self) => {
          // console.log("progress", self.progress);
          // robotRotationY.current = mapProgressToRangeY(self.progress);
          //Body rotation
          setRobotRotationY(mapProgressToRangeY_3(self.progress));
          setRobotRotationZ(-0.15);

          setRobotPositionScale(mapProgressToScale_3(self.progress));
          // console.log(robotRotationY.current);
          if (self.progress < 0.5) {
            gsap.to("#RobotSceneContainer", {
              opacity: 1,
            })
            gsap.to("#section3", {
              opacity: 0,
            })
          }
          if (self.progress < 0.7) {
            gsap.to("#section3", {
              opacity: 0,
            })
          }

          if (self.progress >= 0.7) {
            gsap.to("#RobotSceneContainer", {
              opacity: 0,
            })
          }
          if (self.progress >= 0.7) {
            gsap.to("#section3", {
              opacity: 1,
            })
          }

        },
        // onScrubComplete: ({progress, direction, isActive}) => {
        //   console.log(progress, direction, isActive);
        //   if (!isActive) setRobotMouseTrack(true);
        // }
        
      } 
    })
    TransitionTimeline_Robot_To_SectionThree.add("Section3")
    .to("#RobotContainer", {
      // duration: 1,
      // left: 0,
      // // rotationY: 360,
      // // scale: 2
      // zIndex: -1,
      // // height: window.innerWidth-100,
      // width: window.innerWidth-17,
      // maxWidth: window.innerWidth,
      // height: window.innerWidth-17,
      // maxHeight: window.innerWidth,
      // top: 0,

      // marginTop: window.innerWidth*0.3,

    }, "Section3")
    .to("#RobotSceneContainer", {
      duration: 1,
      maxWidth: window.innerWidth*1.4,
      width: window.innerWidth*2,
      height: window.innerHeight*1.2,
      maxHeight: window.innerHeight*1.2,
      // marginLeft: -window.innerWidth*0.02,
      // width: window.innerWidth,
      // maxWidth: window.innerWidth
      // left:0,
    }, "Section3")


    let TransitionTimeline_Robot_To_SectionFour = gsap.timeline({
      scrollTrigger: {
        trigger: "#section4",
        start: "top 80%",
        end: "5% 50%",
        scrub: 0.25,
        // markers: true,
        id: "scrub4",
        onEnter: (self) => {
          setRobotMouseTrack(false);
          setRobotSectionId(4);
        },
        onEnterBack: (self) => {
          setRobotMouseTrack(false);
          setRobotSectionId(4);
        },
        onUpdate: (self) => {
          // setRobotRotationY(mapProgressToRangeY_4(self.progress));
          // setRobotRotationZ(-0.05);
          // console.log(self.progress);
          setRobotPositionScale(mapProgressToScale_4(self.progress));
          gsap.to("#RobotSceneContainer", {
            opacity: 1,
            // minWidth: window.innerWidth,
            // minHeight: window.innerWidth*0.4,
            // width: window.innerWidth*0.2,
            // height: window.innerHeight,
            // height:  window.innerHeight - window.innerHeight*(self.progress),
            // width: window.innerWidth - window.innerWidth*(self.progress),
            // top:0,
          })
          gsap.to("#section3", {
            opacity: 0,
          })

          // console.log(robotRotationY.current);
          // if (self.progress < 0.01) {
          //   setRobotMouseTrack(true);
          //   setRobotSectionId(4);
          // }
          // if (self.progress >= 0.01 && self.progress < 0.04) {
          //   setRobotMouseTrack(false);
          //   setRobotSectionId(4);
          // }
          // if (self.progress >= 0.9) {
          //   setRobotMouseTrack(true);
          //   setRobotSectionId(4);

          // }

        },
        // onScrubComplete: ({progress, direction, isActive}) => {
        //   console.log(progress, direction, isActive);
        //   if (!isActive) setRobotMouseTrack(true);
        // }
        
      } 
    })
    TransitionTimeline_Robot_To_SectionFour.add("Section4")
    
    .to("#RobotWrapper", {
      // duration: 1,
      // left: 0,
      // // rotationY: 360,
      // // scale: 2
      // width: window.innerWidth*0.25,
      // maxWidth: window.innerWidth,
      // height: window.innerWidth*0.25,
      // maxHeight: window.innerWidth,
      // top: 0,
      // right: 0,
      zIndex: -1,

    }, "Section4")
    .to("#RobotSceneContainer", {
      // duration: 1,
      // width: window.innerWidth*0.25,
      // maxWidth: window.innerWidth*0.25,
      // height: window.innerWidth*0.25,
      // maxHeight: window.innerWidth*0.25,
      // right: 0,
    }, "Section4")


    let TransitionTimeline_Robot_To_SectionFive = gsap.timeline({
      scrollTrigger: {
        trigger: "#section5",
        start: "top 80%",
        end: "0% 50%",
        scrub: 0.25,
        // markers: true,
        id: "scrub5",
        onEnter: (self) => {
          setRobotMouseTrack(true);
          setRobotSectionId(5);
        },
        onUpdate: (self) => {
          // setRobotRotationY(mapProgressToRangeY_4(self.progress));
          // setRobotRotationZ(-0.05);
          // console.log(self.progress);
          setRobotPositionScale(mapProgressToScale_5(self.progress));
          setRobotRotationY(mapProgressToRangeY(self.progress));

          gsap.to("#RobotSceneContainer", {
            opacity: 1,
            // minWidth: window.innerWidth,
            // minHeight: window.innerWidth*0.4,
            // width: window.innerWidth*0.2,
            // height: window.innerHeight,
            // height:  window.innerHeight - window.innerHeight*(self.progress),
            // width: window.innerWidth - window.innerWidth*(self.progress),
            // top:0,
          })
          gsap.to("#section3", {
            opacity: 0,
          })

          // console.log(robotRotationY.current);
          if (self.progress < 0.01) {
            setRobotMouseTrack(true);
            setRobotSectionId(5);
          }
          if (self.progress >= 0.01 && self.progress < 0.04) {
            setRobotMouseTrack(false);
            setRobotSectionId(5);
          }
          if (self.progress >= 0.9) {
            setRobotMouseTrack(true);
            setRobotSectionId(5);

          }

        },

        
        // onScrubComplete: ({progress, direction, isActive}) => {
        //   console.log(progress, direction, isActive);
        //   if (!isActive) setRobotMouseTrack(true);
        // }
        
      } 
    })
    TransitionTimeline_Robot_To_SectionFive.add("Section5")
    .to("#RobotContainer", {
      width: "100%",
      maxWidth: window.innerWidth,

    }, "Section5")
    .to("#RobotSceneContainer", {
      duration: 1,
      width: "100%",
      maxWidth: window.innerWidth,
      height: window.innerHeight,
      maxHeight: window.innerHeight,
      // right: window.innerWidth*0.5,
      // left: window.innerWidth*0.3
      // left:"35%",
      // transformOrigin:"-50% -50%",
      // marginLeft: "450"
    }, "Section5")





    let TransitionTimeline_Robot_To_SectionSix = gsap.timeline({
      scrollTrigger: {
        trigger: "#section6",
        start: "top 100%",
        end: "50% 60%",
        scrub: 0.25,
        // markers: true,
        id: "scrub6",
        onUpdate: (self) => {
          // console.log("progress", self.progress);
          // robotRotationY.current = mapProgressToRangeY(self.progress);
          setRobotRotationY(mapProgressToRangeY_6(self.progress));
          // console.log(robotRotationY.current);

        },
        
        // onScrubComplete: ({progress, direction, isActive}) => {
        //   console.log(progress, direction, isActive);
        //   if (!isActive) setRobotMouseTrack(true);
        // }
        
      } 
    })
    TransitionTimeline_Robot_To_SectionSix.add("Section6")
    .to("#RobotContainer", {
      zIndex: -1,

    }, "Section6")
    .to("#RobotSceneContainer", {
        left: window.innerWidth*0.4,
    }, "Section6")

  },[]);


  return (

    <main className='z-[0] overflow-hidden'>


      <div className='w-full h-full absolute top-0 left-0 z-[-2]  overflow-hidden vaporWave'
      id="#vaporWave">
          <VaporWave/>
      </div>

      <div className=' mx-auto relative 
      overflow-visible'>
        <Robot 
        bodyRotation={{x:0,y:robotRotationY, z:robotRotationZ}} 
        robotMouseTrack={robotMouseTrack}
        sectionId={robotSectionId}
        robotPositionScale={robotPositionScale}
        />

        <section className='w-full h-[100vh] max-w-[1500px] px-[2rem] lg:px-[4rem] mx-auto'>
          <Hero/>
        </section>

        <section className='w-full min-h-[100vh] overflow-clip hidden md1:block max-w-[1500px] px-[2rem] lg:px-[4rem] mx-auto'>
          <SectionTwo/>
        </section>

        <section className='w-full min-h-[100vh] overflow-clip md1:hidden mx-auto'>
          <SectionTwo_2/>
          {/* <Page/> */}
        </section>

        <section className='w-full h-[100vh] max-w-[1500px] px-[2rem] lg:px-[4rem] mx-auto'>
          <SectionThree/>
        </section>

        <section className='w-full min-h-[100vh] max-w-[1500px] px-[0rem] lg:px-[4rem] mx-auto'>
          <SectionFour/>
        </section>
        
        <section className='w-full min-h-[100vh] max-w-[1500px] px-[2rem] lg:px-[4rem] mx-auto'>
          {/* <SectionFive/> */}
          {/* <SectionFivePhone/> */}
          <SectionFive_2/>
        </section>

        <section className='w-full h-[70vh] max-w-[1500px] mb-[5rem] px-[2rem] lg:px-[4rem] mx-auto'>
          <SectionSix/>
        </section>


      </div>


      
    </main>

  )
}

export default page
