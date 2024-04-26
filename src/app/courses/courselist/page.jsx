"use client"
import React, { useState, useEffect } from 'react';

import PNG from '/public/course-logo.png'
import Image from 'next/image'

export default function Page() {
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/courses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      setCourseData(data.courses);
      console.log(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <>
      {courseData.map((course, index) => (
        <div className='m-5 flex bg-white rounded-xl'>
          <div className='rounded-xl relative w-[30%]'>
            <div className='absolute right-0 bottom-3 bg-pink-200 text-pink-600 rounded-l border p-1 h-8 w-[50%]'>hi</div>
            <Image src={PNG} alt='course logo' className=' lg:w-56 lg:h-48 lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none' />
          </div>

          <div className='flex flex-col  p-3 justify-between w-[70%]'>
            <div>
              <h1 className='text-xl font-semibold'>{course.title}</h1>
              <p className='text-gray-500'>{course.description}</p>
            </div>
            
            <div className='flex justify-between pr-5 border-t'>
              <div className='mt-2'>
                {/* <span className='text-green-500 font-semibold'>Free</span> 
                or <span className='font-semibold'>{course.price}</span> */}
                {course.price === 0 ? (
              <p className='text-green-500 font-semibold'>{course.isfree}</p>
            ) : (
              <p className=' font-semibold'>₹{course.price}</p>
            )}
              </div>
              <div className='mt-2'>Lessons <span>Hrs</span></div>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}



