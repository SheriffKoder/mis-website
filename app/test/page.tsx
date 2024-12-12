import React from 'react'
import "./page.module.css"
import Image from 'next/image'

// From Vercel


const AppleButton = () => {




  return (
    <div className='w-full h-[100vh] flex items-center justify-center
    flex-col
    '>
      <button className='GradBorderButton_wrapper'>
          <span className='GradBorderButton'>
          </span>
          {/* <p className='GradBorderButton_text'> */}
          <Image src="/Logo/Logo_white.png" alt="company logo" height={50} width={100}
              className='GradBorderButton_text bg-black p-[12px] rounded-[10px] border border-[#181818] cursor-pointer'
              style={{boxShadow: '0 2px 30px rgba(255, 255, 255, 0.15)'}}></Image>
          {/* </p> */}
      </button>


        
    </div>
  )
}

export default AppleButton