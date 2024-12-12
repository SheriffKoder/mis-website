
import Robot from '@/components/Homepage/3dComponents/Robot'
import Hero from '@/components/Homepage/HeroSection/Hero'
import React from 'react'
import VaporWave from '@/components/Homepage/HeroSection/VaporWave'
import SectionTwo from '@/components/Homepage/SectionTwo/SectionTwo'



import SectionThree from '@/components/Homepage/SectionThree/SectionThree'
import SectionFour from '@/components/Homepage/SectionFour/SectionFour'
import SectionFive_2 from '@/components/Homepage/SectionFive/SectionFive_2'

import SectionSix from '@/components/Homepage/SectionSix/SectionSix'
import SectionTwo_2 from '@/components/Homepage/SectionTwo/SectionTwo_2'

const page = () => {



  return (

    <main className='z-[0] overflow-hidden'>


      <div className='w-full h-full absolute top-0 left-0 z-[-2]  overflow-hidden vaporWave'
      id="#vaporWave">
          <VaporWave/>
      </div>

      <div className=' mx-auto relative 
      overflow-visible'>
        <Robot/>

        <section className='w-full h-[100vh] max-w-[1500px] px-[2rem] lg:px-[4rem] mx-auto'>
          <Hero/>
        </section>

        <section className='w-full min-h-[100vh] overflow-clip hidden md1:block max-w-[1500px] px-[2rem] lg:px-[4rem] mx-auto 
        '>
          <SectionTwo/>
        </section>

        <section className='w-full min-h-[100vh] overflow-clip md1:hidden mx-auto'>
          <SectionTwo_2/>
          {/* <Page/> */}
        </section>

        <section className='w-full h-[150vh] max-w-[1500px] px-[2rem] lg:px-[4rem] mx-auto'>
          <SectionThree/>
        </section>

        <section className='mb-[5rem] lg:mb-0 w-full min-h-[100vh] max-w-[1500px] px-[0rem] lg:px-[4rem] mx-auto
        '>
          <SectionFour/>
        </section>
        
        <section className='w-full min-h-[100vh]  px-[2rem] lg:px-[4rem] mx-auto flex items-center justify-center
        relative' id="section5_container">
          {/* <SectionFive/> */}
          {/* <SectionFivePhone/> */}
          <SectionFive_2/>
        </section>

        <section className='w-full min-h-[70vh] px-[2rem] lg:px-[4rem] mx-auto
        flex items-center justify-center
        relative py-[10rem]' id="section6_container">
          <SectionSix/>
        </section>


      </div>


      
    </main>

  )
}

export default page
