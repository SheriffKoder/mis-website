import React from 'react'

import InfiniteCards from './InfiniteCards'
import { sectionFive_cardsContent } from '@/constants'
const page = () => {
  return (
    <div className='relative w-full border border-red-500 flex'>
        <InfiniteCards contents={sectionFive_cardsContent}/>

    </div>
  )
}

export default page