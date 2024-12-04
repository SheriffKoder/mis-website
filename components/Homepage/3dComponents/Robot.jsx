import React from 'react'
import RobotScene from "../3dScenes/RobotScene";

const Robot = () => {
  return (
    <div className='fixed min-w-[250px] w-[25vw] top-[20%] h-[50vh] right-[4rem] max-w-[1500px] z-[-1] md:z-[1] overflow-visible
    flex items-center justify-center'
    id="RobotContainer">

      <div className='w-full 
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
