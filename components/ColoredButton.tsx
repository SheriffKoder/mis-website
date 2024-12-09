import React from 'react'

const ColoredButton = ({text}:{text:string}) => {
  return (
    <button className='w-full px-4 py-1 flex items-center justify-center rounded-full
      neon_button'>
      {text}
    </button>
  )
}

export default ColoredButton
// bg-[#ffffff] text-black hover:text-white hover:bg-black