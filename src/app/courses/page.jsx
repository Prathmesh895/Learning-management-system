import React from 'react'
import BG from '/public/course-breadcramb.png'
import Book from '/public/brd-book.png'
import Image from 'next/image'
import Link from 'next/link'
import { IoHomeSharp } from "react-icons/io5";

function Courses() {
    return (
        <>
          <section className=' text-white lg:mb-5 mb-10'>
                <div className='absolute -z-10'>
                    <Image src={BG} alt="coursebg" className='relative lg:h-56 h-36' />
                </div>
                <div className='flex justify-between lg:mx-44 items-center'>
                    <div className=''>
                        <div className='flex items-center space-x-2 mb-5 '>
                            <Link href='/ ' className='flex space-x-4'><IoHomeSharp size={19}/><p>Home</p></Link> <p> &gt; Courses</p>
                            </div>
                        <div className='text-6xl font-semibold'>Courses</div>
                    </div>
                    <div>
                        <Image src={Book} alt='Book image' className='h-52 w-52 lg:block hidden'/>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default Courses
