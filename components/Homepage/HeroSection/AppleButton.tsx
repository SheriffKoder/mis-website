import React from 'react'
import Image from 'next/image'

// From Vercel


const AppleButton = () => {




  return (

      <button className='GradBorderButton_wrapper mt-[12px]'>
          <span className='GradBorderButton'>
          </span>
          {/* <p className='GradBorderButton_text'> */}
          <Image src="/Logo/Logo_white.png" alt="company logo" height={50} width={100}
              className='GradBorderButton_text bg-black p-[11px] rounded-[10px] border border-[#252525] cursor-pointer'
              ></Image>
          {/* </p> */}
      </button>


  )
}

export default AppleButton