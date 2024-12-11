import SparkleSVG from '@/public/SVG/sparkle'
import React from 'react'

const GradientButton = ({text}:{text:string}) => {
  return (
    <button className='GradientButton 
    ButtonText w-[150px] h-[2rem] md:h-[1.5rem] md:w-[175px] lg:h-[2rem] md1:w-[200px] md2:w-[250px]
    flex items-center justify-center rounded-full
       bg-[#141414] gap-1 relative'>

        <SparkleSVG fill={"#9046D9"}/>

      <span className='gradient_text'>{text}</span>
    </button>
  )
}

export default GradientButton