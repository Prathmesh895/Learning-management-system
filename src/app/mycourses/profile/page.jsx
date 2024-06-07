import React from 'react'
import Image from 'next/image'
import StudentIMG from '/public/student.png'
import { FaUpload } from "react-icons/fa6";
import { FaUser, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";


function page() {


    return (
        <>
            <section className='bg-white lg:p-10 my-5 lg:my-0 p-5 shadow-xl rounded'>
                {/* user details */}
                <form >
                    <div className='flex  justify-between items-center'>
                        <div className='lg:flex  justify-between items-center'>
                            <Image src={StudentIMG} alt='student img' width={130} height={130} className='rounded-full mr-5' />
                            <h1>
                                <span className='text-lg font-semibold'>Profile Photo</span> <br />
                                <span className='text-xs  text-gray-500'>Update your profile photo and personal details</span>
                            </h1>
                        </div>
                        {/* for uploading Image of user */}

                        <label className="relative overflow-hidden inline-block bg-gray-200  rounded-md px-3 py-1 cursor-pointer border hover:border-violet-500">
                            <span className='flex items-center space-x-1 text-md'><FaUpload className='text-black mr-1' />Upload photo</span>
                            <input type="file" name="fileUpload" className="absolute top-0 right-0 w-full h-full opacity-0 cursor-pointer" />
                        </label>

                    </div>
                    <div>
                        <h1 className='border-b text-2xl font-semibold mt-5 py-3'>Profile info</h1>


                        <div className='lg:flex justify-between lg:my-6 my-3 lg:mx-3'>
                            <div className='relative flex flex-col lg:w-[48%]'>
                                <label htmlFor="" className='text-sm font-semibold text-gray-700'>First Name</label>
                                <span className='absolute top-5 border-r border-violet-200 p-3'><FaUser className='text-gray-500' /></span>
                                <input type="text"
                                    className='px-12 bg-violet-100 rounded' />
                            </div>

                            <div className='relative flex flex-col lg:w-[48%] lg:mt-0 mt-3'>
                                <label htmlFor="" className='text-sm font-semibold text-gray-700' >Last Name</label>
                                <span className='absolute top-5 border-r border-violet-200 p-3'><FaUser className='text-gray-500' /></span>
                                <input type="text"
                                    className='px-12 bg-violet-100 rounded' />
                            </div>
                        </div>
                        <div className='w-full'>
                            <label htmlFor="">Biography</label> <br />
                            <textarea name="" id="" rows={10} cols={80} className='border'>
                            </textarea>
                        </div>

                        <div className='relative flex flex-col lg:mt-5 mt-3'>
                            <label htmlFor="" className='text-sm font-semibold text-gray-700' >Add your twitter link</label>
                            <span className='absolute top-5 border-r border-violet-200 p-2.5 px-6'><FaTwitter className='text-gray-500' /></span>
                            <input type="text"
                                className='px-20 bg-violet-50 rounded p-1.5'
                                placeholder='https://www.twitter.com/john'
                            />
                        </div>
                        <div className='relative flex flex-col lg:mt-5 mt-3'>
                            <label htmlFor="" className='text-sm font-semibold text-gray-700' >Add your facebook link</label>
                            <span className='absolute top-5 border-r border-violet-200 p-2.5 px-6'><FaFacebook className='text-gray-500' /></span>
                            <input type="text"
                                className='px-20 bg-violet-50 rounded p-1.5'
                                placeholder='https://www.facebook.com/john'
                            />
                        </div>
                        <div className='relative flex flex-col lg:mt-5 mt-3'>
                            <label htmlFor="" className='text-sm font-semibold text-gray-700' >Add your linkedin link</label>
                            <span className='absolute top-5 border-r border-violet-200 p-2.5 px-6'><FaLinkedin className='text-gray-500' /></span>
                            <input type="text"
                                className='px-20 bg-violet-50 rounded p-1.5'
                                placeholder='https://www.linkedin.com/john'
                            />
                        </div>

                        <button className='bg-violet-600 px-10 py-2 rounded text-white mt-5'>Save</button>

                    </div>
                </form>
            </section>
        </>
    )
}

export default page