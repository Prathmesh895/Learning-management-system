"use client"
import React from 'react'
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
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
    return (
        <main className=''>
            {/* Dashboard code section */}
            <section className='lg:flex lg:justify-between px-10'>
                {/* side bar of dashboard  */}
                <div className='lg:w-1/6 bg-white lg:flex lg:flex-col  lg:space-y-6 text-gray-500 lg:my-8   text-sm hidden'>
                    <div className='flex flex-col lg:h-16 h-14 text-white  lg:px-2 justify-center items-center bg-slate-500 hover:text-blue-500'>
                        <p className='overflow-auto'>{session?.user?.email}</p>
                        <p className=''>Administrador</p>
                    </div>
                    <div className='hover:text-violet-600 px-4'>
                        Navigation
                    </div>
                    <div className='hover:text-violet-600 flex items-center px-8' >
                        <TfiLayoutGrid3Alt className='mr-2' /> Dashboard <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600  px-8 flex items-center '>
                        <BsStack className='mr-2' />Course <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600  px-8 flex items-center '>
                        <FiUsers className='mr-2' />Bootcamp <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Team training <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Tutor booking <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Ebook <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <LuNetwork className='mr-2' />Enrollments <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <TbReportSearch className='mr-2' />Report <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <TbReportSearch className='mr-2' />Affiliate <MdArrowForwardIos className='ml-auto' />
                    </div>
                    {/* User Admin Instructor changing */}
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <FiUsers className='mr-2' />Users <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <GiMoneyStack className='mr-2' />Offline payment <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <BiMessageDetail className='mr-2' />Message
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <SlEnvolopeLetter className='mr-2' />Newsletter <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <MdOutlineContactPhone className='mr-2' />Contact
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <RiFileListLine className='mr-2' />Blog <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <GrSupport className='mr-2' />Customer support <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <AiOutlinePieChart className='mr-2' />Addons
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <BsBrush className='mr-2' />Themes
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <GiSettingsKnobs className='mr-2' />Settings <MdArrowForwardIos className='ml-auto' />
                    </div>
                    <div className='hover:text-violet-600 flex items-center  px-8'>
                        <FaUserCog className='mr-2' />Manage profile
                    </div>
                </div>
            </section>
        </main>
    )
}

export default admin
