"use client"
import React, { useState, useEffect,useRef } from 'react';
import { BiCommand } from "react-icons/bi";
import Add from '@/app/UserCRUD/adduser/page'
import { RiEditBoxLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import DeleteUser from '@/app/UserCRUD/DeleteUser/[id]/page'// import UpdateUser from '@/app/update/[id]/page';
import UpdateUser from '@/app/UserCRUD/UpdateUser/[id]/page';

function AdminList() {
  const [addAdmin, setAddadmin] = useState('');
  const [userData, setUserData] = useState([]);
  const [deleteUserId, setDeleteUserId] = useState(null);
  const [updateUserId, setUpdateUserId] = useState(null);
  const clcADDuser = useRef();
  const clcUptuser = useRef();
  const clcDeluser = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (clcADDuser.current && !clcADDuser.current.contains(e.target)) {
        setAddadmin(false);
      }
      if (clcUptuser.current && !clcUptuser.current.contains(e.target)) {
        setUpdateUserId(false);
      }
      if (clcDeluser.current && !clcDeluser.current.contains(e.target)) {
        setDeleteUserId(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const res = await fetch("/api/register", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await res.json();
      setUserData(data.Subadmin); // Set the fetched user data to state
    } catch (error) {
      toast.error('Error fetching data. Please try again later.');
    }
  }

  const NewAdmin = () => {
    setAddadmin(!addAdmin);
  }
  const handleDeleteAdm = () => {
    setDeleteUserId(!deleteUserId)
  }
  const handleUpdateAdm = () => {
    setUpdateUserId(!updateUserId);
  }
  const handleDeleteUser = (_id,email) => {
    const user1= {
      _id:_id,
      email:email
    }
    setDeleteUserId(user1);
    console.log("delete",user1)

  };
  const handleupdateUserId = (_id, fname,email,lname) => {
    const user = {
      _id:_id,
      name: fname,
      lastname: lname,
      email:email
    };
    setUpdateUserId(user);
    // console.log("Update",_id)
  }
  return (
    <main className=''>
      {/* Adding new subadmin */}

      <div className=' lg:flex lg:flex-col lg:justify-between mx-2'>
        <div className='bg-white lg:h-24 rounded flex  justify-between  items-center text-gray-500'>
          <h1 className='m-5 text-lg font-semibold flex items-center '>
            <BiCommand className='mr-2 w-6 h-6' />ADMINS
          </h1>
          <button onClick={NewAdmin} className="border h-1/2 lg:mr-10 mr-2  border-gray-400 py-2 px-4  text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out">
            + Add SubAdmin
          </button>
        </div>

        {/* subadmin List  */}
        <div className="p-4 bg-white my-4 overflow-scroll sm:overflow-visible">
          <table className="w-full mt-4 ">
            <thead>
              <tr className="border">
                <th className="text-left  px-4 py-2">Sr</th>
                <th className="text-left border px-4 py-2">Username</th>
                <th className="text-left border px-4 py-2">Email</th>
                <th className="text-left border px-4 py-2">Role</th>
                <th className="border px-4 py-2">Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border">
                <td className="border px-4 py-2">#</td>
                <td className="border px-4 py-2">user1</td>
                <td className="border px-4 py-2">user1@gmail.com</td>
                <td className="border px-4 py-2">Admin</td>
                <td className="border px-4 py-2">Super Admin</td>
              </tr>
              {userData.map((user, index) => (
                <tr key={user._id} className="border">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{user.fname} {user.lname}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2 flex items-center justify-around">
                    <button onClick={() => handleupdateUserId(user._id,user.fname, user.email,user.lname)}><RiEditBoxLine size={19} /></button>
                    <button onClick={() => handleDeleteUser(user._id,user.email)} className="text-red-500">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* on click on add new admin it will show add user form */}
        <section ref={clcADDuser} className="absolute top-1/4 shadow-2xl border border-gray-400 bg-white  rounded ">
          {
            addAdmin &&
            <>
              <div className="bg-violet-500 h-3"></div>
              <Add />
              <div className="absolute lg:bottom-0 bottom-10 lg:left-5">
                <button onClick={NewAdmin} className=" hover:bg-gray-200 font-bold py-2 lg:px-36 px-9    lg:mb-5">
                  Cancel
                </button>
              </div>
            </>
          }
        </section>

        {/* for update user  */}
        <section ref={clcUptuser} className="absolute  top-[20%] lg:left-[40%] bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded ">
          {
            updateUserId &&
            <>
              <div className="bg-violet-500 h-3"></div>
              <UpdateUser userId={updateUserId} />
              <div className="absolute bottom-3  left-8">
                <button onClick={handleUpdateAdm} className=" hover:bg-gray-200 font-bold py-2 px-8 border   mb-5">
                  Cancel
                </button>
              </div>
            </>
          }
        </section>
        {/* delete admin  */}
        <section ref={clcDeluser} className="absolute lg:w-[35%] w-[90%] top-1/3 lg:left-1/2 left-[37%] transform -translate-x-1/2 -translate-y-1/2 bg-white lg:mx-0 m-12 shadow-2xl  rounded">
          {deleteUserId && (
            <>
              <div className="bg-violet-500 h-3"></div>
              <DeleteUser userId={deleteUserId} />
              <div className="absolute bottom-0 left-8">
                <button onClick={handleDeleteAdm} className="hover:bg-gray-200 font-bold py-2 lg:px-16 px-8 border mb-5">
                  Cancel
                </button>
              </div>
            </>
          )}
        </section>

      </div>
    </main>

  );
};

export default AdminList;
