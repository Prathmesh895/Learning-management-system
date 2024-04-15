'use client'
import { RiEditBoxLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import Delete from "@/app/delete/[id]/page";
import Update from '@/app/update/[id]/page'
import Add from '@/app/add/page'
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

    const handleDeleteUser = (_id) => {
        setDeleteUserId(_id);
        console.log("delete", _id)
    };
    const handleupdateUserId = (_id) => {
        setUpdateUserId(_id);
        // console.log("Update",_id)
    }


    return (
        <>
            <div className=' lg:flex lg:flex-col lg:justify-between mx-2'>
                <div className='bg-white lg:h-24 rounded flex   lg:items-center text-gray-500'>
                    <h1 className='m-5 text-lg font-semibold flex items-center '>
                        <BiCommand className='mr-2 w-6 h-6' />Students
                    </h1>
                    <button onClick={() => handleNewStudents()} className="border border-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out">
                        + Add New Student
                    </button>
                </div>
                <div className='bg-white lg:h-96 my-4 rounded  '>
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
                                        <p onClick={() => handleupdateUserId(user._id)}><RiEditBoxLine size={19} /></p>
                                        <button onClick={() => handleDeleteUser(user._id)} className="text-red-500">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {/* on click on add new student it will show add user form */}
            <section ref={clcADDuser} className="absolute top-36 bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded ">
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
            <section ref={clcDeluser}>
                {deleteUserId && <Delete userId={deleteUserId} />}
            </section>
            <section ref={clcUptuser} className="absolute top-36 bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded ">
                {
                    updateUserId &&
                    <>
                        <div className="bg-violet-500 h-3"></div>
                        <Update userId={updateUserId} />
                        <div className="absolute bottom-7  left-8">
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
