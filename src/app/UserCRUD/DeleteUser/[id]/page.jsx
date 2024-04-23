'use client'
import { useState } from "react";

function Delete({ userId }) {
    console.log(userId);
    // Ensure userId is not undefined before accessing _id property
    const id = userId._id ? userId._id : null;
    console.log(userId._id);
    const [message, setMessage] = useState('');

    const handleRemove = async () => {
        try {
            // Ensure userId is not undefined before making the API call
            if (!userId._id) return;

            const res = await fetch('/api/register', {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(id),
            });

            const data = await res.json();
            if (res.ok) {
                console.log('User deleted successfully');
                setMessage("User deleted successfully");
                // Reload the page to show updated data after deletion
                window.location.reload();
            } else {
                console.error(data.message);
                // setMessage(data.message);
            }
        } catch (error) {
            // setMessage(data.message);
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <main className="">

                <div className="flex justify-center items-center bg-gray-100">
                    <div className="lg:w-full bg-white  rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold text-red-600 m-5">Delete Account</h2>
                        <center className="text-red-600"><i>user email:{userId.email}</i></center>
                        <p className="m-5 ">You’re going to delete the User Account. Are you sure?</p>
                        <div className="flex justify-end m-5">
                            <button onClick={handleRemove} className="lg:px-14 px-7 py-2 bg-violet-600 text-white  hover:bg-red-700">Yes, Delete!</button>
                        </div>
                        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Delete;
