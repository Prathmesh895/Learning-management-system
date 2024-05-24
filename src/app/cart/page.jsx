import React from 'react'
import Image from 'next/image'
import BG from '/public/course-breadcramb.png'
export default function page() {
  return (
    <>
      <section className=''>
        <div className='absolute -z-10 '>
          <Image src={BG} alt="coursebg" className='relative h-52' />
        </div>
        <div className='lg:mx-44 mx-5 py-12'>
          <div className='flex text-white space-x-3 my-2'>
            <h1>Home  &gt; </h1>
            <h1>Shopping cart</h1>
          </div>
          <h1 className='lg:text-5xl text-4xl text-white font-semibold'>Shopping cart</h1>
        </div>
      </section>
      <section className='mt-20 lg:mx-44 mx-5 min-h-96'>
        <div className='mt-20 lg:w-[70%]'>
          <h1 className='text-3xl text-gray-500 font-semibold'>Your cart items</h1>
          <div className='border-b flex justify-around lg:mt-14'>
            <h1>Items</h1>
            <h1>Price</h1>
          </div>
        </div>
        <div></div>
      </section>
    </>
  )
}
