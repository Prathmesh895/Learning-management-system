"use client"
import React from 'react'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
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
import { FaSearch, FaWordpressSimple, FaRegLightbulb, FaMobileAlt } from 'react-icons/fa'
import { AiOutlineHtml5 } from "react-icons/ai";
import { MdDraw } from "react-icons/md";
import { SiAdobephotoshop, SiAdobeillustrator, SiOpenai, SiBootstrap } from "react-icons/si";
import { IoImageOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import Shape2 from '/public/h-1-bn-shape-2.png'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"


const topcategories = [
  { id: 1, icon: <AiOutlineHtml5 size={40} />, name: "HTML & CSS", noCourses: '3', color: 'bg-cyan-50', text_color: "text-cyan-400", Link: '' },
  { id: 2, icon: <AiOutlineHtml5 size={40} />, name: "Color Theory", noCourses: '3', color: 'bg-red-100', text_color: "text-red-400", Link: '' },
  { id: 3, icon: <SiAdobephotoshop size={40} />, name: "Photoshop", noCourses: '3', color: 'bg-blue-50', text_color: "text-blue-400", Link: '' },
  { id: 4, icon: <FaWordpressSimple size={40} />, name: "WordPress Theme", noCourses: '3', color: 'bg-green-50', text_color: "text-green-400", Link: '' },
  { id: 5, icon: <SiAdobeillustrator size={40} />, name: "Adobe Illustrator", noCourses: '3', color: 'bg-yellow-50', text_color: "text-yellow-400", Link: '' },
  { id: 6, icon: <MdDraw size={40} />, name: "Drawing", noCourses: '3', color: 'bg-purple-50', text_color: "text-purple-400", Link: '' },
  { id: 7, icon: <IoImageOutline size={40} />, name: "Blender", noCourses: '3', color: 'bg-cyan-50', text_color: "text-cyan-400", Link: '' },
  { id: 8, icon: <SiOpenai size={40} />, name: "Sewing", noCourses: '3', color: 'bg-orange-50', text_color: "text-orange-400", Link: '' },
  { id: 9, icon: <BiMoviePlay size={40} />, name: "Motion graphics", noCourses: '3', color: 'bg-pink-50', text_color: "text-pink-400", Link: '' },
  { id: 10, icon: <FaRegLightbulb size={40} />, name: "Lighting Design", noCourses: '3', color: 'bg-indigo-50', text_color: "text-indigo-400", Link: '' },
  { id: 11, icon: <FaMobileAlt size={40} />, name: "Mobile App Design", noCourses: '3', color: 'bg-teal-50', text_color: "text-teal-400", Link: '' },
  { id: 12, icon: <SiBootstrap size={40} />, name: "Bootstrap", noCourses: '3', color: 'bg-gray-50', text_color: "text-gray-400", Link: '' },
]
const frequentlyAskQue = [
  { Que: "What is a Learning Management System (LMS)?", Ans: "A Learning Management System is a software application or platform designed to manage and deliver online educational courses, training programs, and learning content. It provides a centralized system for instructors to create, organize, track, and assess learning materials and activities." },
  { Que: 'What are the key features of an LMS?', Ans: ' Common features of an LMS include course management, content creation and delivery, student enrollment and tracking, assessment and grading tools,communication and collaboration tools, reporting and analytics, and integration with other systems or tools.' },
  { Que: 'How can an LMS benefit educational institutions and organizations?', Ans: ' An LMS offers several benefits, such as: Centralized access to learning materials and resources. Efficient administration and management of courses and learners.Flexibility and scalability in delivering online education or training.Tracking and reporting on learner progress and performance.Improved communication and collaboration among instructors and learners.Cost savings by reducing the need for physical infrastructure.' },
  { Que: 'Is an LMS suitable for both academic and corporate settings?', Ans: 'Yes, an LMS can be used in both academic and corporate environments. In academic settings, it facilitates online learning, course management, and assessment for schools, colleges, and universities. In corporate settings, it supports employee training, onboarding programs, skills development, and compliance training.' },
  { Que: 'Can an LMS integrate with other software or tools?', Ans: 'Yes, many LMS platforms provide integration capabilities. They can integrate with third-party tools like video conferencing systems, content authoring tools, customer relationship management (CRM) software, or human resources management systems (HRMS).' },
]

function Homepage1() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <main className='md:mx-44'>
      {/* section one  */}
      <div className='md:flex md:my-20 md:flex-row-reverse  mb-10 ' data-aos="fade-up">
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
      <div className='flex justify-center items-center md:flex-row md:space-x-3 flex-col md:space-y-0 space-y-6 mb-10' data-aos="fade-right">
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
      <section className='md:flex mb-10' data-aos="fade-up">
        <div className='md:w-1/3 m-4'>
          <p className='text-pink-500 font-semibold'>UPCOMING</p>
          <h1 className='text-3xl font-bold'>Upcoming courses</h1>
          <p className='text-gray-500 text-sm font-semibold'>Discover a world of learning opportunities through our upcoming courses,
            where industry experts and thought leaders will guide you in acquiring new expertise,
            expanding your horizons, and reaching your full potential.
          </p>
        </div>
        <div className='md:w-2/3 md:grid md:grid-cols-3 gap-4 '>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white border shadow md:mx-1 mx-6'>
            <Image src={Img_s1} alt="" className='rounded-lg' />
            <h1 className='font-bold mt-5 mb-2'>Color Theory for designers</h1>
            <p className='text-gray-400'>
              It is a long established fact that a reader
              will be distracted by the rea...
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white border shadow md:mx-1 mx-6'>
            <Image src={Img_s2} alt="" className='rounded-lg' />
            <h1 className='font-bold mt-5 mb-2'>Blog Masterclass: How to Build A successful</h1>
            <p className='text-gray-400'>
              Let go of self-doubt, embrace optimism,
              and unleash the limitless pote...
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white border shadow md:mx-1 mx-6'>
            <Image src={Img_s3} alt="" className='rounded-lg' />
            <h1 className='font-bold mt-5 mb-2'>Customer Service English Essentials</h1>
            <p className='text-gray-400'>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white border shadow md:mx-1 mx-6'>
            <Image src={Img_s4} alt="" className='rounded-lg' />
            <h1 className='font-bold mt-5 mb-2'>The Complete Digital Marketing Guide</h1>
            <p className='text-gray-400'>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots...
            </p>
          </div>
          <div className='md:h-80   md:my-0 my-4 p-4 rounded-lg bg-white border shadow md:mx-1 mx-6'>
            <Image src={Img_s5} alt="" className='rounded-lg' />
            <h1 className='font-bold mt-5 mb-2'>Color Theory for designers</h1>
            <p className='text-gray-400'>
              It is a long established fact that a reader
              will be distracted by the rea...
            </p>
          </div>
          <div className='md:h-80  md:my-0 my-4  p-4 rounded-lg bg-white border shadow md:mx-1 mx-6'>
            <Image src={Img_s6} alt="" className='rounded-lg' />
            <h1 className='font-bold mt-5 mb-2'>Color Theory for designers</h1>
            <p className='text-gray-400'>
              It is a long established fact that a reader
              will be distracted by the rea...
            </p>
          </div>
        </div>
      </section>

      {/* top categories  */}
      <div className='flex items-center flex-col my-5 space-y-1 mt-10' data-aos="fade-up">
        <h1 className='text-4xl font-semibold relative'>Top categories
          <sub> <Image src={Shape2} width={150} /></sub>
        </h1>
        <p className='text-gray-600 text-center mx-5'>These are the most popular courses among listen courses learners worldwide</p>
      </div>
      <div className='lg:grid grid-cols-3 gap-5 my-5 lg:mx-0 mx-5' data-aos="fade-up">
        {
          topcategories.map(category => (
            <div key={category.id} className='bg-violet-50 shadow-lg cursor-pointer rounded flex items-center space-x-5 px-5 py-4 lg:my-0 my-5 border'>
              <span className={`${category.color} ${category.text_color} p-3 rounded-full`}>{category.icon}</span>
              <div>
                <h1 className='text-gray-600 font-semibold'>{category.name}</h1>
                <p>{category.noCourses} Courses</p>
              </div>
            </div>
          ))
        }
      </div>
      {/* Top latest courses */}
      <div className='flex items-center flex-col my-5 mx-5 space-y-1 mt-20'>
        <h1 className='text-4xl font-semibold text-center'>Top 10 Latest courses</h1>
        <sub> <Image src={Shape2} width={150} /></sub>
        <p className='text-gray-600 text-center'>These are the most latest courses among listen courses learners worldwide</p>
      </div>
      <Carousel className='lg:m-0 m-12'>
        <CarouselContent className='lg:p-6'>
          {topcategories.map(category => (
            <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/3">
              <div className='bg-violet-50 shadow-lg cursor-pointer rounded flex flex-col items-center space-x-5 px-5 py-4 lg:my-0 my-5 border'>
                <span className={`${category.color} ${category.text_color} p-3 rounded-full`}>{category.icon}</span>
                <div>
                  <h1 className='text-gray-600 font-semibold'>{category.name}</h1>
                  <p>{category.noCourses} Courses</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* frequently asked quetions  */}
      <div className='flex items-center flex-col my-5 space-y-1 mt-10' data-aos="fade-up">
        <h1 className='text-4xl font-semibold relative text-center'>Frequently asked questions</h1>
        <sub> <Image src={Shape2} width={150} /></sub>
        <p className='text-gray-600 text-center mx-5'>Have something to know? Check here if you have any questions about us.</p>
      </div>
      <Accordion type="single" collapsible className='lg:m-10 m-5' data-aos="fade-up">
          {frequentlyAskQue.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='text-xl font-bold'>{faq.Que}</AccordionTrigger>
              <AccordionContent className='text-lg text-gray-500'>{faq.Ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

    </main>
  )
}

export default Homepage1