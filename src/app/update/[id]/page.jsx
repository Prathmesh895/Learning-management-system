"use client"
// import { useSession } from 'next-auth/react';
import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
// import { useRouter } from 'next/navigation';


function UpdateUser({ params }) {
  console.log(params);
  const id = params.id;
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  // const [isRole, setIsRole] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    const confirm=window.confirm("Are you sure want to delete the user ?");
    if(confirm){
    if (!fname || !lname) {
      setError('All fields are necessary');
      return;
    }
  
    try {
      const res = await fetch("/api/register", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          fname,
          lname,
          // email,
          // password,
          // role: isRole
        }),
      });
  
      const data = await res.json();
      if (res.ok) {
        setSuccessMessage('User updated successfully');
        toast.success('User updated successfully')
        setError(null); // Clear any previous error message
        setTimeout(() => {
          // Redirect to previous page
          window.history.back();
        }, 2000);
      } else {
        setError(data.message || 'Failed to update user');
        toast.error(data.message || 'Failed to update user')
      }
    } catch (error) {
      setError('Failed to update user. Please try again later.');
      toast.error('Failed to update user. Please try again later.')
    }}
  };
  
  
  const handleGoBack = () => {
    window.history.go(-1);
  };
  return (
    <>
      <main className='h-screen'>
        <form onSubmit={handleOnsubmit}>
          <div className="flex justify-center items-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-violet-600 mb-4">Update Info</h2>
              <div className="mb-4">
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter First name"
                  className="w-full px-4 py-2 border focus:outline-none focus:border-violet-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Enter Last name"
                  className="w-full px-4 py-2 border focus:outline-none focus:border-violet-600"
                />
               </div>
              {/*<div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border focus:outline-none focus:border-violet-600"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create password"
                  className="w-full px-4 py-2 border focus:outline-none focus:border-violet-600"
                />
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="radio"
                    id="Subadmin"
                    name="role"
                    value="Subadmin"
                    checked={isRole === 'Subadmin'}
                    onChange={(e) => setIsRole(e.target.value)}
                    className="form-checkbox text-blue-400" />
                  <span className="ml-2 text-gray-700">Update as Subadmin</span>
                </label>
              </div>
              <div className="mb-4">
                <label className="inline-flex items-center">
                  <input type="radio"
                    id="Instructor"
                    name="role"
                    value="Instructor"
                    checked={isRole === 'Instructor'}
                    onChange={(e) => setIsRole(e.target.value)}
                    className="form-checkbox text-blue-400" />
                  <span className="ml-2 text-gray-700">Update as Instructor</span>
                </label>
              </div> */}
              <div className='flex'>
                <button onClick={handleGoBack}
                  className="px-4 py-2 mr-2 bg-gray-200 text-gray-700  hover:bg-gray-300">
                  No, Keep It.
                </button>
                <button className=" px-2 py-2 bg-violet-600 text-white  hover:bg-violet-800">
                  Update Details
                </button>
              </div>
              {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}
              {successMessage && <p className="mt-4 text-center text-sm text-green-600">{successMessage}</p>}
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default UpdateUser;

