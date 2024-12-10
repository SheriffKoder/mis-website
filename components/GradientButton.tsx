import SparkleSVG from '@/public/SVG/sparkle'
import React from 'react'

const GradientButton = ({text}:{text:string}) => {
  return (
    <button className='GradientButton px-4 py-2 flex items-center justify-center rounded-full
       bg-[#141414] gap-1'>

        <SparkleSVG fill={"#9046D9"}/>

      <span className='gradient_text'>{text}</span>
    </button>
  )
}

export default GradientButton