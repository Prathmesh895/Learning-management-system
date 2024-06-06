import React from 'react'
import Sidebar from './sidebar/page'
import Image from 'next/image'
import BG from '/public/course-breadcramb.png'
export default function layout({ children }) {
    return (<>
        <section className=''>
            <div className='absolute -z-10 '>
                <Image src={BG} alt="coursebg" className='relative h-52' />
            </div>
            <div className='lg:mx-44 mx-5 py-12'>
                <div className='flex text-white space-x-3 my-2'>
                    <h1>Home  &gt; </h1>
                    <h1>My courses</h1>
                </div>
                <h1 className='lg:text-5xl text-4xl text-white font-semibold'>My courses</h1>
            </div>
        </section>

        <div className='lg:flex lg:space-x-10  lg:mt-20 mx-5 my-5 lg:mx-44'>
            <Sidebar className='lg:w-[20%]' />
            <div className='lg:w-[70%]'>{children}</div>
        </div>
    </>

    )
}
