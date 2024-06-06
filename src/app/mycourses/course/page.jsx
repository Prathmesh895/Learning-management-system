"use client"
import React from 'react'
import Image from 'next/image'
import PNG from '/public/course-logo.png'
import BG from '/public/course-breadcramb.png'
import { useAppSelector } from '@/Redux/store/hooks'


export default function page() {

  const Course = useAppSelector((state) => state.mycart.courses) || []

  return (
    <>
      <section className=' bg-white  p-5 min-h-96'>
        <div className=''>
          <h1 className='text-3xl text-gray-500 font-semibold'>Your cart Courses</h1>
          <div className='border-b lg:mt-10'>
            <h1>Courses</h1>
          </div>
          {/* fetch course Data  */}
          <div className='border p-5'>
            {
              Course.map((course) => (
                <>
                  <div key={course._id} className='flex p-5'>
                    <Image src={PNG} alt='course logo' width={300} height={300} />
                    <div className='px-5'>
                      <div className='text-gray-500 text-lg font-semibold'>{course.title}</div>
                      <div className='flex justify-between'>
                        <h1>Lectures</h1>
                        <h1>Quizzes</h1>
                        <h1>Hours</h1>
                      </div>
                      <div className='bg-green-100 border border-green-400 p-2'>
                        Upcoming live class <span className='font-semibold'>08:00 PM,Date</span>
                      </div>
                      <div>{course.expiry}</div>
                      <div>{course.CreatedBy}</div>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
          
        </div>
      </section>


    </>
  )
}
