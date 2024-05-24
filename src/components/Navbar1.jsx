"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Logo from '/public/cropped-New-logo-File.png';
import { toast } from 'react-toastify';

 function Navbar1() {
    const [isopen, setIsOpen] = useState(false);
    const { data: session, status } = useSession();
    const router = useRouter();
    function handleChange() {
         setIsOpen(!isopen);
     }

    const handleSignOut = async () => {
        await signOut();
        router.push('/');
        toast.success("Logout Sucessesfully")
    };

    const navElements = [
        { title: 'Courses', href: '/courses' },
        { title: 'Courses bundle', href: '/Coursesbundle' },
        { title: 'Bootcamps', href: '/Bootcamps' },
        { title: 'Team training', href: '/Team training' },
        { title: 'Ebook', href: '/Ebook' },
        { title: 'Find tutor', href: '/Findtutor' },
        { title: 'More', href: '/More' },
        { title: 'Cart', href: '/cart' }
    ];

    return (
        <main className='border-b border-gray-300'>
            <nav className='p-5 md:mx-36 font-semibold '>
                <div className=' md:block hidden'>
                    <ul className='flex justify-around items-center '>
                        <li><Link href='/'><Image src={Logo} alt="company" className='w-28' /></Link></li>
                        {navElements.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href}>{link.title}</Link>
                            </li>
                        ))}
                        {status === 'loading' ? (
                                <li>Loading...</li>
                            ) : session ? (
                                <>
                                <li><span className="font-bold">{session?.user?.name}</span></li>
                                <li><span className="font-bold">{session?.user?.email}</span></li>
                                <li><button onClick={handleSignOut} className="font-bold">Log Out</button></li>
                            </>
                            ) : (
                                <>
                                <li><Link href='/Login'>Login</Link></li>
                                <li><Link href='/register'>Join now</Link></li>
                            </>
                            )}
                    </ul>
                </div>
                <div className='md:hidden flex justify-between'>
                    <h1><Link href='/'><Image src={Logo} alt="company" className='w-28' /></Link></h1>
                    <img src="" alt="" />
                    <button onClick={handleChange}>
                        <AiOutlineMenu size={27} />
                    </button>
                    <div className={isopen ? "fixed left-0 top-0 w-[90%] h-screen z-50 bg-white ease-in duration-500" : "fixed left-[-100%] top-0 p-6 bg-slate-500"}>
                        <div className='p-3 justify-end flex ' onClick={handleChange}>
                            <AiOutlineClose className='border bg-white p-2 rounded-full' size={40} />
                        </div>
                        <ul className="flex flex-col justify-center mx-4 ">
                            {status == 'loading' ? (
                                <li>Loading...</li>
                            ) : session ? (
                                <>
                                    <li className='flex justify-center border bg-purple-600 rounded text-white p-2 mx-5'><span className="font-bold">{session?.user?.name}</span></li>
                                    <li className='flex justify-center border rounded-b border-gray-400 text-gray-600 bg-indigo-50  p-2 m-5'><span className="font-bold">{session?.user?.email}</span></li>
                                    <li className='flex justify-center border rounded-b border-gray-400 text-gray-600 bg-indigo-50  p-2 m-5'><button onClick={handleSignOut} className="font-bold">Log Out</button></li>
                                </>
                            ) : (
                                <>
                                    <li className='flex justify-center border bg-purple-600 rounded text-white p-2 mx-5'><Link href='/register'>Sign up</Link></li>
                                    <li className='flex justify-center border rounded-b border-gray-400 text-gray-600 bg-indigo-50  p-2 m-5'><Link href='/Login'>Login</Link></li>
                                </>
                            )}
                            <li><Link className='flex space-x-1 items-center p-3' href=''>
                                <img src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" alt="" className='w-5 h-5 ' /><span className='font-semibold'>Cart</span></Link>
                            </li>
                            <li><Link className='flex space-x-1 items-center p-3' href=''>
                                <img src="https://cdn-icons-png.flaticon.com/128/763/763331.png" alt="" className='w-4 h-4 ' /><span className='font-semibold'>Categories</span></Link>
                            </li>
                            <li><Link className='flex space-x-1 items-center p-3' href=''>
                                <img src="https://cdn-icons-png.flaticon.com/128/10525/10525627.png" alt="" className='w-5 h-5 ' /><span className='font-semibold'>Course bundles</span></Link>
                            </li>
                            <li><Link className='flex space-x-1 items-center p-3' href=''>
                                <img src="https://cdn-icons-png.flaticon.com/128/3514/3514491.png" alt="" className='w-5 h-5 ' /><span className='font-semibold'>Bootcamp</span></Link>
                            </li>
                            <li><Link className='flex space-x-1 items-center p-3' href=''>
                                <img src="https://cdn-icons-png.flaticon.com/128/1204/1204035.png" alt="" className='w-5 h-5 ' /><span className='font-semibold'>Team training</span></Link>
                            </li>
                            <li><Link className='flex space-x-1 items-center p-3' href=''>
                                <img src="https://cdn-icons-png.flaticon.com/128/2915/2915751.png" alt="" className='w-5 h-5 ' /><span className='font-semibold'>Ebook</span></Link>
                            </li>
                            <li><Link className='flex space-x-1 items-center p-3' href=''>
                                <img src="https://cdn-icons-png.flaticon.com/128/33/33356.png" alt="" className='w-5 h-5 ' /><span className='font-semibold'>Find a tutor</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </main >
    );
}

export default Navbar1;

