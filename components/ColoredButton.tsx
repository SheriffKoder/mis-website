import React from 'react'

const ColoredButton = ({text, hero}:{text:string, hero:boolean}) => {
  return (
    <button className='w-full px-4 py-2 flex items-center justify-center rounded-full
      neon_button gap-2 hover:gap-3 transition-all duration-100 ease-out'>

        <span>

      {text}
      </span>

      <span>

      {hero && (
           ">"
        )}
        </span>
    </button>
  )
}

export default ColoredButton
// bg-[#ffffff] text-black hover:text-white hover:bg-black