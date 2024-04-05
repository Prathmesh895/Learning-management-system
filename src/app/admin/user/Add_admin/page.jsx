"use client"
import React, { useState } from 'react';
import Subadminlist from '@/app/subadmin_list/page'
import Link from 'next/link';
import Add from '@/app/add/page'

function AdminList() {
  const [addAdmin,setAddadmin]= useState('')
  const NewAdmin=()=>{
    setAddadmin(!addAdmin);
}

  return (
    <main className='lg:h-screen'>
      {/* Adding new subadmin */}
      <div className='flex justify-between lg:mx-10 mx-2 items-center py-5'>
      <h1 className="text-xl font-semibold ">ADMINS</h1>
          <button onClick={NewAdmin} className="border border-gray-400 py-2 px-4 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out">
            + Add SubAdmin
          </button>
      </div>
      <div> <Subadminlist /></div>
      {/* on click on add new admin it will show add user form */}
      <section className="absolute top-36 bg-white lg:mx-0 mx-2 shadow-2xl border border-gray-400 rounded ">
                {
                  addAdmin &&
                   <>
                   <div className="bg-violet-500 h-3"></div>
                  <Add/> 
                 <div className="absolute bottom-0 left-5 ">
                 <button onClick={NewAdmin} className=" hover:bg-gray-200 font-bold py-2 px-36 border   mb-5">
                        Cancel
                    </button>
                 </div>
                  
                    
                  </>  
                }
            </section>
    </main>

  );
};

export default AdminList;
