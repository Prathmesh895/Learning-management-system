"use client"
import React from 'react'
import Image from 'next/image'
import PNG from '/public/course-logo.png'
import BG from '/public/course-breadcramb.png'
import { useAppSelector } from '@/Redux/store/hooks'
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlayCircle } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
export default function page() {

  const Course = useAppSelector((state) => state.mycart.courses) || []

  return (
    <>
      <section className=' bg-white  p-5 min-h-96'>
        <div className=''>
          <h1 className='text-3xl text-gray-500 font-semibold'>Courses</h1>
          <div className='border-b lg:mt-10'>
            <h1>Courses</h1>
          </div>
          {/* fetch course Data  */}
          <div className=' p-5'>
            {
              Course.map((course) => (
                <>
                  <div key={course._id} className='flex w-full my-5'>
                    <div className='min-h-44 '>
                      <Image src={PNG} alt='course logo' className='rounded' width={300} height={300} />
                    </div>
                    <div className='px-5  space-y-3'>
                      <div className='flex items-center text-gray-500 text-md font-semibold overflow-hidden'>
                        <h1>{course.title}</h1>
                        <div><BsThreeDotsVertical size={20} /></div>
                      </div>
                      <div className='flex justify-between text-gray-500 text-sm'>
                        <h1 className='flex items-center'><FaPlayCircle className='mr-1' /> Lectures</h1>
                        <h1 className='flex items-center'><FaCircleQuestion className='mr-1' /> Quizzes</h1>
                        <h1 className='flex items-center' ><MdWatchLater className='mr-1' />Hours</h1>
                      </div>
                      <div className='bg-green-100 border border-green-400 p-2 ' >
                        Upcoming live class <span className='font-semibold '>08:00 PM,Date</span>
                      </div>
                      <div className='flex items-center justify-between'>
                        <div>
                          <h1 className='text-gray-500'>{course.CreatedBy}</h1>
                          <h1>Expiratin <span className='text-gray-500 text-sm font-semibold'>{course.expiry}</span></h1>
                        </div>
                        <div className='flex items-center cursor-pointer bg-violet-600 rounded text-white py-1 px-9'> <MdWatchLater className='mr-1' /> Start now</div>
                      </div>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
          {/* <div key={course._id} className='flex w-full'>
            <div className='min-h-44 '>
              <Image src={PNG} alt='course logo' className='rounded' width={300} height={300} />
            </div>

            <div className='px-5  space-y-3'>
              <div className='flex items-center text-gray-500 text-md font-semibold overflow-hidden'>
                <h1>{course.title}</h1>
                <div><BsThreeDotsVertical size={20} /></div>
              </div>

              <div className='flex justify-between text-gray-500 text-sm'>
                <h1 className='flex items-center'><FaPlayCircle className='mr-1' /> Lectures</h1>
                <h1 className='flex items-center'><FaCircleQuestion className='mr-1' /> Quizzes</h1>
                <h1 className='flex items-center' ><MdWatchLater className='mr-1' />Hours</h1>
              </div>
              <div className='bg-green-100 border border-green-400 p-2 ' >
                Upcoming live class <span className='font-semibold '>08:00 PM,Date</span>
              </div>
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='text-gray-500'>{course.CreatedBy}</h1>
                  <h1>Expiratin <span className='text-gray-500 text-sm font-semibold'>{course.expiry}</span></h1>
                </div>
                <div className='bg-violet-600 rounded text-white py-1 px-9'>Start now</div>
              </div>
            </div>
          </div> */}
        </div>
      </section>


    </>
  )
}
