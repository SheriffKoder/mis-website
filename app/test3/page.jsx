import React from 'react'

/*

/* https://www.youtube.com/watch?v=mF9yOwlunWk&t=11s

.brandSliderItem {
    position: absolute;
    left: 100%;
    animation: autoRun 10s linear infinite;
    animation-delay: calc((10s/10) * (var(--position) - 1) );
  }
  
  @keyframes autoRun {
    from {
      left: calc(100px*-1);
  
    } to {
      left: 100%;
  
    }
  }
  








*/


const page = () => {
  return (
    <div className='bg-white w-full h-[100vh] flex items-center'>
      
      <div className='slider w-full border border-red-500 h-[200px]'>
        <div className='list flex w-full min-w-[calc(100px*10)]'>
            <div style={{"--position": 1}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 2}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 3}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 4}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 5}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 6}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 7}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 8}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 9}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>
            <div style={{"--position": 10}}className='brandSliderItem w-[100px] h-[100px] mx-2 border border-black'></div>

        </div>
      </div>
    </div>
  )
}

export default page
