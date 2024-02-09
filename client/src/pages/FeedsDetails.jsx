import React from 'react'
import fd from '../assets/fd.png'
function FeedsDetails() {
  return (
    <div className='flex flex-col gap-4 mx-52'>
      <h1 className='font-extrabold text-2xl text-gray-100'>The Impact of Technology on the Workplace: How Technology is Changing</h1>
      <div className='flex gap-8'>
        <p className='text-gray-500 font-semibold'>Tracey Wilson</p>
        <p className='text-gray-500 font-semibold'>August 20, 2022</p>
      </div>
      <img src={fd} alt="" />
      <p className='font-semibold text-gray-400'>Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.</p>
      <div className='flex items-center gap-2'>
        <button className='bg-red-500 rounded-md text-white font-semibold px-4 py-1'>Like</button>
        <p className='font-semibold text-gray-400'>100 k</p>
        <button className='bg-green-800 rounded-md text-white font-semibold px-4 py-1'>Edit</button>
        <button className='bg-red-800 rounded-md text-white font-semibold px-4 py-1'>Delete</button>
      </div>
      <div>
        <h1 className='font-semibold text-lg text-gray-800'>Comments</h1>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default FeedsDetails
