'use client'
import { RiEditBoxLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import Delete from "@/app/UserCRUD/DeleteUser/[id]/page";
import Update from '@/app/UserCRUD/UpdateUser/[id]/page'
import Add from '@/app/UserCRUD/adduser/page'
import { BiCommand } from "react-icons/bi";
function StudentList() {
    const [userData, setUserData] = useState([]);
    const [deleteUserId, setDeleteUserId] = useState(null);
    const [updateUserId, setUpdateUserId] = useState(null);
    const [addStudents, setAddStudents] = useState('');
    const handleNewStudents = () => {
        setAddStudents(!addStudents);
    }
    const handleUpdateStudent = () => {
        setUpdateUserId(!updateUserId);
    }
    const handleDeleteStudent = () => {
        setDeleteUserId(!deleteUserId)
    }
    // on click out side hidding menus of useState hook
    const clcADDuser = useRef();
    const clcUptuser = useRef();
    const clcDeluser = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (clcADDuser.current && !clcADDuser.current.contains(e.target)) {
                setAddStudents(false);
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
            const res = await fetch("/api/register");
            const data = await res.json();
            setUserData(data.students);
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    }

    const handleDeleteUser = (_id,email) => {
        const user1= {
            _id:_id,
            email:email
          }
        setDeleteUserId(user1);
        console.log("delete", user1)
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
        <>
            <div className=' lg:flex lg:flex-col lg:justify-between mx-2'>
                <div className='bg-white lg:h-24 rounded flex   items-center text-gray-500 justify-between'>
                    <h1 className='m-5 text-lg font-semibold flex items-center '>
                        <BiCommand className='mx-4 w-6 h-6' />Students
                    </h1>
                    <button onClick={() => handleNewStudents()} className="border  lg:mr-10 mr-2  border-violet-500 py-2 px-4 rounded-full  text-violet-500 hover:bg-violet-500 hover:text-white  transition duration-300 ease-in-out">
                        + Add New Student
                    </button>
                </div>
                {/* Student list  */}
                <div className='bg-white lg:h-96 my-4 rounded  overflow-scroll sm:overflow-visible'>
                <section>
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
                                        <p onClick={() => handleupdateUserId(user._id,user.fname, user.email,user.lname)}><RiEditBoxLine size={19} title="Edit"/></p>
                                        <button onClick={() => handleDeleteUser(user._id,user.email)} className="text-red-500">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {/* on click on add new student it will show add user form */}
            <section ref={clcADDuser} className="absolute top-1/4 left-1/4  bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded ">
                {
                    addStudents &&
                    <>
                        <div className="bg-violet-500 h-3"></div>
                        <Add />
                        <div className="absolute bottom-0 left-5 ">
                            <button onClick={handleNewStudents} className=" hover:bg-gray-200 font-bold py-2 px-36 border   mb-5">
                                Cancel
                            </button>
                        </div>


                    </>
                }
            </section>
            <section ref={clcDeluser} className="absolute lg:w-[35%] w-[90%] top-1/3 lg:left-1/2 left-[37%] transform -translate-x-1/2 -translate-y-1/2 bg-white lg:mx-0 m-12 shadow-2xl  rounded">
          {deleteUserId && (
            <>
              <div className="bg-violet-500 h-3 rounded-t"></div>
              <Delete userId={deleteUserId} />
              <div className="absolute bottom-0 left-8">
                <button onClick={handleDeleteStudent} className="hover:bg-gray-200 font-bold py-2 lg:px-16 px-8 border mb-5">
                  Cancel
                </button>
              </div>
            </>
          )}
        </section>
            <section ref={clcUptuser} className="absolute  top-[20%] lg:left-[40%] bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded  ">
                {
                    updateUserId &&
                    <>
                        <div className="bg-violet-500 h-3"></div>
                        <Update userId={updateUserId} />
                        <div className="absolute bottom-3  left-8">
                            <button onClick={handleUpdateStudent} className=" hover:bg-gray-200 font-bold py-2 px-8 border   mb-5">
                                Cancel
                            </button>
                        </div>

                    </>
                }
            </section></div>
            </div>
        </>
    );
}

export default StudentList;
