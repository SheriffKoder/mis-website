
import Hero from '@/components/HomepageSections/Hero'
import React from 'react'
import RobotScene from "../components/3dScenes/RobotScene";

const page = () => {



  return (

    <main className=''>

      <div className='fixed w-full'
      id="fixed">

        <div className='absolute top-0 left-0 w-full h-[100vh] flex items-center justify-center'>
          <div className="w-[30vw] h-[30vw]">
              <RobotScene/>
          </div>
        </div>

        {/* <nav className="relative top-0 left-0 w-full h-[50px] bg-[#3535355d]"></nav> */}

      </div>





      <section className='w-full h-[100vh] border-b border-red-300
      flex items-center justify-center'>
        <Hero/>
      </section>

      <section className='w-full h-[100vh] border-b border-blue-300'>
        Section 2
      </section>
    </main>

  )
}

export default page
