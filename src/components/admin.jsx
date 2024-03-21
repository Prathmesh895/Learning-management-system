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



function admin() {
    const { data: session } = useSession();
    const [adminMenu,setAdminMenu]=useState('')
    function handleonclick() {
        setAdminMenu(!adminMenu)
    }
    
    const handleSignOut = async () => {
        await signOut();
    
    };
    return (

        <main className=''>
            <nav className="bg-gray-600 lg:h-16 h-14 lg:px-12 text-white lg:flex justify-between items-center ">
                <div className="lg:flex lg:space-x-8 lg:items-center lg:h-16 h-14 hidden sm:block ">
                    <div><Image src={Img_logo} width={120} alt='Company log' /></div> 
                    <div className='border p-2 text-sm '><Link href='/' >Visit a site</Link></div>
                </div>
                <div className="lg:bg-gray-600 bg-white flex items-center lg:space-x-10 space-x-6">
                    <div className='bg-violet-600 p-2 rounded text-sm hidden sm:block'>Get Services</div>
                    <div><FaDiscord className='w-7 h-7 text-gray-500 sm:text-white'/></div>
                    <div><TfiLayoutGrid3Alt className='w-5 h-5 text-gray-500 sm:text-white'/></div>
                    <div><FaRegCircleQuestion className='w-6 h-6 text-gray-500 sm:text-white'/></div>
                    <div><MdOutlineNotificationsNone className='w-7 h-7 text-gray-500 sm:text-white'/></div>
                    <div className='flex flex-col lg:h-16 h-14  px-2 justify-center items-center bg-slate-500' onClick={handleonclick}>
                        <p className='overflow-auto'>{session?.user?.email}</p>
                        <p className=''>Administrador</p>
                    </div>
                </div>
            </nav>
                <div className= {adminMenu ? "absolute  right-12 p-4 bg-white shadow-md rounded":"fixed right-[-100%] top-0 p-6 bg-slate-500"}>  

                  <h1>Welcome !</h1>
                        <div className='flex items-center mt-1'>
                            <BiSolidUserCircle className='mr-2'/>
                            My account
                        </div>
                        <div className='flex items-center mt-1'>
                        <IoSettingsSharp className='mr-2'/>Settings
                        </div>
                        <div >
                            <button className='flex items-center mt-1' onClick={handleSignOut}> <RiLogoutBoxRLine className='mr-2'/>Logout</button>
                       
                        </div>     
            </div>
            <section className='lg:flex lg:justify-evenly'>
                <div className='lg:w-1/6 bg-white lg:flex lg:flex-col lg:space-y-4 text-gray-500'>
                    <div>Navigation</div>
                    <div>Dashboard</div>
                    <div>Course</div>
                    <div>Bootcamp</div>
                    <div>Team training</div>
                    <div>Tutor booking</div>
                    <div>Ebook</div>
                    <div>Enrollments</div>
                    <div>Report</div>
                    <div>Affiliate</div>
                    <div>Users</div>
                    <div>Offline payment</div>
                    <div>Message</div>
                    <div>Newsletter</div>
                    <div>Contact</div>
                    <div>Blog</div>
                    <div>Customer support</div>
                    <div>Addons</div>
                    <div>Themes</div>
                    <div>Settings</div>
                    <div>Manage profile</div>
                </div>
                <div className='bg-white lg:w-3/4'>
                    <div className='lg:h-[10%]'>
                        <h1>Dashboard</h1>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                
                </div>
            </section>
        </main>

    )
}

export default admin