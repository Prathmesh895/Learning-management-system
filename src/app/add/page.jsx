// "use client"


// //Add new user it is option for only admin
// import React, { useState } from 'react';
// import bcrypt from 'bcryptjs';
// import { toast } from 'react-toastify';

// function AddUser() {
//     const [fname, setFname] = useState('');
//     const [lname, setLname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isRole, setIsRole] = useState('');

//     const handleOnsubmit = async (e) => {
//         e.preventDefault();
//         if (!fname || !lname || !email || !password) {//all fields are important to fill all
//             toast.error("Please Enter the Details")
//             return;
//         }
//         if (!isRole) {
//             toast.error("Please select the role")
//             return;
//         }
//         const hashedPassword = await bcrypt.hash(password, 10); //hash password for not showing in dev window
//        //posting data to database,the data received from form
//         try {
//             const resUserexist = await fetch("api/Userexist", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({email}),
//             });
//             const {user} = await resUserexist.json();
//             if (user) {
//                 setError("User exist")
//                 return;
//             }
//             const res = await fetch('/api/register', {
//                 method: "POST",
//                 headers: {
//                     "Content-type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     fname,
//                     lname,
//                     email,
//                     password: hashedPassword,
//                     role: isRole
//                 }),
//             });
//             if (res.ok) {
//                 const form = e.target;
//                 form.reset();
//                 toast.success("User updated Successfully")
//                 window.history.go(-1);
//             } else {
//                 toast.error("User registration Failed")
//             }
//         } catch (error) {
//             toast.error("User registration Failed")
//         }
//     };


//     return (
//         <section className="  flex justify-center items-start h-screen lg:mt-20">
//             <form onSubmit={handleOnsubmit} className="space-y-4 lg:m-0 m-5 p-5 lg:w-1/2 bg-white shadow-2xl">
// {/* Input field for first & last name and email & password */}
//                 <div className="flex flex-col lg:flex-row lg:space-x-5">
//                     <div className="w-full">
//                         <label htmlFor="fname">First name</label>
//                         <input
//                             type="text"
//                             id="fname"
//                             className="w-full py-2 border-gray-400 border shadow"
//                             placeholder="Enter your First name"
//                             value={fname}
//                             onChange={(e) => setFname(e.target.value)}
//                         />
//                     </div>
//                     <div className="w-full">
//                         <label htmlFor="lname">Last name</label>
//                         <input
//                             type="text"
//                             id="lname"
//                             className="w-full py-2 border-gray-400 border shadow"
//                             placeholder="Enter your last name"
//                             value={lname}
//                             onChange={(e) => setLname(e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <h1 className="flex justify-center mt-6 mb-3 text-lg">Login Credentials</h1>
//                 <div className="flex flex-col lg:flex-row lg:space-x-5">
//                     <div className="w-full">
//                         <label htmlFor="email">Email</label>
//                         <input
//                             type="email"
//                             id="email"
//                             className="w-full py-2 border-gray-400 border shadow"
//                             placeholder="Enter your Email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="w-full">
//                         <label htmlFor="password">Password</label>
//                         <input
//                             type="password"
//                             id="password"
//                             className="w-full py-2 border-gray-400 border shadow"
//                             placeholder="Enter your Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                 </div>
// {/* Updating as Student Instructor Subadmin Radio button  */}
//                 <div className='flex lg:space-x-5 flex-col lg:flex-row '>
//                     <label>
//                         <input
//                             type="radio"
//                             name="role"
//                             value="Subadmin"
//                             checked={isRole === 'Subadmin'}
//                             onChange={(e) => setIsRole(e.target.value)}
//                         />
//                         <span className="ml-2 text-gray-700">Update as Subadmin</span>
//                     </label>
//                     <label>
//                         <input
//                             type="radio"
//                             name="role"
//                             value="Instructor"
//                             checked={isRole === 'Instructor'}
//                             onChange={(e) => setIsRole(e.target.value)}
//                         />
//                         <span className="ml-2 text-gray-700">Update as Instructor</span>
//                     </label>
//                     <label>
//                         <input
//                             type="radio"
//                             name="role"
//                             value="student"
//                             checked={isRole === 'student'}
//                             onChange={(e) => setIsRole(e.target.value)}
//                         />
//                         <span className="ml-2 text-gray-700">Update as Student</span>
//                     </label>
//                 </div>
// {/* button for submiting form or go back to previous window */}
//                 <div className='flex space-x-5'>
//                 <button onClick={() => window.history.go(-1)} className="hover:bg-gray-200 font-bold py-2 px-7 border w-full mt-2">Cancel</button>
//                 <button className="hover:bg-gray-200 hover:text-black bg-violet-500 font-bold text-white py-2 px-7 border w-full mt-2">
//                     Submit
//                 </button>
//                 </div>
                
//             </form>
//         </section>
//     );
// }

// export default AddUser;


"use client"
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';

function AddUser() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRole, setIsRole] = useState('');
    const [error, setError] = useState('');

    const handleOnsubmit = async (e) => {
        e.preventDefault();
        if (!fname || !lname || !email || !password) {
            toast.error("Please Enter the Details")
            return;
        }
        if (!isRole) {
            toast.error("Please select the role")
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
                const form = e.target;
                form.reset();
                toast.success("User updated Successfully")
                window.history.go(-1);
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
                <div className="flex flex-col lg:flex-row lg:space-x-5">
                    <div className="w-full">
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
                    <div className="w-full">
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
                        <span className="ml-2 text-gray-700">Update as Subadmin</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="Instructor"
                            checked={isRole === 'Instructor'}
                            onChange={(e) => setIsRole(e.target.value)}
                        />
                        <span className="ml-2 text-gray-700">Update as Instructor</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="role"
                            value="student"
                            checked={isRole === 'student'}
                            onChange={(e) => setIsRole(e.target.value)}
                        />
                        <span className="ml-2 text-gray-700">Update as Student</span>
                    </label>
                </div>
                <div className='flex lg:justify-end space-x-5 ml-5'>
                    {/* <button onClick={() => window.history.go(-1)} className="hover:bg-gray-200 font-bold py-2 px-7 border w-full mt-2">Cancel</button> */}
                    <button className="hover:bg-gray-200 hover:text-black bg-violet-500 font-bold text-white py-2 px-7 border w-1/2 mt-2">
                        Submit
                    </button>
                </div>
                {/* Display error message */}
                {error && <p className="text-red-500">{error}</p>}
            </form>
            

        </section>
    );
}

export default AddUser;
