import React, { useState } from 'react'
import FilterSection from '../components/HomeComopnent/FilterSection'
import FeedSection from '../components/HomeComopnent/FeedSection'

function Feeds() {
  
  return (
    <div className='flex gap-6'>
      <FilterSection/>
      <FeedSection/>
    </div>
  )
}

export default Feeds
