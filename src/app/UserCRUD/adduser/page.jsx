"use client"
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

function AddUser() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRole, setIsRole] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleOnsubmit = async (e) => {
        e.preventDefault();
        if (!fname || !lname || !email || !password) {
            toast.error("Please Enter the Details");
            setError("Please Enter the Details");
            return;
        }
        if (!isRole) {
            toast.error("Please select the role");
            setError("Please select the role");
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        try {
            const resUserexist = await fetch("/api/Userexist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email}),
            });
            const {user} = await resUserexist.json();
            if (user) {
                setError("User exist")
                toast.error("User Already Exist");
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
                    password: hashedPassword,
                    role: isRole
                }),
            });
            if (res.ok) {
                toast.success("User updated Successfully")
                router.reload();
            } else {
                toast.error("User registration Failed")
            }
        } catch (error) {
            toast.error("User registration Failed")
        }
    };

    return (
        <section className="  flex justify-center items-start">
            <form onSubmit={handleOnsubmit} className="space-y-4 lg:m-0 m-5 p-5  bg-white ">
                <center><h1 className='text-2xl'>Add a new user</h1></center>
                {/* Display error message */}
                <center>{error && <p className="text-red-500">{error}</p>}</center>
                <div className="flex flex-col lg:flex-row lg:space-x-5">
                    <div className="">
                        <label htmlFor="fname">First name</label>
                        <input
                            type="text"
                            id="fname"
                            className="w-full py-2 border-gray-400 border shadow"
                            placeholder="Enter your First name"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="lname">Last name</label>
                        <input
                            type="text"
                            id="lname"
                            className="w-full py-2 border-gray-400 border shadow"
                            placeholder="Enter your last name"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                        />
                    </div>
                </div>
                <h1 className="flex justify-center mt-6 mb-3 text-lg">Login Credentials</h1>
                <div className="flex flex-col lg:flex-row lg:space-x-5">
                    <div className="w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full py-2 border-gray-400 border shadow"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full py-2 border-gray-400 border shadow"
                            placeholder="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex lg:space-x-5 flex-col lg:flex-row '>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Subadmin"
                            checked={isRole === 'Subadmin'}
                            onChange={(e) => setIsRole(e.target.value)}
                        />
                        <span className="ml-2 text-gray-700">Add as Subadmin</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Instructor"
                            checked={isRole === 'Instructor'}
                            onChange={(e) => setIsRole(e.target.value)}
                        />
                        <span className="ml-2 text-gray-700">Add as Instructor</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="student"
                            checked={isRole === 'student'}
                            onChange={(e) => setIsRole(e.target.value)}
                        />
                        <span className="ml-2 text-gray-700">Add as Student</span>
                    </label>
                </div>
                <div className='flex justify-end space-x-5 lg:ml-5'>
                    <button className="hover:bg-gray-200 hover:text-black bg-violet-500 font-bold text-white py-2 px-7 border w-1/2 mt-2">
                        Submit
                    </button>
                </div>
                
            </form>
            

        </section>
    );
}

export default AddUser;
