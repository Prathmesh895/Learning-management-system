'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import StudentIMG from '/public/student.png';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { FaBookReader, FaCubes, FaRegCalendarCheck, FaBook, FaRegHeart, FaKey,FaUser } from "react-icons/fa";
import { FaChalkboardUser, FaUsers } from "react-icons/fa6";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { usePathname } from 'next/navigation';


const SideLinks = [
  { icon: FaBookReader, title: 'My courses', link: '/mycourses' },
  { icon: FaCubes, title: 'Bootcamp', link: '/mycourses/student/bootcamp' },
  { icon: FaChalkboardUser, title: 'My teams', link: '/mycourses/student/myteams' },
  { icon: FaUsers, title: 'Booked tuition', link: '' },
  { icon: FaRegCalendarCheck, title: 'Whishlist', link: '/mycourses/student/whishlists' },
  { icon: FaBook, title: 'My ebooks', link: '/mycourses/student/ebooks' },
  { icon: FaRegHeart, title: 'Messages', link: '/mycourses/student/messages' },
  { icon: BiMessageRoundedDots, title: 'Affiliate history', link: '' },
  { icon: IoMdSettings , title: 'Payout Setting', link: '' },
  { icon: FaUser, title: 'Profile', link: '/mycourses/profile' },
  { icon: FaKey, title: 'Account', link: '/mycourses/Account' },
];

function Page() {
  const [selectedTitle, setSelectedTitle] = useState("");
  const pathname = usePathname();
  const handleClick = (title) => {
    setSelectedTitle(title);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const { data: session, status } = useSession();

  return (
    <section className='bg-white lg:w-64 lg:pt-10 p-5 flex flex-col shadow-lg border rounded-lg' data-aos="fade-up">
      <div className='flex flex-col items-center my-5'>
        <Image src={StudentIMG} alt='student img' width={90} height={90} className='rounded-full' />
        <span className='text-lg font-semibold text-gray-500'>Student Name {session?.user.fname}</span>
        <span className='text-xs font-semibold text-gray-500'>{session?.user?.email}</span>
      </div>
      <div className='space-y-1 font-semibold text-sm'>
        {SideLinks.map((link, index) => (
          <div key={index} onClick={() => handleClick(link.title)}
            className={`cursor-pointer flex items-center hover:bg-violet-600 hover:text-white p-3 rounded-lg 
            ${selectedTitle === link.title ? 'bg-violet-600 text-white' : ''}`}
            >
            <Link href={link.link} className='flex items-center w-full'>
              <link.icon className="mr-3" />
              {link.title}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Page;
