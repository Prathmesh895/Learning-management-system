'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { RiRadioButtonFill } from "react-icons/ri";
import { MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked } from "react-icons/md";

const categories = [
  {
    title: 'Web Design',
    items: [
      { title: 'Responsive Design', link: '/courses/courselist' },
      { title: 'WordPress Theme', link: '#' },
      { title: 'Bootstrap', link: '#' },
      { title: 'HTML&CSS', link: '#' }
    ]
  },
  {
    title: 'Graphic Design',
    items: [
      { title: 'Photoshop', link: '#' },
      { title: 'Adobe Illustrator', link: '#' },
      { title: 'Photoshop', link: '#' },
      { title: 'Logo Design', link: '#' },
      { title: 'Digital Art', link: '#' },
      { title: 'Drawing', link: '#' },
      { title: 'Adobe Illustrator', link: '#' }
    ]
  },
  {
    title: 'User Experience',
    items: [
      { title: 'User Experience Design', link: '#' },
      { title: 'Mobile App Design', link: '#' },
      { title: 'User Interface', link: '#' },
      { title: 'Design Thinking', link: '#' },
      { title: 'Figma', link: '#' },
      { title: 'Prototyping', link: '#' }
    ]
  },
  {
    title: '3D & Animation',
    items: [
      { title: 'Blender', link: '#' },
      { title: 'Motion Graphics', link: '#' },
      { title: 'After Effects', link: '#' },
      { title: 'Maya', link: '#' },
      { title: 'zBrush', link: '#' },
      { title: 'Character Modeling', link: '#' }
    ]
  }
];

function Page() {



  return (
    <section className='bg-white p-8 shadow-xl flex flex-col space-y-4 rounded-md text-gray-500'>
      <h1 className='text-xl font-semibold'>Categories</h1>
      <h1>All Categories</h1>
      {categories.map((category, index) => (
        <div key={index}  className="cursor-pointer">
          <div className='flex items-center'>
           
            <h1 className="font-semibold">{category.title}</h1>
          </div>
          <ul className='ml-10 mt-2'>
            {category.items.map((item, idx) => (
              <li key={idx}  className="text-gray-600 pb-2">
             <Link href={item.link} >{item.title}</Link>
                
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Page;


