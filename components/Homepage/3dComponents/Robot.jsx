"use client"
import React, {useState} from 'react'
import RobotScene from "../3dScenes/RobotScene";

import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import {ScrollTrigger, ScrollToPlugin} from "gsap/all";

const Robot = () => {


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const [robotRotationZ, setRobotRotationZ] = useState(-0.05);

  const [robotRotationY, setRobotRotationY] = useState(-1.9);

  const [robotMouseTrack, setRobotMouseTrack] = useState(true);

  const [robotSectionId, setRobotSectionId] = useState(1);

  const [robotPositionScale, setRobotPositionScale] = useState({scale:0.8, posX:0, posY:-1.7, posZ:0})

  // Section2 Rotation
  function mapProgressToRangeY(progress) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // Map the progress to the new range [-1.9, -1.1] 1,2,1
    const output = -1.9 + (progress * ( -1.1 - -1.9 ));
    
    return output;
}

  // Section3 Rotation
  function mapProgressToRangeY_3(progress) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // Map the progress to the new range [-1.1 to -1.45] 1,2,1
    const output = -1.1 + (progress * ( -1.45 - -1.1 ));
    
    return output;
}

  // Section 6 rotation
  function mapProgressToRangeY_6(progress) {
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
  function mapProgressToScale_3(progress) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // 1,2,1
    // Map the progress to the new range 0.9 to 6
    // if (progress <= 0.5) {}
    const scale = Math.min( 3.7, (0.8 + (progress * ( 5 - 0.8 ))));
    // console.log(scale);

    // Map the progress to the new range 0 to -1.7
    const posX = 0 + (progress * ( -5 - 0 ));

    // Map the progress to the new range -1.5 to -26
    const posY = -1.5 + (progress * ( -21 - -1.5 ));

    //
    const posZ = 0
    
    return {scale, posX, posY, posZ};
}

  // Section 4 Scale out
  function mapProgressToScale_4(progress) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // 1,2,1
    // Map the progress to the new range 2.5 to 6 reverse
    const scale = 4 + (progress * ( 2.5 - 4 ));

    // Map the progress to the new range 0 to -1.7 reverse
    const posX = -1.7 + (progress * ( -3 - -1.7 ));

    // Map the progress to the new range -1.5 to -26 reverse
    const posY = -20 + (progress * ( -18 - -27 ));
    console.log(posY);

    //
    const posZ = 0
    
    return {scale, posX, posY, posZ};
}

  // Section 4 Scale out
  function mapProgressToScale_5(progress) {
    // Ensure the progress is within the valid range of [0, 1]
    progress = Math.max(0, Math.min(1, progress));
    
    // 1,2,1
    // Map the progress to the new range 2.5 to 6 reverse
    const scale = 2.5 + (progress * ( 0.9 - 2.5 ));

    // Map the progress to the new range 0 to -1.7 reverse
    const posX = -2.7 + (progress * ( 0 - -2.7 ));

    // Map the progress to the new range -1.5 to -26 reverse
    const posY = -10.5 + (progress * ( -1.7 - -10.5 ));

    //
    const posZ = 0
    
    return {scale, posX, posY, posZ};
}


  useGSAP(()=> {


    if (window.innerWidth > 1280) {


      const TransitionTimeline_Robot_To_SectionTwo = gsap.timeline({
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
        // left: "10%"
      }, "Section2")
      .to("#RobotContainer", {
        duration: 1,
        left: 0,
        // rotationY: 360,
        // scale: 2
        left: "0%"
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
      const TransitionTimeline_Robot_To_SectionThree = gsap.timeline({
        scrollTrigger: {
          trigger: "#section3",
          start: "60% 100%",
          end: "100% top",
          scrub: 2,
          // markers: true,
          id: "scrub",
          onEnter: () => {
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
            if (self.progress < 0.2) {
              gsap.to("#RobotSceneContainer", {
                opacity: 1,
              })
              // gsap.to("#section3", {
              //   // opacity: 0,
              // })
            }
            // if (self.progress < 0.7) {
            //   gsap.to("#section3", {
            //     // opacity: 0,
            //   })
            // }

            if (self.progress >= 0.5) {
              gsap.to("#RobotSceneContainer", {
                opacity: 0,
              })
            }
            // if (self.progress >= 0.7) {
            //   gsap.to("#section3", {
            //     // opacity: 1,
            //   })
            // }

          },
          // onScrubComplete: ({progress, direction, isActive}) => {
          //   console.log(progress, direction, isActive);
          //   if (!isActive) setRobotMouseTrack(true);
          // }
          
        } 
      })
      TransitionTimeline_Robot_To_SectionThree.add("Section3")
      .to("#RobotWrapper", {
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
        left:"0%",
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


      const TransitionTimeline_Robot_To_SectionFour = gsap.timeline({
        scrollTrigger: {
          trigger: "#section4",
          start: "top 10%",
          end: "60% center",
          scrub: 2,
          // markers: true,
          id: "scrub4",
          onEnter: () => {
            setRobotMouseTrack(false);
            setRobotSectionId(4);
          },
          onEnterBack: () => {
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
            // gsap.to("#section3", {
            //   opacity: 0,
            // })

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



      const TransitionTimeline_Robot_To_SectionFive = gsap.timeline({
        scrollTrigger: {
          trigger: "#section5",
          start: "top top",
          end: "bottom 50%",
          scrub: 1,
          // markers: true,
          id: "scrub5",
          onEnter: () => {
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
            // gsap.to("#section3", {
            //   opacity: 0,
            // })

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
      .to("#RobotWrapper", {
        width: 450,
        height: 450,
        zIndex: 3,
        maxWidth: window.innerWidth,
        top: "30%",
        left: "15%",

      }, "Section5")
      .to("#RobotSceneContainer", {
        duration: 1,
        width: 450,
        maxWidth: window.innerWidth,
        height: "100%",
        maxHeight: window.innerHeight,
        // right: window.innerWidth*0.5,
        // left: window.innerWidth*0.3
        // left:"35%",
        // transformOrigin:"-50% -50%",
        // marginLeft: "450"
      }, "Section5")





      const TransitionTimeline_Robot_To_SectionSix = gsap.timeline({
        scrollTrigger: {
          trigger: "#section6",
          start: "top top",
          end: "bottom 50%",
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
        // zIndex: -1,

      }, "Section6")
      .to("#RobotWrapper", {
          left: "60%",
      }, "Section6")
    } 
    
    if (window.innerWidth < 570 ) {

      const TransitionTimeline_Robot_To_SectionTwo2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#section22",
          start: "top bottom",
          end: "center cemter",
          scrub: 0.25,
          // markers: true,
          id: "scrub",
          onUpdate: (self) => {
            // console.log("progress", self.progress);
            // robotRotationY.current = mapProgressToRangeY(self.progress);
            // setRobotRotationY(mapProgressToRangeY(self.progress));
            // console.log(robotRotationY.current);
            if (self.progress < 0.01) {
              // setRobotMouseTrack(true);
              setRobotSectionId(2);
            }
            if (self.progress >= 0.01 && self.progress < 0.04) {
              // setRobotMouseTrack(false);
              setRobotSectionId(2);
            }
            if (self.progress >= 0.9) {
              // setRobotMouseTrack(true);
              setRobotSectionId(2);

            }

          },
          // onScrubComplete: ({progress, direction, isActive}) => {
          //   console.log(progress, direction, isActive);
          //   if (!isActive) setRobotMouseTrack(true);
          // }
          
        } 
      })
      TransitionTimeline_Robot_To_SectionTwo2.add("Section22")
      .to("#RobotWrapper", {
        duration: 1,
        // left: 0,
        // rotationY: 360,
        // scale: 2
        zIndex: 3,
        maxWidth: 150,
        maxHeight: 200,
        top: "80%",
        left: "75%",
      }, "Section22")
      .to("#RobotContainer", {
        duration: 1,
        // left: 0,
        // rotationY: 360,
        // scale: 2
        maxWidth: 150,
        maxHeight: 200,
      }, "Section22")
      .to("#RobotSceneContainer", {
        // duration: 1,
        // maxHeight: 1000,
        // maxWidth: 1000,
        // height: 500,
        // width: 500,
        top: "0%",
        maxWidth: 150,
        maxHeight: 200,
        // left: 0,


      }, "Section22")

    }

    if (window.innerWidth < 1270 && window.innerWidth > 570) {

      const TransitionTimeline_Robot_To_SectionTwo = gsap.timeline({
        scrollTrigger: {
          trigger: "#section2",
          start: "top bottom",
          end: "center cemter",
          scrub: 0.25,
          // markers: true,
          id: "scrub",
          onUpdate: (self) => {
            // console.log("progress", self.progress);
            // robotRotationY.current = mapProgressToRangeY(self.progress);
            // setRobotRotationY(mapProgressToRangeY(self.progress));
            // console.log(robotRotationY.current);
            if (self.progress < 0.01) {
              // setRobotMouseTrack(true);
              setRobotSectionId(2);
            }
            if (self.progress >= 0.01 && self.progress < 0.04) {
              // setRobotMouseTrack(false);
              setRobotSectionId(2);
            }
            if (self.progress >= 0.9) {
              // setRobotMouseTrack(true);
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
        zIndex: 3,
        width: 150,
        height: 200,        
        top: "80%",
        left: "80%",

      }, "Section2")
      .to("#RobotContainer", {
        duration: 1,
        // left: 0,
        // rotationY: 360,
        // scale: 2
        maxWidth: 150,
        maxHeight: 200,
      }, "Section2")
      .to("#RobotSceneContainer", {
        // duration: 1,
        // maxHeight: 1000,
        // maxWidth: 1000,
        // height: 500,
        // width: 500,
        top: "0%",
        maxWidth: 150,
        maxHeight: 200,
        // left: 0,


      }, "Section2")

    }

    // Nav bar link scroll
    const links = gsap.utils.toArray("nav a");
    links.forEach(a => {
      const element = document.querySelector(a.getAttribute("href")),
          linkST = ScrollTrigger.create({
                trigger: element,
                start: "-20% top",
                end: "-150% top",
                // markers: true,

              });

              ScrollTrigger.create({
                trigger: element,
                start: "0 0",
                end: "top top",
                // markers: true,

                onToggle: self => self.isActive && setActive(a)
              });
      a.addEventListener("click", e => {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
      });
    });
    
    function setActive(link) {
      console.log(link);
      links.forEach(el => el.classList.remove("active"));
      link.classList.add("active");
    }

  },[]);








  return (

    // full screen
    <div className='fixed w-full h-[92vh] top-[6%]
    flex z-[-1]' id="RobotWrapper">

      {/* positioned like the section containers */}
      <div className='max-w-[1500px] mx-auto w-full
      relative flex items-center justify-center'
      id="RobotContainer">
        
        <div className=' absolute
         w-[70vw] h-[70vw] 
         max-w-[450px] max-h-[600px] 
         md:w-[40vw] md:h-[50vw] right-0
         
        
         top-[45%]
         translate-y-[-50%]
         '
         id="RobotSceneContainer">
          <RobotScene 
            bodyRotation={{x:0,y:robotRotationY, z:robotRotationZ}} 
            robotMouseTrack={robotMouseTrack}
            sectionId={robotSectionId}
            robotPositionScale={robotPositionScale}
            />
        </div>

      </div>
    
    </div>



  )
}

export default Robot


    // <div className='fixed 
    // w-[100vw] h-[100vh] border-blue-600'>

    // <div className='relative
    // min-w-[250px] full h-full w-full left-0 max-w-[1500px] 
    // z-[-1] md:z-[1] mx-[2rem] lg:mx-[4rem]
    
    // overflow-visible border
    // flex items-center justify-center'
    // id="RobotContainer">

    //   <div className='w-full border 
    //   md:pr-[7vw] overflow-visible h-full'>
    //     <div className="
    //     w-[70vw] h-[70vw] 
    //     max-w-[450px] max-h-[600px] 
    //     md:w-[40vw] md:h-[50vw] 
    //      overflow-visible border border-red-600
    //     "id="RobotSceneContainer">
    //         <RobotScene 
    //         bodyRotation={bodyRotation} 
    //         robotMouseTrack={robotMouseTrack}
    //         sectionId={sectionId}
    //         robotPositionScale={robotPositionScale}
    //         />
    //     </div>
    //   </div>
    //   </div>
    // </div>