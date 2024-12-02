import React from 'react'
import RobotScene from "../3dScenes/RobotScene";

const Robot = () => {
  return (
    <div className='fixed w-full max-w-[1500px] z-[-1] overflow-visible'
    id="RobotContainer">

      <div className='absolute top-0 right-[2rem] w-full h-[100vh] flex items-center justify-end
      md:pr-[7vw]'>
        <div className="w-[70vw] h-[70vw] max-w-[320px] max-h-[320px] md:w-[40vw] md:h-[40vw]
        ">
            <RobotScene/>
        </div>
      </div>

    </div>
  )
}

export default Robot
