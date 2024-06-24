import React from 'react'
import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('@/components/adminDashboard/chart'), { ssr: false });
const PieChart = dynamic(() => import('@/components/adminDashboard/PieChart'), { ssr: false });
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import { BiCommand } from "react-icons/bi";
import { MdPlayLesson } from "react-icons/md";
import { ImTree } from "react-icons/im";
import { TbUsers, TbStack2 } from "react-icons/tb";



function Dashboard() {
  return (
    <div className=' lg:flex lg:flex-col lg:justify-between mx-2'>
      <div className='bg-white lg:h-24 rounded flex   lg:items-center text-gray-500 border shadow'>
        <h1 className='m-5 text-lg font-semibold flex items-center '>
          <BiCommand className='mr-2 w-6 h-6' />Dashboard
        </h1>
      </div>
      <div className='bg-white lg:h-96 my-4 p-4 rounded  border shadow'>
        <h1 className='text-gray-500 text-sm font-semibold'>ADMIN REVENUE THIS YEAR</h1>
        <Chart className='text-sm text-gray-300 font-normal' />
      </div>
      <section className='bg-white my-4 flex flex-wrap divide-x-2 border shadow'>
        <div className='lg:w-[25%] w-[50%] flex-wrap flex flex-col items-center justify-center py-6 space-y-3 cursor-pointer'>
          <TbStack2 className='text-gray-400' size={30} />
          <p className='font-bold text-xl'>0</p>
          <h1>Number of courses</h1>
        </div>
        <div className='lg:w-[25%] w-[50%] flex flex-col items-center justify-center py-6 space-y-3 cursor-pointer'>
          <MdPlayLesson size={25} className='text-gray-500' />
          <p className='font-bold text-xl'>0</p>
          <h1>Number of lessons</h1>
        </div>
        <div className='lg:w-[25%] w-[33%] flex flex-col items-center justify-center py-6 space-y-3 cursor-pointer'>
          <ImTree size={25} className='text-gray-500' />
          <p className='font-bold text-xl'>0</p>
          <h1>Number of Enrollments</h1>
        </div>
        <div className='lg:w-[25%] w-[33%] flex flex-col items-center justify-center py-6 space-y-3 cursor-pointer'>
          < TbUsers size={25} className='text-gray-500' />
          <p className='font-bold text-xl'>0</p>
          <h1>Number of students</h1>
        </div>

      </section>
      <div className='flex space-x-5    lg:my-4 rounded '>
        <div className='lg:w-[33%]  p-5 mr-4 bg-white text-sm text-gray-500  border shadow'>
          <div className='font-semibold'>COURSE OVERVIEW</div>
          <div className='pl-3'><PieChart /></div>
          <div className='flex justify-between'>
            <div className='flex flex-col space-y-3 items-center'>
              <IoMdTrendingUp className='text-green-400' size={25}/>
              <p className='text-2xl'>16</p>
              <p className='text-gray-400'> Active courses</p>
            </div>
            <div className='flex flex-col space-y-3 items-center'>
              <IoMdTrendingDown className='text-orange-400' size={25}/>
              <p className='text-2xl'>1</p>
              <p className='text-gray-400'>Pending courses</p>
              
            </div>
          </div>
        </div>
        <div className='lg:w-[66%] bg-white border shadow'>3</div>
      </div>
    </div>
  )
}

export default Dashboard