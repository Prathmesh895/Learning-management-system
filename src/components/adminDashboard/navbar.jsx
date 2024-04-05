"use client"
import React from 'react'
import { FaDiscord } from 'react-icons/fa';
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
import Img_logo from '/public/cropped-New-logo-File.png'
import Link from 'next/link';
import { useState,useRef,useEffect} from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function sidebar() {
    const router=useRouter();
    const [adminMenu, setAdminMenu] = useState('');
    const [adminMenu1, setAdminMenu1] = useState('');
    const dropdownRef = useRef(null);
    const dropdownRef1 = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setAdminMenu(false);
            }
            if (
                dropdownRef1.current &&
                !dropdownRef1.current.contains(event.target)
            ) {
                setAdminMenu1(false);
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
        toast.success("Logout Sucessesfully")
    };
  return (
    <main>
          {/* navbar section */}
          <nav className="bg-gray-600 lg:h-16 h-14 lg:px-12 text-white lg:flex justify-between items-center shadow">
                <div className="lg:flex lg:space-x-8 lg:items-center lg:h-16 h-14 hidden sm:block ">
                    <div><Image src={Img_logo} width={120} alt='Company log' /></div>
                    <div className='border p-2 text-sm '><Link href='/' >Visit a site</Link></div>
                </div>
                <div className="lg:bg-gray-600 bg-white flex items-center lg:space-x-10 space-x-6">
                    <div className='bg-violet-600 p-2 rounded text-sm hidden sm:block'>Get Services</div>
                    <div><FaDiscord className='w-7 h-7 text-gray-500 sm:text-white' /></div>
                    <div ref={dropdownRef1} onClick={handleonclick1}><TfiLayoutGrid3Alt className='w-5 h-5 text-gray-500 sm:text-white' /></div>
                    <div><FaRegCircleQuestion className='w-6 h-6 text-gray-500 sm:text-white' /></div>
                    <div><MdOutlineNotificationsNone className='w-7 h-7 text-gray-500 sm:text-white' /></div>
                    <div className='flex flex-col lg:h-16 h-14  lg:px-2 justify-center items-center bg-slate-500'  onClick={handleonclick}>
                        {/* <p className='overflow-auto'>{session?.user?.email}</p> */}
                        <p className=''>Administrador</p>
                    </div>
                </div>
            </nav>
            {/* dropdown menu for navbar icon  */}
            <div className={adminMenu ? "absolute  right-12 p-4 bg-white shadow-md rounded  z-50" : "fixed right-[-100%] top-0 p-6 bg-slate-500"}>
                <h1>Welcome !</h1>
                <div className='flex items-center mt-1'>
                    <BiSolidUserCircle className='mr-2' />
                    My account
                </div>
                <div className='flex items-center mt-1 'onClick={handleSignOut}>
                    <IoSettingsSharp className='mr-2' />Settings
                </div>
                <div >
                    <button className='flex items-center mt-1' onClick={handleSignOut}> <RiLogoutBoxRLine className='mr-2' />Logout</button>
                </div>
            </div>
            {/* handleonclick1 */}
            <div className={adminMenu1 ? "absolute  lg:right-44 lg:w-[20%] " : "fixed right-[-100%] top-0 p-6 bg-slate-500"}>
                <div className='flex flex-col border bg-white '>
                    <div className='bg-violet-500 flex justify-center items-center h-14'>
                        <h1 className='text-white  font-semibold'>Quick actions</h1>
                    </div>
                    <div className="grid grid-cols-2  divide-y divide-x text-gray-400">
                        <div className="flex flex-col items-center p-4">
                            <div><BsStack className='text-violet-500 w-7 h-7' /></div>
                            <div>Add course</div>
                        </div>
                        <div className="flex flex-col items-center p-4 ">
                            <div><MdOutlineSkipNext className='text-violet-500 w-7 h-7' /></div>
                            <h1>Add lesson</h1>
                        </div>
                        <div className="flex flex-col items-center p-4">
                            <div><HiOutlineUserPlus className='text-violet-500 w-7 h-7' /></div>
                            <div>Add student</div>
                        </div>
                        <div className="flex flex-col items-center p-4">
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