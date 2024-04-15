"use client"
import React, { useState, useEffect, useRef } from 'react'
import { RiEditBoxLine } from "react-icons/ri";
import Delete from "@/app/delete/[id]/page";
import Update from '@/app/update/[id]/page'
import Add from '@/app/add/page'
import { toast } from 'react-toastify'
import { BiCommand } from "react-icons/bi";

function page() {
  const [addinstructor, setAddinstructor] = useState('');
  const [userId, setUserId] = useState('');
  const [updateUserId, setUpdateUserId] = useState(null);
  const [userData, setUserData] = useState([]);

  // on click out side hidding menus of useState hook
  const clcADDuser = useRef();
  const clcUptuser = useRef();
  const clcDeluser = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (clcADDuser.current && !clcADDuser.current.contains(e.target)) {
        setAddinstructor(false);
      }
      if (clcUptuser.current && !clcUptuser.current.contains(e.target)) {
        setUpdateUserId(false);
      }
      if (clcDeluser.current && !clcDeluser.current.contains(e.target)) {
        setUserId(false);
      }

    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  //for showing/hidding add new user menu
  const handleNewinstructor = () => {
    setAddinstructor(!addinstructor);
  }
  const handleUpdInstrct = () => {//for showing/hindding update user menu
    setUpdateUserId(!updateUserId);
  }
  const handleDeleteUser = (_id) => {//on click delete getting current user id and storing in it
    setUserId(_id);
  }

  useEffect(() => {
    fetchUser();
  }, []);
  // fetch data from database and show only instructer data
  const fetchUser = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "GET"
      });
      const data = await res.json();
      setUserData(data.Instructor); // Set the fetched user data to state
    } catch (error) {
      console.error("Error fetching Subadmin list:", error);
      toast.error("Error fetching Subadmin list")
    }
  }

  return (
    <>
      <div className=' lg:flex lg:flex-col lg:justify-between mx-2'>
        <div className='bg-white lg:h-24 rounded flex   lg:items-center text-gray-500'>
          <h1 className='m-5 text-lg font-semibold flex items-center '>
            <BiCommand className='mr-2 w-6 h-6' />Instructors
          </h1>
          <button onClick={handleNewinstructor} className="border border-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out">
            + Add Instructor
          </button>
        </div>
        <div className='bg-white lg:h-96 my-4 rounded  '>
          {/* Instructor List data fetched  */}
          <div className="p-4 bg-white">
            <table className="w-full mt-4 border-collapse border">
              <thead>
                <tr className="border">
                  <th className="text-left border px-4 py-2">Sr</th>
                  <th className="text-left border px-4 py-2">Username</th>
                  <th className="text-left border px-4 py-2">Email</th>
                  <th className="text-left border px-4 py-2">Role</th>
                  <th className="border px-4 py-2">Edit</th>
                </tr>
              </thead>
              <tbody>
                {userData.length > 0 && userData.map((user, index) => (
                  <tr key={user._id} className="border">
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{user.fname} {user.lname}</td>
                    <td className="border px-4 py-2">{user.email}</td>
                    <td className="border px-4 py-2">{user.role}</td>
                    <td className="px-4 py-2 flex items-center justify-around">
                      <p onClick={() => handleUpdInstrct(user._id)} ><RiEditBoxLine size={19} /></p>
                      <button onClick={() => handleDeleteUser(user._id)} className="text-red-500">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* on click on add new student it will show add user form */}
          <section ref={clcADDuser} className="absolute top-36 bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded " >
            {
              addinstructor &&
              <>
                <div className="bg-violet-500 h-3"></div>
                <Add />
                <div className="absolute bottom-0 left-5 ">
                  <button onClick={handleNewinstructor} className=" hover:bg-gray-200 font-bold py-2 px-36 border   mb-5">
                    Cancel
                  </button>
                </div>
              </>
            }
          </section>
          {/* onckick update show update user window */}
          <section ref={clcUptuser} className="absolute top-36 bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded ">
            {
              updateUserId &&
              <>
                <div className="bg-violet-500 h-3"></div>
                <Update userId={updateUserId} />
                <div className="absolute bottom-7  left-8">
                  <button onClick={handleUpdInstrct} className=" hover:bg-gray-200 font-bold py-2 px-8 border   mb-5">
                    Cancel
                  </button>
                </div>
              </>
            }
          </section>
          {/* On click show menu for delete the user  */}
          <div ref={clcDeluser}>
            {userId && <Delete userId={userId} />}
          </div>
        </div>

      </div>
    </>
  )
}

export default page
