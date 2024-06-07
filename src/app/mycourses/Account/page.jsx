"use client"
import React from 'react'
import Image from 'next/image'
import StudentIMG from '/public/student.png'
import { FaUser, FaLock, FaKey } from "react-icons/fa";
import { useSession } from 'next-auth/react';

function page() {
    // const session = getServerSession(authOptions);
    const { data: session, status } = useSession();
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
                                <span className='text-xs  text-gray-500'>Update your Password</span>
                            </h1>
                        </div>
                    </div>

                    <div>
                        <h1 className='border-b text-2xl font-semibold mt-5 py-3'>Account information</h1>
                        {/* show users email  */}
                        <div className='border-b py-10'>
                            <label htmlFor="" className='text-sm font-semibold text-gray-700'>Email</label>
                            <h1 className='border p-1.5 rounded bg-violet-50'>{session?.user?.email}</h1>
                        </div>
                        <div className='relative flex flex-col lg:mt-5 mt-3'>
                            <label htmlFor="" className='text-sm font-semibold text-gray-700' >Current Password</label>
                            <span className='absolute top-5 border-r border-violet-200 p-2.5 px-6'><FaKey className='text-gray-500' /></span>
                            <input type="text"
                                className='px-20 bg-violet-50 rounded p-1.5'
                                placeholder='Enter current password'
                            />
                        </div>
                        <div className='relative flex flex-col lg:mt-5 mt-3'>
                            <label htmlFor="" className='text-sm font-semibold text-gray-700' >New password</label>
                            <span className='absolute top-5 border-r border-violet-200 p-2.5 px-6'><FaLock className='text-gray-500' /></span>
                            <input type="text"
                                className='px-20 bg-violet-50 rounded p-1.5'
                                placeholder='Enter new password'
                            />
                        </div>
                        <div className='relative flex flex-col lg:mt-5 mt-3'>
                            <label htmlFor="" className='text-sm font-semibold text-gray-700' >Confirm password</label>
                            <span className='absolute top-5 border-r border-violet-200 p-2.5 px-6'><FaLock className='text-gray-500' /></span>
                            <input type="text"
                                className='px-20 bg-violet-50 rounded p-1.5'
                                placeholder='Re-type your password'
                            />
                        </div>

                        <button className='bg-violet-600 px-10 py-3 rounded text-white mt-5'>Save changes</button>

                    </div>
                </form>
            </section>
        </>
    )
}

export default page