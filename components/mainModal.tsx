"use client"
import React, { useState } from 'react'

import {goals} from "@/constants"



const MainModal = () => {

    const [active, setActive] = useState(false);

    const changeState = () => {
        setActive((prev)=> !prev);
    }

  return (
    (active ? (
        <div className='absolute w-full h-full flex items-center justify-center'>
        <div className='w-[90%] h-[90%] border rounded-lg flex items-center justify-center relative'>
          <div className=''>
  
              <div 
              onClick={changeState}
              className='absolute right-[1rem] top-[1rem] cursor-pointer h-6 w-6 bg-blue-500 rounded-lg
              text-center'>x</div>
                                  
              <div className=''>
                  <span className="font-semibold">current goals:</span> {goals[0].title}
              </div>
  
              <ul className="">
                  {
                  goals.map((goal, index)=> (
  
                      <li key={goal.title+" "+index} className=''>
  
                          <details open={goal.progress !== "Done" && true}>
  
                              <summary className={`${goal.progress === "Done" && "opacity-60"}`}>
                                  {/* { goal.progress !== "Done" ? ( <span>&raquo;</span> ) : ( <span>&#10003;</span> ) } */}
                                  {goal.title}
                              </summary>
  
                              <ul className="list-disc mb-2">
                                  {
                                  // set a text color depending on the goal progress value
                                  goal.steps.length > 0 && (
                                      goal.steps.map((step, index)=> (
                                          <li 
                                          key={goal.title+" "+index+" "+step}
                                          className={` ml-8 font-extralight
                                          ${step.progress === "Done" && "text-teal-500"}
                                          ${step.progress === "Not Yet" && "text-white opacity-90"}
                                          ${step.progress === "In Progress" && "text-amber-500"}
                                          `}>
                                              {step.title+" ["+step.progress+"]"}
                                          </li>
                                      ))
                                  )
                                  }
                              </ul>
                          </details>
                      </li>
                  ))
                  }
  
  
                  <li className="mt-2 w-full h-[1rem] flex flex-row justify-center items-center gap-4">
                      <span className="h-2 w-2 rounded-full bg-white"></span>
                      <span className="h-2 w-2 rounded-full bg-white"></span>
                      <span className="h-2 w-2 rounded-full bg-white"></span>
                  </li>
              </ul>
  
              </div>
        </div>
      </div>
    ) : (
    ""
    ))

  )
}

export default MainModal
