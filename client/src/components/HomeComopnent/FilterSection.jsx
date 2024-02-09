import React from 'react'
import Icon1 from '../../assets/Icon 1.png'
import Icon2 from '../../assets/Icon 2.png'
import Icon3 from '../../assets/Icon 3.png'
import Icon4 from '../../assets/Icon 4.png'
import Icon5 from '../../assets/Icon 5.png'

function FilterSection() {
  return (
    <div className='w-1/4 h-fit p-4 bg-gray-500 rounded-lg'>
        <h1 className='font-bold text-lg text-white'>Filter Posts</h1>
        <div className='flex flex-col gap-2 my-4'>
          <div className='flex gap-2 hover:bg-gray-400 rounded-md cursor-pointer'>
            <img height={'35px'} width={"45px"} src={Icon1} alt='image not found'/>
            <div>
              <h2 className='text-white font-medium text-base'>#development</h2>
              <p className='text-gray-300 text-sm'>Trending</p>
            </div>
          </div>

          <div className='flex gap-2 hover:bg-gray-400 rounded-md cursor-pointer'>
            <img height={'35px'} width={"45px"} src={Icon2} alt='image not found'/>
            <div>
              <h2 className='text-white font-medium text-base'>#design</h2>
              <p className='text-gray-300 text-sm'>Trending</p>
            </div>
          </div>

          <div className='flex gap-2 hover:bg-gray-400 rounded-md cursor-pointer'>
            <img height={'35px'} width={"45px"} src={Icon3} alt='image not found'/>
            <div>
              <h2 className='text-white font-medium text-base'>#innovation</h2>
              <p className='text-gray-300 text-sm'>Trending</p>
            </div>
          </div>

          <div className='flex gap-2 hover:bg-gray-400 rounded-md cursor-pointer'>
            <img height={'35px'} width={"45px"} src={Icon4} alt='image not found'/>
            <div>
              <h2 className='text-white font-medium text-base'>#tutorial</h2>
              <p className='text-gray-300 text-sm'>Trending</p>
            </div>
          </div>

          <div className='flex gap-2 hover:bg-gray-400 rounded-md cursor-pointer'>
            <img height={'35px'} width={"45px"} src={Icon5} alt='image not found'/>
            <div>
              <h2 className='text-white font-medium text-base'>#busieness</h2>
              <p className='text-gray-300 text-sm'>Trending</p>
            </div>
          </div>
          
        </div>
      </div>
  )
}

export default FilterSection
