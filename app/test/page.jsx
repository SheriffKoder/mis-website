import React from 'react'
import NumberCounter from './NumberCounter'
const page = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-white text-black'>
      <h1>Number Counter Animation</h1>
      <NumberCounter targetNumber={10} />
    </div>
  )
}

export default page
