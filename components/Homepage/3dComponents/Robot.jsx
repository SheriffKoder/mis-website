import React from 'react'
import RobotScene from "../3dScenes/RobotScene";

const Robot = ({bodyRotation, robotMouseTrack, sectionId, robotPositionScale}) => {
  return (

    // full screen
    <div className='fixed w-full h-[92vh] top-[6%] left-0
    flex z-[-1]' id="RobotWrapper">

      {/* positioned like the section containers */}
      <div className='max-w-[1500px] w-full
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
            bodyRotation={bodyRotation} 
            robotMouseTrack={robotMouseTrack}
            sectionId={sectionId}
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