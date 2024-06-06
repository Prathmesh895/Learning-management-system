'use client'
import React from 'react'
import Image from 'next/image'
import StudentIMG from '/public/student.png'
import { useState } from 'react'
import Link from 'next/link'

const SideLinks = [
  { icon: '', title: 'My courses', link: '/mycourses' },
  { icon: '', title: 'Bootcamp', link: '' },
  { icon: '', title: 'My teams', link: '' },
  { icon: '', title: 'Booked tuition', link: '' },
  { icon: '', title: 'Whishlist', link: '' },
  { icon: '', title: 'My ebooks', link: '' },
  { icon: '', title: 'Messages', link: '' },
  { icon: '', title: 'Affilate history', link: '' },
  { icon: '', title: 'Payout Setting', link: '' },
  { icon: '', title: 'Profile', link: '' },
  { icon: '', title: 'Account', link: '' },
]

function page() {
  const [selectedTitle, setSelectedTitle] = useState("My courses");
  const handleClick = (title) => {
    setSelectedTitle(title);
  };
  return (
    <>
      <section className='bg-white lg:w-72 p-5 flex flex-col '>
        <div className='flex flex-col items-center my-5'>
          <Image src={StudentIMG} alt='student img' width={100} height={100} className='rounded-full' />
          <span className='text-lg font-semibold text-gray-500'>Student Name</span> 
          <span className='text-xs font-semibold text-gray-500'>Student@gmail.com</span>
        </div>
        <div className='space-y-1 font-semibold text-sm'>
          {SideLinks.map((link, index) => (
            <div key={index} onClick={() => handleClick(link.title)}
              className={`cursor-pointer hover:bg-violet-600 hover:text-white p-3 rounded-lg ${selectedTitle === link.title ? 'bg-violet-600 text-white' : ''
                }`}>
              <Link href={link.link}>
                {link.title}
              </Link> </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default page