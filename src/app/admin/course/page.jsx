"use client"
import React, { useState } from 'react'
import { BiCommand } from "react-icons/bi";
function Addcorse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    // const[price,setPrice]=useState('');

    const handleOnsubmit = (e) => {
        e.preventDefault();

        try {
            const res = fetch("/api/courses", ({

            }))
        } catch (error) {

        }

    }
    return (
        <>
            <main className=' lg:flex w-full text-gray-500'>
                <section className='w-full'>
                    <div className='flex flex-col justify-between '>
                        <div className='bg-white lg:h-24 rounded flex  lg:items-center text-gray-500'>
                            <h1 className='m-5 text-lg font-semibold flex items-center '>
                                <BiCommand className='mr-2 w-6 h-6' />Add new course
                            </h1>
                        </div>
                        <div className='bg-white  my-4 rounded  '>
                            <div className='bg-slate-400 rounded-t'>
                            <h1 className=' text-white p-2'>COURSE ADDING FORM</h1>
                            </div>
                            
                            {/* form input fields */}
                            <form onSubmit={handleOnsubmit} className='flex flex-col space-y-5 lg:my-10 lg:mx-36 m-5'>
                                <div className='lg:flex  lg:flex-row flex-col justify-between'>
                                    <label htmlFor="coursetitle">Course Title</label>
                                    <input type="text" id="coursetitle"
                                        className='lg:w-[70%] w-full rounded-md'
                                        placeholder='Course title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="courseDesc">Description</label>
                                    <input type="text" id="courseDesc"
                                        className='lg:w-[70%] rounded-md'
                                        placeholder='Course Description'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="">Course Category</label>
                                    <select name="" id="" className='lg:w-[70%] p-2 border rounded-md'>
                                        <option value="">select a category</option>
                                        <option value="HTML">HTML</option>
                                        <option value="CSS">CSS</option>
                                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                                    </select>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="">Level</label>
                                    <select name="" id="" className='lg:w-[70%] p-2 border  rounded-md'>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Indermediate">Indermediate</option>
                                        <option value="Advance">Advance</option>
                                    </select>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="course_prise">Course price</label>
                                    <input type="number" name="" id="course_prise"
                                        className='lg:w-[70%] rounded-md'
                                        placeholder='Course Price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="courseVideo">Add a Content</label>
                                    <input type="file" name="" id=""
                                        className='lg:w-[70%] rounded-md'
                                    />
                                </div>
                                <input type="submit" value="Submit"
                                    className='bg-violet-500 text-white lg:w-[40%] w-full ml-auto' />
                            </form>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default Addcorse