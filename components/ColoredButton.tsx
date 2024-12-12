import React from 'react'

const ColoredButton = ({text, hero}:{text:string, hero:boolean}) => {
  return (
    <button className={`
      ButtonText w-[125px] h-[2rem] md:h-[1.5rem] md:w-[150px] lg:h-[2rem]
      flex items-center justify-center rounded-full
      neon_button transition-all duration-100 ease-out
      ${hero && ('gap-2 hover:gap-3')}
      `}>

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