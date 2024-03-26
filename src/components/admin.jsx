"use client"
import React from 'react'
import Image from 'next/image'
import Img_logo from '/public/cropped-New-logo-File.png'
import Link from 'next/link'
import { useState } from 'react'
import { useSession } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { FaDiscord } from 'react-icons/fa';
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiSolidUserCircle } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { BiCommand } from "react-icons/bi";
import { MdOutlineSkipNext } from "react-icons/md";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { LuNetwork } from "react-icons/lu";
import { BsStack } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { RiFileListLine } from "react-icons/ri";
import { TbReportSearch } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { BiMessageDetail } from "react-icons/bi";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaUserCog } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsBrush } from "react-icons/bs";
import { GrSupport } from "react-icons/gr";
import { AiOutlinePieChart } from "react-icons/ai";
import { MdOutlineContactPhone } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


function admin() {
    const { data: session } = useSession();
    const [adminMenu, setAdminMenu] = useState('')
    const [adminMenu1, setAdminMenu1] = useState('')
    const handleonclick = () => {
        setAdminMenu(!adminMenu)
    }
    const handleonclick1 = () => {
        setAdminMenu1(!adminMenu1)
    }

    const handleSignOut = async () => {
        await signOut();

    };
    return (

        <main className=''>
            {/* navbar section */}
            <nav className="bg-gray-600 lg:h-16 h-14 lg:px-12 text-white lg:flex justify-between items-center shadow">
                <div className="lg:flex lg:space-x-8 lg:items-center lg:h-16 h-14 hidden sm:block ">
                    <div><Image src={Img_logo} width={120} alt='Company log' /></div>
                    <div className='border p-2 text-sm '><Link href='/' >Visit a site</Link></div>
                </div>
                <div className="lg:bg-gray-600 bg-white flex items-center lg:space-x-10 space-x-6">
                    <div className='bg-violet-600 p-2 rounded text-sm hidden sm:block'>Get Services</div>
                    <div><FaDiscord className='w-7 h-7 text-gray-500 sm:text-white' /></div>
                    <div><TfiLayoutGrid3Alt onClick={handleonclick1} className='w-5 h-5 text-gray-500 sm:text-white' /></div>
                    <div><FaRegCircleQuestion className='w-6 h-6 text-gray-500 sm:text-white' /></div>
                    <div><MdOutlineNotificationsNone className='w-7 h-7 text-gray-500 sm:text-white' /></div>
                    <div className='flex flex-col lg:h-16 h-14  lg:px-2 justify-center items-center bg-slate-500' onClick={handleonclick}>
                        <p className='overflow-auto'>{session?.user?.email}</p>
                        <p className=''>Administrador</p>
                    </div>
                </div>
            </nav>
            {/* dropdown menu for navbar icon  */}
            <div className={adminMenu ? "absolute  right-12 p-4 bg-white shadow-md rounded" : "fixed right-[-100%] top-0 p-6 bg-slate-500"}>
                <h1>Welcome !</h1>
                <div className='flex items-center mt-1'>
                    <BiSolidUserCircle className='mr-2' />
                    My account
                </div>
                <div className='flex items-center mt-1'>
                    <IoSettingsSharp className='mr-2' />Settings
                </div>
                <div >
                    <button className='flex items-center mt-1' onClick={handleSignOut}> <RiLogoutBoxRLine className='mr-2' />Logout</button>
                </div>
            </div>
            {/* handleonclick1 */}
            <div className={adminMenu1 ? "absolute  lg:right-44 lg:w-[20%]" : "fixed right-[-100%] top-0 p-6 bg-slate-500"}>
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

{/* Dashboard code section */}
            <section className='lg:flex lg:justify-evenly'>
                {/* side bar of dashboard  */}
                <div className='lg:w-1/6 bg-white lg:flex lg:flex-col  lg:space-y-6 text-gray-500 lg:my-8  text-sm hidden'>
                    <div className='flex flex-col lg:h-16 h-14 text-white  lg:px-2 justify-center items-center bg-slate-500 hover:text-blue-500'>
                        <p className='overflow-auto'>{session?.user?.email}</p>
                        <p className=''>Administrador</p>
                    </div>
                    <div className='hover:text-violet-600 px-4'>
                        Navigation
                    </div>
                    <div className='hover:text-violet-600 flex items-center px-8'>
                        <TfiLayoutGrid3Alt className='mr-2' /> Dashboard <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600  px-8 flex items-center '>
                        <BsStack className='mr-2' />Course <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600  px-8 flex items-center '>
                        <FiUsers className='mr-2' />Bootcamp <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Team training <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Tutor booking <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Ebook <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <LuNetwork className='mr-2' />Enrollments <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <TbReportSearch className='mr-2' />Report <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <TbReportSearch className='mr-2' />Affiliate <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <FiUsers className='mr-2' />Users <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <GiMoneyStack className='mr-2' />Offline payment <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <BiMessageDetail className='mr-2' />Message
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <SlEnvolopeLetter className='mr-2' />Newsletter <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <MdOutlineContactPhone className='mr-2' />Contact
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Blog <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <GrSupport  className='mr-2' />Customer support <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <AiOutlinePieChart className='mr-2' />Addons
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <BsBrush className='mr-2' />Themes
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <GiSettingsKnobs className='mr-2' />Settings <MdArrowForwardIos className='ml-auto'/>
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <FaUserCog  className='mr-2' />Manage profile
                    </div>
                </div>
                <div className='lg:w-3/4 lg:flex lg:flex-col lg:justify-between my-4'>
                    <div className='bg-white lg:h-24 my-4 rounded lg:flex lg:items-center text-gray-500'>
                        <h1 className='m-5 text-lg font-semibold lg:flex lg:items-center '>
                            <BiCommand className='mr-2 w-6 h-6' />Dashboard
                        </h1>
                    </div>
                    <div className='bg-white lg:h-96 my-4 rounded  '>2</div>
                    <div className='bg-white lg:h-44 my-4 rounded divide-x lg:flex divide-slate-300'>
                        <div className='w-1/4 rounded'>1</div>
                        <div className='w-1/4 rounded'>2</div>
                        <div className='w-1/4 rounded'>3</div>
                        <div className='w-1/4 rounded'>4</div>
                    </div>
                    <div className='bg-white lg:h-96 my-4 rounded'>4</div>
                </div>
            </section>
     
        </main>

    )
}

export default admin
