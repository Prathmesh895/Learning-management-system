"use client"
import React from 'react'
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdOutlineSkipNext } from "react-icons/md";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { LuNetwork } from "react-icons/lu";
import { BsStack } from "react-icons/bs";
import Image from 'next/image'
import Img_logo from '/public/logo-sm.png'
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function sidebar() {
    const router = useRouter();
    const [adminMenu, setAdminMenu] = useState('');
    const [adminMenu1, setAdminMenu1] = useState('');
    const [isopen, setIsopen] = useState('');

    const dropdownRef = useRef(null);
    const dropdownRef1 = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setAdminMenu1(false);
            }
            if (dropdownRef1.current && !dropdownRef1.current.contains(e.target)) {
                setAdminMenu(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const handleonclick = () => {
        setAdminMenu(!adminMenu)
    }
    const handleonclick1 = () => {
        setAdminMenu1(!adminMenu1)
    }
    const handleSignOut = async () => {
        await signOut();
        router.push('/');
        console.log("Logout Sucessesfully")
    };
    return (
        <main>
            {/* navbar section */}
            <nav className="bg-gray-600 lg:h-16 h-14 lg:px-12 text-white lg:flex justify-between items-center shadow">
                <div className="lg:flex lg:space-x-8 lg:items-center lg:h-16 h-14 hidden sm:block ">
                    <div className='flex items-center space-x-2'><Image src={Img_logo} width={40} alt='Company log' />
                        <div className='font-serif leading-5 drop-shadow-md text-lg'>
                            <h1>Learning</h1>
                            <h1 className=''> Academy</h1>
                        </div>
                    </div>
                    <div className='border p-2 text-sm '><Link href='/' >Visit a site</Link></div>
                </div>
                <div className="lg:bg-gray-600 justify-end pr-5 bg-white flex items-center lg:space-x-10 space-x-6">
                    <div onClick={handleonclick1}><TfiLayoutGrid3Alt className='w-5 h-5 text-gray-500 sm:text-white' /></div>
                    <div><FaRegCircleQuestion className='w-6 h-6 text-gray-500 sm:text-white' /></div>
                    <div><MdOutlineNotificationsNone className='w-7 h-7 text-gray-500 sm:text-white' /></div>
                    <div className='flex flex-col lg:h-16 h-14  lg:px-2 justify-center items-center bg-slate-500 cursor-pointer' onClick={handleonclick}>
                        {/* <p className='overflow-auto'>{session?.user?.email}</p> */}
                        <p className=''>Administrator</p>
                    </div>
                </div>
            </nav>
            {/* dropdown menu for navbar icon  */}
            <div ref={dropdownRef1} className={adminMenu ? "absolute  right-12 p-4 space-y-3 flex flex-col px-7 bg-white text-sm text-gray-500 shadow-md rounded w-44 z-50" : "fixed right-[-100%] top-0 p-6 bg-slate-500"}>
                <h1 className='font-semibold'>Welcome !</h1>
                <div className='flex items-center mt-1'>
                    <BiSolidUserCircle className='mr-2' />
                    My account
                </div>
                <div className='flex items-center mt-1 ' onClick={handleSignOut}>
                    <IoSettingsSharp className='mr-2' />Settings
                </div>
                <div >
                    <button className='flex items-center mt-1' onClick={handleSignOut}> <RiLogoutBoxRLine className='mr-2' />Logout</button>
                </div>
            </div>
            {/* handleonclick1 */}
            <div className={adminMenu1 ? "absolute  lg:right-44 lg:w-[20%] z-10" : "fixed right-[-100%] top-0 p-6 bg-slate-500"}>
                <div ref={dropdownRef} className='flex flex-col border bg-white '>
                    <div className='bg-violet-500 flex justify-center items-center h-14'>
                        <h1 className='text-white  font-semibold'>Quick actions</h1>
                    </div>
                    <div className="grid grid-cols-2  divide-y divide-x text-gray-400">
                        <Link href='/admin/course/managecourses'>
                            <div className="flex flex-col items-center p-4">
                                <div><BsStack className='text-violet-500 w-7 h-7' /></div>
                                <div>Add course</div>
                            </div>
                        </Link>
                        <Link href='/admin/course/managecourses'>
                            <div className="flex flex-col items-center p-4 bg-white">
                                <div><MdOutlineSkipNext className='text-violet-500 w-7 h-7' /></div>
                                <h1>Add lesson</h1>
                            </div>
                        </Link>
                        <Link href='/admin/user/Add_student'>
                            <div className="flex flex-col items-center p-4 bg-white">
                                <div><HiOutlineUserPlus className='text-violet-500 w-7 h-7' /></div>
                                <div>Add student</div>
                            </div>
                        </Link>
                        <div className="flex flex-col items-center p-4 bg-white">
                            <div><LuNetwork className='text-violet-500 w-7 h-7' /></div>
                            <div>Enroll student</div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default sidebar