"use client"
import React, { useEffect, useState } from 'react';
import { BiCommand } from "react-icons/bi";
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { FaPlusCircle, FaRegStar,FaMinusCircle } from "react-icons/fa";
import { GrLink, GrUnlink } from "react-icons/gr";
import { BsTags } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

function Addcorse() {
  const { data: session } = useSession();
  const [courseData, setCourseData] = useState([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [error, setError] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOnShowEditCourse = (course) => {
    setSelectedCourse(course);

  }
  const handleOnHide =()=>{
    setSelectedCourse(null);
  }

  useEffect(() => {
    handleOnsubmit();
  }, []);

  const handleOnsubmit = async () => {
    setError('');
    try {
      const res = await fetch("/api/add_courses", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setCourseData(data.courses);
      setCourses(data.courses);
      setTotalCourses(data.courses.length);
    } catch (error) {
      setError("Unable to add");
      console.log("Unable to add");
    }
  }

  const totalFreeCourses = courseData.filter(course => course.isfree === 'free').length;
  const totalPaidCourses = courseData.filter(course => course.price > 0).length;

  const getCorsebyType = (type) => {
    let filteredCourses = [];
    switch (type) {
      case "free":
        filteredCourses = courseData.filter(course => course.isfree === "free");
        break;
      case "paid":
        filteredCourses = courseData.filter(course => course.price > 0);
        break;
      case "Active courses":
        filteredCourses = courseData;
        break;
      case "Pending courses":
        filteredCourses = courseData.filter(course => course.Pending_courses === 'Pending courses');
        break;
      case "Upcoming courses":
        filteredCourses = courseData.filter(course => course.Upcoming_courses === 'Upcoming courses');
        break;
      default:
        filteredCourses = [];
    }
    setCourses(filteredCourses);
  }

  return (
    <>
      <main className='lg:flex w-full text-gray-500'>
        <section className='w-full'>
          <div className='flex flex-col justify-between'>
            <div className='bg-white lg:h-24 mb-4 rounded flex justify-between items-center text-gray-500'>
              <h1 className='m-5 text-lg font-semibold flex items-center'>
                <BiCommand className='mr-2 w-6 h-6' />Courses
              </h1>
              <div>
                <Link href='/admin/course' className='border py-2 px-5 mr-5 text-md hover:bg-violet-500 hover:text-white text-violet-500 border-violet-500 rounded-full'>+Add new Course</Link>
              </div>
            </div>
            {/* second secction of showing courses datails by category Active free paid peding  */}
            <section className='bg-white my-4 flex flex-wrap divide-x-2'>
              <div onClick={() => getCorsebyType("Active courses")} className='lg:w-[20%] w-[50%] flex-wrap flex flex-col items-center justify-center py-6 space-y-3'>
                <GrLink className='transform rotate-90 text-gray-400' size={25} />
                <p className='font-bold text-xl'>{totalCourses}</p>
                <h1>Active courses</h1>
              </div>
              <div onClick={() => getCorsebyType("Upcoming courses")} className='lg:w-[20%] w-[50%] flex flex-col items-center justify-center py-6 space-y-3'>
                <GrUnlink size={25} className='text-gray-500' />
                <p className='font-bold text-xl'>0</p>
                <h1>Upcoming courses</h1>
              </div>
              <div onClick={() => getCorsebyType("Pending courses")} className='lg:w-[20%] w-[33%] flex flex-col items-center justify-center py-6 space-y-3'>
                <GrUnlink size={25} className='text-gray-500' />
                <p className='font-bold text-xl'>0</p>
                <h1>Pending courses</h1>
              </div>
              <div onClick={() => getCorsebyType("free")} className='lg:w-[20%] w-[33%] flex flex-col items-center justify-center py-6 space-y-3'>
                <FaRegStar size={25} className='text-gray-500' />
                <p className='font-bold text-xl'>{totalFreeCourses}</p>
                <h1>Free courses</h1>
              </div>
              <div onClick={() => getCorsebyType("paid")} className='lg:w-[20%] w-[33%] flex flex-col items-center justify-center py-6 space-y-3'>
                <BsTags size={25} className='text-gray-500' />
                <p className='font-bold text-xl'>{totalPaidCourses}</p>
                <h1>Paid courses</h1>
              </div>
            </section>
            {/* for showing courese  */}
            <div className='bg-white my-4 rounded overflow-auto lg:overflow-visible'>
              <div className='rounded-t'>
                <h1 className='text-sm font-semibold p-2'>COURSE LIST</h1>
              </div>
              <table className='w-[96%] m-5 text-sm'>
                <tbody className='overflow-scroll'>
                  <tr className="border-b border-t font-semibold">
                    <td className="px-4 py-4">#</td>
                    <td className="px-4 py-2">Title</td>
                    <td className="px-4 py-2">Category</td>
                    <td className="px-4 py-2">Enrolled Student</td>
                    <td className="px-4 py-2">Status</td>
                  </tr>
                  {courses.length === 0 ? (
                    <tr className='border-b'>
                      <td colSpan="5" className='text-center py-4 '>
                        <VscEmptyWindow className='inline-block mr-2 mb-1' />
                        No matching records found
                      </td>
                    </tr>
                  ) : (
                    courses.map((course, index) => (
                      <>
                        <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100 border-b" : "border-b"}`}>
                          <td className="px-4 py-4 flex items-center">
                          {selectedCourse === course ? (
                              <FaMinusCircle className='text-red-500 mr-2' onClick={handleOnHide} />
                            ) : (
                              <FaPlusCircle className='text-green-500 mr-2' onClick={() => handleOnShowEditCourse(course)} />
                            )}                            </td>
                          <td className="px-4 py-4 text-blue-500 font-semibold">{course.title} <br /><span className='text-gray-400 font-normal text-xs'>Instructor:{course.CreatedBy}</span></td>
                          <td className="px-4 py-4 text-black"><span className='bg-gray-300 rounded text-xs p-0.5'>{course.category}</span></td>
                          <td className="px-4 py-4">Enrollments: 1</td>
                          <td className="px-4 py-4">Active</td>
                        </tr>
                        <tr className='w-full'>
                          <td colSpan="5" >
                            {selectedCourse === course && (
                              <div className='border-b'>
                              <p className='p-5'><span className='text-md font-semibold'>Price : </span>
                              <span className='bg-gray-300 rounded font-semibold text-xs p-0.5 ml-10'> &#8377; {course.price ? course.price : "Free"}</span>
                              <br /><span className='text-xs'>{course.expiry}</span>
                              </p>
                              
                              <div className='border-b p-5'>
                                Actions
                                <PiDotsThreeVerticalBold size={25} className='border border-violet-500  text-violet-500 hover:text-white hover:bg-violet-500 rounded-full '/>
                              </div>
                              </div>     
                            )}
                          </td>
                        </tr>

                      </>
                    ))
                  )}

                </tbody>
              </table>
              <div className='text-red-500 flex justify-center mt-5 font-semibold'>{error}</div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Addcorse;
