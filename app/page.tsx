
import Robot from '@/components/Homepage/3dComponents/Robot'
import Hero from '@/components/Homepage/HeroSection/Hero'
import React from 'react'
import VaporWave from '@/components/Homepage/HeroSection/VaporWave'
import SectionTwo from '@/components/Homepage/SectionTwo/SectionTwo'

const page = () => {



  return (

    <main className='z-[0]'>


      <div className='w-full h-full absolute top-0 left-0 z-[-2]  overflow-hidden vaporWave'
      id="#vaporWave">
          <VaporWave/>
      </div>

      <div className='px-[2rem] lg:px-[4rem] max-w-[1500px] mx-auto relative'>
        {/* <Robot/> */}

        <section className='w-full h-[100vh]'>
          <Hero/>
        </section>

        <section className='w-full h-[100vh]'>
          <SectionTwo/>
        </section>

      </div>
      
    </main>

  )
}

export default page
