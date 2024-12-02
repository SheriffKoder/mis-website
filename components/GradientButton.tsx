import React from 'react'

const GradientButton = ({text}:{text:string}) => {
  return (
    <button className='px-4 py-1 flex items-center justify-center rounded-full
       bg-[#141414]'>
      <span className='gradient_text'>{text}</span>
    </button>
  )
}

export default GradientButton