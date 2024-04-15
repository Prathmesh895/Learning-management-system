// "use client"

// import { useState } from "react";

// function Delete({ params }) {
//   const id = params.id;
//   const[message,setMessage]=useState('');

//   const handleRemove = async () => {
//     try {
//       const res = await fetch('/api/register', {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(id),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         console.log('User deleted successfully');
//         setMessage("User deleted successfully");
//         // You may want to redirect the user to another page after deletion
//       } else {
//         console.error(data.message);
//         setMessage(data.message);
//       }
//     } catch (error) {
//       setMessage(data.message);
//       console.error('Error deleting user:', error);
//     }
//   }
//   const handleGoBack = () => {
//     window.history.go(-1);
//   };

//   return (
//     <>
//       <main className="h-screen">
//         <div className="flex justify-center items-center h-screen bg-gray-100">
//           <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold text-red-600 mb-4">Delete Account</h2>
//             <p className="mb-6">You’re going to delete the User Account. Are you sure?</p>
//             <div className="flex justify-end">
//               <button onClick={handleGoBack} className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">No, Keep It.</button>
//               <button onClick={handleRemove} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Yes, Delete!</button>
//             </div>
//             {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default Delete;
'use client'
import { useState, useEffect } from "react";

function Delete({ userId }) {
    // Ensure userId is not undefined before accessing _id property
    const id = userId ? userId : null;
    console.log(id);
    const [message, setMessage] = useState('');

    const handleRemove = async () => {
        try {
            // Ensure userId is not undefined before making the API call
            if (!userId) return;

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
                // You may want to redirect the user to another page after deletion
            } else {
                console.error(data.message);
                // setMessage(data.message);
            }
        } catch (error) {
            // setMessage(data.message);
            console.error('Error deleting user:', error);
        }
    };

    const handleGoBack = () => {
        window.history.go(-1);
    };

    return (
        <>
            <main className="">

                <div className="flex justify-center items-center bg-gray-100">
                    <div className="max-w-lg w-full bg-white  rounded-lg shadow-lg">
                        <div className="h-2 rounded-t bg-violet-600"></div>
                        <h2 className="text-xl font-semibold text-red-600 m-5">Delete Account</h2>
                        <p className="m-5 ">You’re going to delete the User Account. Are you sure?</p>
                        <div className="flex justify-end m-5">
                            <button onClick={handleGoBack} className="px-4 py-2 mr-2 bg-white border   hover:bg-gray-300">No, Keep It.</button>
                            <button onClick={handleRemove} className="px-4 py-2 bg-violet-600 text-white  hover:bg-red-700">Yes, Delete!</button>
                        </div>
                        {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Delete;
