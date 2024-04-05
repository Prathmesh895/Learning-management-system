'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Delete from "@/app/delete/[id]/page";
function UsersList() {
    const [userData, setUserData] = useState([]);
    const [deleteUserId, setDeleteUserId] = useState(null);

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
        console.log(_id)
    };
   

    return (
        <>
            <section>
                <div className='flex justify-between lg:mx-10 mx-2 items-center py-5'>
                    <h1 className="text-xl font-semibold">Students</h1>
                    <Link href="/add"><button className="border border-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out">+ Add New Student</button></Link>
                </div>
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
                                        <button onClick={() => handleDeleteUser(user._id)} className="text-red-500">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            {deleteUserId && <Delete userId={deleteUserId} />}
        </>
    );
}

export default UsersList;
