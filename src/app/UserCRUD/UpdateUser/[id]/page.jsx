"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function UpdateUser({ userId,user }) {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [error, setError] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  console.log("user id",userId);
  // console.log("user name",us);
  // console.log("user email",email);
  

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    if (!fname || !lname) {
      setError('All fields are necessary');
      toast.error('All fields are necessary')
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
          fname,
          lname,
        }),
      });
      const data = await res.json();
      if (res.ok) {

        setSuccessMessage('User updated successfully');
        toast.success('User updated successfully')
      } else {
        setError(data.message || 'Failed to update user');
        toast.error(data.message || 'Failed to update user')
      }
    } catch (error) {
      setError('Failed to update user. Please try again later.');
      toast.error('Failed to update user. Please try again later.')
    }
  };

  return (
    <>
      <main className=''>
        <form onSubmit={handleOnsubmit} className=''>
          <div className="flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-violet-600 mb-4">Update Info</h2>
             <center className='text-green-700'><i>User email: {userId.email}</i></center>
              {error && <p className="mt-4 text-center text-sm text-red-600">{error}</p>}

              <div className="mb-4">
              {userId.name}
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Enter First name"
                  className="w-full px-4 py-2 "
                />
              </div>
              <div className="mb-4">
              {userId.lastname}
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Enter Last name"
                  className="w-full px-4 py-2 "
                />
              </div>
              <div className='flex justify-end'>
                <button className=" px-2 py-2 bg-violet-600 text-white  hover:bg-violet-800">
                  Update Details
                </button>
              </div>
              {successMessage && <p className="mt-4 text-center text-sm text-green-600">{successMessage}</p>}
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default UpdateUser;

