"use client"
import React, { useState } from 'react'
import { BiCommand } from "react-icons/bi";
function Addcorse() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [Level, setLevel] = useState('');
    const [price, setPrice] = useState('');
    const [CourseUrl, setCourseUrl] = useState('');
    const [langauge, setLangauge] = useState('');
    const [expiry, setExpiry] = useState('');
    const [isfree, setIsfree] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');



    const handleOnsubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        if (!title || !description || !category || !Level || !price || !CourseUrl) {
            setError("All field are requires !");
            console.log("All field are requires");
            return;
        }
        const CreatedBy = 'Admin';
        console.log({ title, description, category, Level, price, CourseUrl, langauge, isfree, expiry, CreatedBy })
        try {
            const res = await fetch("/api/courses", ({
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title,
                    description,
                    category, CreatedBy,
                    Level, expiry,
                    price, isfree,
                    CourseUrl, langauge
                }),
            }));
            if (res.ok) {
                setMessage('Course added successfully!');
                setTitle('');
                setDescription('');
                setCategory('');
                setLevel('');
                setPrice('');
                setCourseUrl('');
                setTimeout(() => {
                    setMessage('');
                }, 2000);
            } else {
                setError('Unable to add course.');
            }

        } catch (error) {
            setError("Unable to add");
            console.log("Unable to add")
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
                            {/* message or error message  */}
                            <div className='text-red-500 flex justify-center mt-5 font-semibold'>{error}</div>
                            <div className='text-green-500 flex justify-center mt-5 font-semibold'>{message}</div>
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
                                <div className='flex flex-col lg:flex-row justify-between '>
                                    <label htmlFor="">Course Category</label>
                                    <select value={category} className='lg:w-[70%] p-2 border rounded-md '
                                        onChange={(e) => setCategory(e.target.value)}>
                                        <option value="">select a category</option>
                                        <option value="" disabled>Web Design</option>
                                        <option value="Responsive_Design">Responsive Design</option>
                                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                                        <option value="Reactjs">Reactjs</option>
                                        <option value="HTML & CSS">HTML & CSS</option>
                                        <option value="" disabled>Graphic Design</option>
                                        <option value="Photoshop">Photoshop</option>
                                        <option value="Adobe Illustrator">Adobe Illustrator</option>
                                        <option value="Drawing">Drawing</option>
                                        <option value="Logo Design">Logo Design</option>
                                    </select>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="">Level</label>
                                    <select value={Level} onChange={(e) => setLevel(e.target.value)}
                                        className='lg:w-[70%] p-2 border  rounded-md'>
                                        <option value="">Select level</option>
                                        <option value="Beginner">Beginner</option>
                                        <option value="Indermediate">Indermediate</option>
                                        <option value="Advance">Advance</option>
                                    </select>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="">Langauge</label>
                                    <select value={langauge} onChange={(e) => setLangauge(e.target.value)}
                                        className='lg:w-[70%] p-2 border  rounded-md'>
                                        <option value="">Select langauge</option>
                                        <option value="English">English</option>
                                        <option value="Marathi">Marathi</option>
                                        <option value="Hindi">Hindi</option>
                                    </select>
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="course_prise">Course price</label>
                                    <input type="number" id="course_prise"
                                        className='lg:w-[70%] rounded-md'
                                        placeholder='Course Price'
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div className='lg:relative left-[30%]'>
                                    <input type="checkbox"
                                        value="free"
                                        checked={isfree === 'free'}
                                        onChange={(e) => setIsfree(e.target.value)}
                                    /> check if this is a free course
                                </div>
                                <div className='flex flex-col lg:flex-row justify-between'>
                                    <label htmlFor="courseVideo">Add a Content Url</label>
                                    <input type="url" value={CourseUrl}
                                        onChange={(e) => setCourseUrl(e.target.value)}
                                        className='lg:w-[70%] rounded-md'
                                        placeholder='www.google.com'
                                    />
                                </div>
                                <div className='lg:relative left-[30%]'>
                                    <input
                                        type="radio"
                                        id="lifetime"
                                        name="expiry"
                                        value="Lifetime"
                                        checked={expiry === 'Lifetime'}
                                        onChange={(e) => setExpiry(e.target.value)}
                                    />
                                    <label htmlFor="lifetime" className="mr-2">Lifetime</label>

                                    <input
                                        type="radio"
                                        id="limitedTime"
                                        name="expiry"
                                        value="Limited time"
                                        checked={expiry === 'Limited time'}
                                        onChange={(e) => setExpiry(e.target.value)}
                                    />
                                    <label htmlFor="limitedTime">Limited time</label>
                                </div>
                                <input type="submit" value="Add Course"
                                    className='bg-violet-500 text-white lg:w-[40%] w-full ml-auto' />
                            </form>
                            <div className='text-red-500 flex justify-center mt-5 font-semibold'>{error}</div>
                            <div className='text-green-500 flex justify-center mt-5 font-semibold'>{message}</div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default Addcorse