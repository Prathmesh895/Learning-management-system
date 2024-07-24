"use client"
import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useAppSelector } from '@/Redux/store/hooks';
import { BsStarFill } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md"
import { FaClosedCaptioning, FaRegRectangleList } from "react-icons/fa6";
import PNG from '/public/course-logo.png'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation';

export default function Page() {
    const [AllCourse] = useAppSelector((state) => state.fetchCourse.fetchcourses) || [[]];
    const [CourseData, setCourseData] = useState([]);
    const router = useRouter();
    const searchParams = useSearchParams();
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory');
    const price = searchParams.get('price');
    const Level = searchParams.get('level');
    console.log(category, price, Level, subcategory)

    const handleClick = (_id) => {
        router.push(`/course1/${_id}`); // Navigate to dynamic route /details/[id]
    };
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: true, // Whether animation should happen only once - while scrolling down
        });
      }, []);

    useEffect(() => {
        const category = searchParams.get('category');
        const subcategory = searchParams.get('subcategory');
        const price = searchParams.get('price');
        const Level = searchParams.get('level');

        if (AllCourse && Array.isArray(AllCourse)) {
            let filterCourse = AllCourse;

            // Apply subcategory filter
            if (subcategory) {
                filterCourse = filterCourse.filter(course => course.category === subcategory);
            }
            // Apply category filter
            if (category && category !== 'All Categories') {
                filterCourse = filterCourse.filter(course => course.category === category);
            }
            // Apply price filter
            if (price) {
                if (price === 'Paid') {
                    filterCourse = filterCourse.filter(course => course.price > 0);
                } else if (price === 'Free') {
                    filterCourse = filterCourse.filter(course => course.price === 0);
                }
            }
            // Apply level filter
            if (Level === "All") {
                filterCourse = filterCourse.filter(course => course.Level);
            } else if (Level) {
                filterCourse = filterCourse.filter(course => course.Level === Level);
            }
            setCourseData(filterCourse);
        }
    }, [AllCourse, subcategory, category, price, Level, searchParams]);

    console.log(CourseData)

    return (
        <>
            {
                CourseData.map((course, index) => (
                    <div onClick={() => handleClick(course._id)} className=' cursor-pointer lg:m-5 mx-4 my-5 flex lg:flex-row flex-col bg-white rounded-xl border shadow-lg hover:text-violet-700' key={index} data-aos="fade-up">
                        <div className='rounded-xl relative lg:w-[30%]'>
                            <div className="pointer absolute lg:right-6 right-0 bottom-3 bg-pink-100 text-pink-600 rounded-l border lg:py-2 py-1.5 px-3 lg:h-8 h-9 lg:w-[50%] w-[40%]">
                                <div className="flex px-3 justify-center text-xs items-center">
                                    {course.Level}
                                </div>
                            </div>
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
            {
                CourseData.length === 0 &&
                <div className='flex justify-center flex-col items-center min-h-96 lg:m-20 bg-white'>
                    <img src="/Course-not_found.svg" className='w-56' alt="Course-not_found" />
                    <p className='text-2xl text-red-500 font-serif animate-bounce mt-5 '>Course Not found</p>
                    <p className='text-gray-500 text-center'>Sorry, try using more similar words in your search. </p>
                </div>
            }
        </>
    );
}

