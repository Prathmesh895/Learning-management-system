'use client'
import PNG from '/public/course-logo.png'
import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { BsStarFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md"
import { FaClosedCaptioning, FaRegRectangleList } from "react-icons/fa6";


function Courses() {
    const router = useRouter();
    const [courseData, setCourseData] = useState([]);
    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const res = await fetch('/api/add_courses', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            const data = await res.json();
            setCourseData(data.courses);
            console.log(data.courses);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };
    const handleClick = (_id) => {
        router.push(`/course1/${_id}`); // Navigate to dynamic route /details/[id]
    };
    return (
        <>
            {courseData.map((course, index) => (
                <div onClick={() => handleClick(course._id)} className='lg:m-5 mx-4 my-5 flex lg:flex-row flex-col bg-white rounded-xl border shadow-lg hover:text-violet-700' key={index}>
                    <div className='rounded-xl relative lg:w-[30%]'>
                        <div className='absolute lg:right-4 right-0 bottom-3 bg-pink-200 text-pink-600 rounded-l border lg:py-0.5 py-1.5 px-3 lg:h-7 h-9 lg:w-[50%] w-[40%]'>{course.Level}</div>
                        <Image src={PNG} alt='course logo' className=' lg:w-52 lg:h-44 lg:rounded-l-xl rounded-t-xl lg:rounded-tr-none' />
                    </div>
                    {/* secomnd div info  */}
                    <div className='flex flex-col   p-3 justify-between lg:w-[73%]'>
                        <div className='px-2'>
                            <h1 className='text-md font-semibold mt-1 '>{course.title}</h1>
                            {/* review an caption  */}
                            <div className='flex items-center space-x-1 text-gray-500 text-xs mt-1'>
                                <p>0</p>
                                <BsStarFill className='text-yellow-400 ' />
                                <p>(0 Reviews)</p>
                                <p><FaClosedCaptioning /></p>
                                <p>English</p>
                            </div>
                            <p className='text-gray-500 overflow-hidden line-clamp-2 text-xs leading-6 lg:mb-0 mb-5 mt-3 '>{course.description}</p>
                        </div>
                        {/* bottom part of card  */}
                        <div className='flex justify-between lg:pr-5 px-2 border-t'>
                            <div className='mt-2'>
                                {course.price === 0 ? (
                                    <p className='text-green-500 font-semibold'>{course.isfree}</p>
                                ) : (
                                    <p className=' font-semibold'>₹ {course.price}</p>
                                )}
                            </div>
                            <div className='mt-2 flex items-center space-x-1 text-gray-500 text-sm'>
                                <FaRegRectangleList className='text-violet-600 mr-1' /><span>Lessons</span>
                                <MdOutlineWatchLater className='text-violet-600 mr-1' />
                                <p>Hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Courses
