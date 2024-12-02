
import Robot from '@/components/3dComponents/Robot'
import Hero from '@/components/HomepageSections/Hero'
import React from 'react'
import VaporWave from '@/components/HomepageSections/VaporWave'

const page = () => {



  return (

    <main className='z-[0]'>


      <div className='w-full h-full absolute top-0 left-0 z-[-2]  overflow-hidden vaporWave'
      id="#vaporWave">
          <VaporWave/>
      </div>

      <div className='px-[2rem] lg:px-[4rem] max-w-[1500px] mx-auto relative'>
        <Robot/>

        <section className='w-full h-[100vh]'>
          <Hero/>
        </section>

        <section className='w-full h-[100vh] border-b border-blue-300'>
          Section 2
        </section>

      </div>
      
    </main>

  )
}

export default page
