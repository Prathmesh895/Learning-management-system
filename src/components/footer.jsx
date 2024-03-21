import Image from 'next/image';
import Logo from '/public/cropped-New-logo-File.png'
import Link from 'next/link';

function footer() {
  return (
    <main className='bg-gray-950' >
      <section className='bg-gray-950  text-white p-2 md:px-28 md:flex md:justify-center'>
        <div className='md:w-1/3'>
          <div className='md:w-[40%] w-[40%] my-4'>
            <Image src={Logo} alt="cmopany logo" />
          </div>
          <h1 className='text-gray-400 text-sm '>Study any topic, anytime. explore thousands of courses for the lowest price ever!</h1>
        </div>
        {/* Navigation links in footer right side/bottom */}
        <div className='flex justify-between py-4 md:w-1/2'>
          <div className='w-[33%] '> {/* section 1*/}
            <h1 className='mb-3'>Top <br /> catogories</h1>
            <ul className='text-sm text-gray-400 space-y-3'>
              <li>HTML & CSS</li>
              <li>Color Theory</li>
              <li>Photoshop</li>
              <li>WordPress <br />Theme</li>
              <li>Adobe <br />Illustrator</li>
              <li>Bootstrap</li>
              <li></li>
            </ul>
          </div>
          <div className='w-[33%]'>   {/* section 2*/}
            <h1 className='mb-3'>Useful <br /> links</h1>
            <ul className='text-sm text-gray-400 space-y-3'>
              <li>Become an <br />instructor</li>
              <li>Blog</li>
              <li>All courses</li>
              <li><Link href='/register'>Sign up</Link></li>
            </ul>

          </div>
          <div className='w-[33%] '>   {/* section 3*/}
            <h1 className='mb-3'>Help</h1>
            <ul className='text-sm text-gray-400 space-y-3'>
              <li>Contact</li>
              <li>About us</li>
              <li>Privacy policy</li>
              <li>Terms and <br />condition</li>
              <li>Faq</li>
              <li>Refund policy</li>
            </ul>
          </div>
        </div>
      </section>
      <div className='md:flex md:justify-center md:mx-52 md:flex-col md:w-1/3 pb-8'>
        <h1 className='text-gray-400 mx-4'>Subscribe to our newsletter</h1>
        <form className="relative">
          <input
            type="text"
            name="input"
            placeholder="Enter your email address"
            className="bg-transparent border-b border-gray-500 text-white outline-none focus:border-blue-500 px-4 py-2 w-64"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-4 text-gray-500 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>
      </div>

    </main>
  )
}

export default footer