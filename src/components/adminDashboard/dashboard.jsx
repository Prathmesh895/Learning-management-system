import React from 'react'
import { BiCommand } from "react-icons/bi";
function Dashboard() {
  return (
      <div className=' lg:flex lg:flex-col lg:justify-between mx-2'>
          <div className='bg-white lg:h-24 rounded flex   lg:items-center text-gray-500'>
              <h1 className='m-5 text-lg font-semibold flex items-center '>
                  <BiCommand className='mr-2 w-6 h-6' />Dashboard
              </h1>
          </div>
          <div className='bg-white lg:h-96 my-4 rounded  '>2</div>
          <div className='bg-white lg:h-44 my-4 rounded divide-x flex divide-slate-300'>
              <div className='w-1/4 rounded'>1</div>
              <div className='w-1/4 rounded'>2</div>
              <div className='w-1/4 rounded'>3</div>
              <div className='w-1/4 rounded'>4</div>
          </div>
          <div className='bg-white lg:h-96 lg:my-4 rounded'>4</div>
      </div>
  )
}

export default Dashboard