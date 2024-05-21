//show course all details 
"use client"
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsStarFill } from "react-icons/bs";
import { CiWarning } from "react-icons/ci";
import { BsStar } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md"
import { FaClosedCaptioning, FaRegRectangleList } from "react-icons/fa6";
import PNG from '/public/course-logo.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

export default function Courselist({ params}) {
  const searchParams = useSearchParams()
  console.log(" Price:",searchParams.get("Price"));
  console.log(" Level:",searchParams.get("Level"));
  let Price =searchParams.get("Price");
  let NewPrice;
  if (Price == "Paid"){
    NewPrice = Price =1
  }
  let isfree;
  if (Price == "Free"){
      isfree=Price='free';
}
  console.log("Opricwe",Price);
  const Level =searchParams.get("Level");
  const router = useRouter();
  const [CourseData, setCourseData] = useState([]);
  const Category = params.id;
  console.log(Category)
  const decodedCategory = Category ? decodeURIComponent(Category) : '';

  console.log("Category", decodedCategory);


  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await fetch("/api/coursesBycategory", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ decodedCategory,NewPrice,isfree})
      });
      const data = await res.json();
      setCourseData(data.DecodedCategory);
      const co = data.DecodedCategory;
      console.log("CourseData", CourseData);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  const handleClick = (_id) => {
    router.push(`/course1/${_id}`); // Navigate to dynamic route /details/[id]
  };
  return (
    <>
      {CourseData.length > 0 ? 
      (
        CourseData.map((course, index) => (
          <div onClick={() => handleClick(course._id)} className='lg:m-5 mx-4 my-5 flex lg:flex-row flex-col bg-white rounded-xl border shadow-lg hover:text-violet-700' key={index}>
            <div className='rounded-xl relative lg:w-[30%]'>
              {/* <div className='absolute lg:right-4 right-0 bottom-3 bg-pink-200 text-pink-600 rounded-l border lg:py-0.5 py-1.5 px-3 lg:h-7 h-9 lg:w-[50%] w-[40%]'>{course.Level}</div> */}
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
        )))
        : 
          (
            <div className='flex justify-center flex-col items-center lg:my-44 '>
              <CiWarning size={100} />
              <p className='text-2xl text-gray-500 '>Course not found</p>
              <p className='text-gray-500 '>Sorry, try using more similar words in your search. </p>
            </div>
          )
          }
    </>
  );
}
