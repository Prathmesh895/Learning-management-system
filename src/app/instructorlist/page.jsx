'use client'
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiEditBoxLine } from "react-icons/ri";

export default function UsersList() {
  const [userData, setUserData] = useState([]);

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
      console.log("User Data:", data.Instructor); // Ensure the correct property is logged
      setUserData(data.Instructor); // Set the fetched user data to state
    } catch (error) {
      console.error("Error fetching Subadmin list:", error);
    }
  }

  return (
    <>
      <div className="p-4 bg-white overflow-scroll sm:overflow-visible">
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
            {userData.map((user, index) => (
              <tr key={user._id} className="border">
                <td className="border px-4 py-2">{index + 1}</td>
                <td className="border px-4 py-2">{user.fname} {user.lname}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 flex items-center justify-around">
                  <p><Link href={`/update/${user._id}`}><RiEditBoxLine size={19} /></Link></p>
                  <p className="text-red-500"><Link href={`/delete/${user._id}`}>Delete</Link></p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
