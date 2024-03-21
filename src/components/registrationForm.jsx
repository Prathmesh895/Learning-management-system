"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import UserLogo from '/public/user.png';
import PassLogo from '/public/3257166.png';
import LogImg from '/public/login-security.gif';
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs'

export default function RegistrationForm() {
    const router = useRouter();
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!fname || !lname || !password || !email) {
            setError('All fields are necessary');
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const resUserexist = await fetch("api/Userexist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });
            const {user} = await resUserexist.json();
            if (user) {
                setError("User exist")
                return;
            }
       
            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    password:hashedPassword,
                    
                }),
            });
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push('/Login')
            } else {
                console.log("User registration Failed")
            }
        } catch (error) {

        }
    }; 
    
    return (
        <main className='md:flex md:justify-center md:mx-28 mx-4 md:mt-20 pb-8'>
            <div className='md:w-1/2 h-[100%] w-[90%] md:flex md:justify-center flex justify-center ml-4'>
                <Image src={LogImg} alt="Login Security" className="md:w-2/3" />
            </div>

            <div className='md:w-1/2 mt-10'>
                <div className='md:w-2/3'>
                    <h1 className="text-3xl font-bold text-gray-500">Sign up<span className="text-indigo-600">!</span></h1><br />
                    <p>Explore, learn, and grow with us. Enjoy a seamless and enriching educational journey. Let's begin!</p><br /><br />
                    {/* Form input fields */}
                    <form onSubmit={handlesubmit} className='flex flex-col space-y-4'>
                        <label htmlFor="name">First name</label>
                        <div className="relative">
                            <input type="text" id="name"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                className="w-full py-3 pl-10 pr-5 rounded-md" placeholder="Enter your first name" />
                            <Image src={UserLogo} className="absolute inset-y-0 left-0 ml-3 mt-3 w-6" alt="User icon" />
                        </div>
                        <label htmlFor="lname">Last name</label>
                        <div className="relative">
                            <input type="text" id="lname"
                               value={lname}
                               onChange={(e) => setLname(e.target.value)}
                                className="w-full py-3 pl-10 pr-5 rounded-md" placeholder="Enter your last name" />
                            <Image src={UserLogo} className="absolute inset-y-0 left-0 ml-3 mt-3 w-6" alt="User icon" />
                        </div>
                        <label htmlFor="email">Your email</label>
                        <div className="relative">
                            <input type="email" id="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                                className="w-full py-3 pl-10 pr-5 rounded-md" placeholder="Enter your email" />
                            <Image src={UserLogo} className="absolute inset-y-0 left-0 ml-3 mt-3 w-6" alt="User icon" />
                        </div>
                        <label htmlFor="password">Password</label>
                        <div className="relative">
                            <input type="password" id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full py-3 pl-10 pr-5 rounded-md" placeholder="Enter your password" />
                            <Image src={PassLogo} className="absolute inset-y-0 left-0 ml-3 mt-3 w-6" alt="Password icon" />
                        </div>
                        <div className='flex items-center'>
                        <input
                                type="checkbox"
                                id="role"
                            />
                            &nbsp;&nbsp;Apply to become an instructor</div>
                        {/* Sign up button for form submit button */}
                        <button type='submit' className="flex justify-center bg-indigo-600 w-[100%] text-white font-bold p-2 rounded">Sign up</button>
                        {error && (
                            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
                                {error}
                            </div>
                        )
                        }
                    </form><br />

                    <h1>Already have an account? <span className="text-blue-600">&nbsp;&nbsp;<Link href='/Login'>Login</Link></span></h1><br />
                    <div className="flex items-center">
                        <hr className="flex-grow border-gray-400 h-0" />
                        <span className="px-4 text-gray-700">Or</span>
                        <hr className="flex-grow border-gray-400 h-0" />
                    </div><br />
                    <div className="flex justify-center bg-indigo-600 text-white font-bold p-2 rounded">Continue with Google</div>
                </div>
            </div>
        </main>
    );
}
