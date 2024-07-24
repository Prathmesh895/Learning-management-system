// Show the details of course when click on course then option add to card 
"use client"
import React from 'react'
import "@/app/globals.css";
import Image from 'next/image'
import { useEffect, useState } from 'react'
import BG from '/public/course-breadcramb.png'
import { MdOutlineWatchLater } from "react-icons/md"
import { BsStar } from "react-icons/bs";
import { CgCalendarDates } from "react-icons/cg";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaLanguage, FaRegRectangleList, FaRegBookmark } from "react-icons/fa6";
import PNG from '/public/course-logo.png'
import { FaRegUser } from "react-icons/fa";
import { RiFileListLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { TbMessage, TbFlag3, TbDiscount2 } from "react-icons/tb";
import { PiCertificateLight } from "react-icons/pi";
import User from '/public/usericon.jpg'
import { useAppDispatch, useAppSelector } from '@/Redux/store/hooks';
import { add } from '@/Redux/store/feature/cart/cartslice';
import { useRouter } from 'next/navigation';

export default function page({ params }) {
  const [mesaage, setMessage] = useState('');
  const id = params.id;
  console.log("id", id)
  // console.log(Id);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const mycart = useAppSelector((state) => state.mycart.courses);

  const isProductInCart = mycart.some((courses) => courses._id === id);

  const handleOnadd = (course) => {
    if (!isProductInCart) {
      dispatch(add(course));
      setMessage("Enrolled Successfully");
      setInterval(() => {
        setMessage('');
        router.push('/mycourses')
      }, 4000)
    } else {
      // alert('You already Enrolled in this course');
      setMessage("You already Enrolled in this course !");
      setInterval(() => {
        setMessage('')
      }, 4000)
    }
  };

  const [isopen, setIsopen] = useState(true);
  const [isCurriculum, setCurriculum] = useState('');
  const [isInstructor, setInstructor] = useState('');
  const [isReviews, setIsreviews] = useState('');
  const [CourseData, setCourseData] = useState([]);

  const handleOnOpen = () => {
    setIsopen(true);
    setCurriculum(false);
    setInstructor(false);
    setIsreviews(false);

  }
  const handleisCurriculum = () => {
    setIsopen(false);
    setCurriculum(true);
    setInstructor(false);
    setIsreviews(false);
  }
  const handleisInstructor = () => {
    setIsopen(false);
    setCurriculum(false);
    setInstructor(true);
    setIsreviews(false);
  }
  const handleisReviews = () => {
    setIsopen(false);
    setCurriculum(false);
    setInstructor(false);
    setIsreviews(true);
  }

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
        body: JSON.stringify({ id })
      });
      const data = await res.json();
      setCourseData([data.CourseById]);
      // console.log(Course);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <>
      {
        mesaage &&
        <h1 className='flex items-center justify-center font-semibold text-xl text-gray-500 left-1/3 top-1/3 absolute bg-white shadow-2xl rounded w-96 min-h-52'>{mesaage}</h1>
      }
      {CourseData.map((course, index) => (
        <main className='lg:flex' key={index}>
          {/* bg image blue  */}
          <section className=' text-white lg:mb-5 mb-10 lg:w-[60%]'>
            <div className='absolute -z-10'>
              <Image src={BG} alt="coursebg" className='relative lg:h-96 h-screen' />
            </div>
            <div className='lg:ml-44 items-center lg:p-0 p-5' >
              <h1 className='text-4xl font-bold my-10'>{course.title}</h1> {/*course title*/}  {/*  */}
              <p className='text-lg line-clamp-4 overflow-hidden'>{course.shortdes}</p> {/* course description */}
              {/* sub desc below description  */}
              <div className='flex flex-wrap items-center justify-between mr-5 my-5'>
                <div>
                  <h1 ><span className='text-sm'>Created by</span>  <span>{course.CreatedBy}</span></h1>
                </div>
                <p className='flex items-center'><MdOutlineWatchLater className='mr-1' />Hours</p>
                <div className='flex items-center'><FaRegUser /> 0 Enrolled</div>
                <div className='flex items-center'><BsStar />(0 Reviews)</div>
              </div>
              {/* sub desc below description  */}
              <div className='flex flex-wrap items-center lg:space-x-5'>
                <h1 className='flex items-center '><FaLanguage className='mr-1' size={20} /> {course.langauge}</h1>
                <h1 className='flex items-center'><CgCalendarDates />
                  <span className='text-sm px-1'>Last updated</span>  {formatDate(course.updatedAt)}
                </h1>
              </div>
            </div>
            <div className='lg:ml-44 m-3 text-black bg-white rounded-lg p-6'>
              <div className='flex justify-between flex-wrap font-semibold cursor-pointer border-b   pb-2'>
                <div onClick={handleOnOpen} className='hover:text-violet-500 flex items-center space-x-1'>
                  <FaRegBookmark /><p>Overview</p>
                </div>
                <div onClick={handleisCurriculum} className='hover:text-violet-500 flex items-center space-x-1'>
                  <RiFileListLine /><p>Curriculum</p>
                </div>
                <div onClick={handleisInstructor} className='hover:text-violet-500 flex items-center space-x-1 lg:mt-0 mt-3'>
                  <LuUser2 /><p>Instructor</p>
                </div>
                <div onClick={handleisReviews} className='hover:text-violet-500 flex items-center space-x-1 lg:mt-0 mt-3'>
                  <TbMessage /><p>Reviews</p>
                </div>
              </div>
              <section >
                {
                  isopen &&
                  <section className='mt-5' >
                    <h1 className='text-xl font-semibold py-5'>Course description</h1>
                    <p className='text-gray-500 '>{course.description}</p>
                    <p className='text-xl font-semibold py-5'>What will i learn?</p>
                    <p className='text-xl font-semibold py-5'>Requirements</p>
                  </section>
                }
              </section>
              <section >
                {
                  isCurriculum &&
                  <section className='mt-5'>
                    <h1 className='text-xl font-semibold py-5'>Course description</h1>
                    <p className='text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptates consequatur dolores ipsa ab provident, amet iste maxime fugiat a.</p>
                    <p className='text-xl font-semibold py-5'>What will i learn?</p>
                    <p className='text-xl font-semibold py-5'>Requirements</p>
                  </section>
                }
              </section>
              <section >
                {
                  isInstructor &&
                  <section className='lg:m-5 m-2 flex'>
                    <div>
                      <Image src={User} alt='user icon' width={180} height={200} />
                    </div>
                    <div>
                      <h1 className='text-xl font-semibold'>{course.CreatedBy}</h1>
                      <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
                      <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, excepturi?</p>
                    </div>
                  </section>
                }
              </section>
              <section >
                {
                  isReviews &&
                  <section className='mt-5 flex'>
                    <div>
                      <h1 className='text-xl font-semibold'>John Doe</h1>
                      <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
                      <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, excepturi?</p>
                    </div>
                  </section>
                }
              </section>


            </div>
          </section>
          {/* secction 2  card section*/}
          <section className='font-semibold lg:w-[25%] lg:mr-44'>
            <div className=' mx-4 my-5 flex p-2 flex-col bg-white rounded-xl border shadow-lg space-y-5' >
              <div className='rounded-xl relative'>
                <Image src={PNG} alt='course logo' className=' ' />
              </div>
              <div className='px-5 space-y-5'>
                <div className='flex justify-between'>{/*show price of free  */}
                  <p>{course.price === 0 ? (
                    <p className='text-green-500 font-semibold'>{course.isfree}</p>
                  ) : (
                    <p className=' font-semibold'>₹ {course.price}</p>
                  )}</p>
                  <p><IoGitCompareOutline size={25} /></p>
                </div>
                <div className='flex justify-between  border-b pb-5'>{/*Show lessons  */}
                  <div className='flex justify-between items-center'><FaRegRectangleList className='text-violet-600 mr-1' />
                    <span>Lessons</span>
                  </div>
                  <p>0</p>
                </div>
                {/* div 3  of card*/}
                <div className='flex justify-between  border-b pb-5'>
                  <p className='flex items-center '><TbDiscount2 className='text-green-500 mr-1' size={20} />Skill level</p>
                  <p>{course.Level}</p>
                </div>
                {/* div 4 of card */}
                <div className='flex justify-between  border-b pb-5'>
                  <p className='flex items-center '><TbFlag3 className='text-red-500 mr-1' size={20} />Expiry period</p>
                  <p>{course.expiry}</p>
                </div>
                {/* div 5  of card*/}
                <div className='flex justify-between  border-b pb-5'>{/* certificate is provided or not */}
                  <p className='flex items-center '><PiCertificateLight className='text-yellow-500 mr-1' size={20} />Certificate</p>
                  <p>{course.Iscertificate}</p>
                </div>
                <div className=''>
                  <button onClick={() => handleOnadd(course)} className='border text-violet-700 bg-violet-100 border-violet-500 w-full p-2 rounded-md hover:bg-violet-500 hover:text-white'>Enroll now</button>
                </div>
              </div>
            </div>
          </section>
        </main>
      ))}

    </>
  )
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
  const day = date.getDate();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${dayOfWeek}, ${day}-${month}-${year}`;
}