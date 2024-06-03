import React from 'react'
import Image from 'next/image'
import Img1 from '/public/h-1-bn-shape-1.png'
import Img2 from '/public/h-1-ban-st.png'
import Img3 from '/public/h-1-bnar-c-1.png'
import Img4 from '/public/h-1-bnar-c-2.png'
import Img5 from '/public/h-1-bnar-c-3.png'
import Img_s1 from '/public/course_thumbnail_default-new_421701072860.jpg'
import Img_s2 from '/public/course_thumbnail_default-new_411701072634.jpg'
import Img_s3 from '/public/course_thumbnail_default-new_401701152520.jpg'
import Img_s4 from '/public/img_s4.jpg'
import Img_s5 from '/public/img_s5.jpg'
import Img_s6 from '/public/img_s6.jpg'
import { FaSearch } from 'react-icons/fa'

function Homepage1() {
  return (
    <main className='md:mx-44'>
{/* section one  */}
      <div className='md:flex md:my-20 md:flex-row-reverse  mb-10'>
        {/* code for image on flex 2 section 1 a */}
        <section className='md:w-1/2'>
          <img src="https://demo.creativeitem.com/academy/uploads/system/home-1.png"
            width={500} height={400} alt="" />
        </section>
        {/* code for include search tab flex 2 section 1 b */}
        <section className='leading-3 md:w-1/2 md:text-[350%] text-4xl   md:mr-0 mr-10 md:ml-0 ml-4 md:mx-20'>
          <div className='font-bold leading-[1.3]' >Start learning from best
            <span className='text-violet-500 font-bold  inline-block md:ml-4'>platform
              <sup><Image className=' inline-block' src={Img1} width={40} height={40} /></sup>
            </span>
          </div>
          <div className='mb-10 mt-3'>
            <p className='md:text-lg text-sm text-gray-400 '>
              Study any topic, anytime. explore thousands of courses for the lowest price ever!</p>
          </div>
          {/* search tab  code  */}
          <form className=' text-sm'>
            <div className="relative border-black-500">
              <input type="text"
                id="fname"
                className=" py-3 md:w-[90%] w-[105%] h-14 bg-white rounded-md"
                placeholder="What do you want to learn"
              />
              <button className="absolute inset-y-2 md:right-20 right-0 flex items-center px-2 h-[70%]   bg-violet-500 text-white rounded-md">
                <FaSearch className="w-4 h-4 mr-2" />
                <span>Search</span>
              </button>
            </div>
          </form>
{/* secction two */}
          <div className='flex justify-between  text-base w-[90%] mt-20'>
            <div className='flex items-center'>
              <h1 className='text-4xl font-bold ml-2'>7+</h1>
              <h1></h1>
              <div className='ml-4'>
                happy <br /> Students
              </div>
            </div>
            <Image src={Img2} alt="img2" width={20} />
            <div className='flex  items-center'>
              <h1 className='text-4xl font-bold'>5+</h1>
              <h1></h1>
              <div className='ml-4'>
                Experience <br /> Instructors
              </div>
            </div>
          </div>
        </section>
      </div>
{/* section third banner */}
      <div className='flex justify-center items-center md:flex-row md:space-x-3 flex-col md:space-y-0 space-y-6 mb-10'>
        {/* section 3a */}
        <div className='h-36 md:h-28 w-[85%] md:w-1/3 shadow-2xl flex flex-col justify-around md:flex md:flex-row md:p-0 p-5 md:items-center bg-white rounded-lg '>
          <Image src={Img3} alt="img3" width={55} height={55} />
          <div className='text-gray-500'>
            <p className='font-semibold'>16 Online courses</p>
            <p>Explore a variety of fresh topics</p>
          </div>
        </div>
        {/* section 3b */}
        <div className='h-36 md:h-28 w-[85%] md:w-1/3 shadow-2xl flex flex-col justify-around md:flex md:flex-row md:p-0 p-5 md:items-center bg-white rounded-lg'>
          <Image src={Img4} alt="img3" width={60} height={60} />
          <div className='text-gray-500'>
            <p className='font-semibold'>Expert indtruction</p>
            <p>Find the right course for you</p>
          </div>
        </div>
        {/* section 3c */}
        <div className='h-36 md:h-28 w-[85%] md:w-1/3 shadow-2xl flex flex-col justify-around md:flex md:flex-row md:p-0 p-5 md:items-center bg-white rounded-lg'>
          <Image src={Img5} alt="img3" width={60} height={60} />
          <div className='text-gray-500'>
            <p className='font-semibold'>Smart solution</p>
            <p>Learn on your schedule</p>
          </div>
        </div>
      </div>
{/* section fourth grid + h1  */}
      <section className='md:flex mb-10'>
        <div className='md:w-1/3 m-4'>
          <p className='text-pink-500 font-semibold'>UPCOMING</p>
          <h1 className='text-3xl font-bold'>Upcoming courses</h1>
          <p className='text-gray-500 text-sm font-semibold'>Discover a world of learning opportunities through our upcoming courses,
             where industry experts and thought leaders will guide you in acquiring new expertise,
              expanding your horizons, and reaching your full potential.
          </p>
        </div>
        <div className='md:w-2/3 md:grid md:grid-cols-3 gap-4 '>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white md:mx-1 mx-6'>
            <Image src={Img_s1} alt="" className='rounded-lg'/>
            <h1 className='font-bold mt-5 mb-2'>Color Theory for designers</h1>
            <p className='text-gray-400'>
            It is a long established fact that a reader 
            will be distracted by the rea...
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white md:mx-1 mx-6'>
            <Image src={Img_s2} alt="" className='rounded-lg'/>
            <h1 className='font-bold mt-5 mb-2'>Blog Masterclass: How to Build A successful</h1>
            <p className='text-gray-400'>
            Let go of self-doubt, embrace optimism, 
            and unleash the limitless pote...
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white md:mx-1 mx-6'>
            <Image src={Img_s3} alt="" className='rounded-lg'/>
            <h1 className='font-bold mt-5 mb-2'>Customer Service English Essentials</h1>
            <p className='text-gray-400'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots in
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white md:mx-1 mx-6'>
            <Image src={Img_s4} alt="" className='rounded-lg'/>
            <h1 className='font-bold mt-5 mb-2'>The Complete Digital Marketing Guide</h1>
            <p className='text-gray-400'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. 
            It has roots...
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white md:mx-1 mx-6'>
            <Image src={Img_s5} alt="" className='rounded-lg'/>
            <h1 className='font-bold mt-5 mb-2'>Color Theory for designers</h1>
            <p className='text-gray-400'>
            It is a long established fact that a reader 
            will be distracted by the rea...
            </p>
          </div>
          <div className='md:h-80  md:my-0 my-4  p-4 rounded-lg bg-white md:mx-1 mx-6'>
            <Image src={Img_s6} alt="" className='rounded-lg'/>
            <h1 className='font-bold mt-5 mb-2'>Color Theory for designers</h1>
            <p className='text-gray-400'>
            It is a long established fact that a reader 
            will be distracted by the rea...
            </p>
          </div>
        </div>
      </section>
      

    </main>
  )
}

export default Homepage1