"use client"
import React, { useState, useRef } from 'react'
import Select from 'react-select'
import NavItem from '@/components/adminDashboard/CourseformNav';
import { BiCommand } from "react-icons/bi";
import { FaPenNib } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { MdInfoOutline } from "react-icons/md";
import Link from 'next/link';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import { BiChevronDown, BiRupee } from 'react-icons/bi'
import { BsCheck2Circle } from "react-icons/bs";
import { PiVideoLight } from "react-icons/pi";
import { RiCheckDoubleFill } from "react-icons/ri";

function AddCourse() {
    const { data: session } = useSession('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [shortdes, setShortDes] = useState('');
    const [category, setCategory] = useState('');
    const [Level, setLevel] = useState('');
    const [price, setPrice] = useState('');
    const [CourseUrl, setCourseUrl] = useState('');
    const [langauge, setLangauge] = useState('');
    const [expiry, setExpiry] = useState('');
    const [isfree, setIsfree] = useState('');
    const [Iscertificate, setIscertificate] = useState('');
    const [CreatedBy, setCreatedBY] = useState('');
    const [creatAs, setCreatAd] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({
        title: '', description: '',
        category: '', Level: '',
        price: '', CourseUrl: '',
        langauge: '', expiry: '',
        isfree: '', Iscertificate: '',
        CreatedBy: '', creatAs: "", image: " ", general: ''
    })

    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1)


    const handleOnsubmit = async (e) => {
        e.preventDefault();
        let newError = {};
        if (!title) newError.title = "Please enter title";
        if (!description) newError.description = "Please enter description";
        if (!category) newError.category = "Please enter category";
        if (!Level) newError.Level = "Please enter Level";
        if (!price) newError.price = "Please enter price";
        if (!CourseUrl) newError.CourseUrl = "Please enter CourseUrl";
        if (!langauge) newError.langauge = "Please enter langauge";
        if (!expiry) newError.expiry = "Please enter expiry";
        if (!isfree) newError.isfree = "Please enter isfree";
        if (!Iscertificate) newError.Iscertificate = "Please enter Iscertificate";
        if (!CreatedBy) newError.CreatedBy = "Please enter CreatedBy";
        if (!creatAs) newError.creatAs = "Please enter creatAs";

        if (Object.keys(newError).length > 0) {
            setErrors(newError);
            setErrors(prev => ({ ...prev, general: 'Enter All fields' }))
        }

        // const AddedBy = {session?.user?.email}
        console.log({ title, description, category, Level, price, CourseUrl, langauge, isfree, expiry, CreatedBy, shortdes, Iscertificate, creatAs, image });
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('shortdes', shortdes);
        formData.append('category', category);
        formData.append('CreatedBy', CreatedBy);
        formData.append('Level', Level);
        formData.append('expiry', expiry);
        formData.append('Iscertificate', Iscertificate);
        formData.append('price', price);
        formData.append('isfree', isfree);
        formData.append('CourseUrl', CourseUrl);
        formData.append('langauge', langauge);
        formData.append('creatAs', creatAs);
        formData.append('image', image);
        try {
            const res = await fetch("/api/add_courses", {
                method: 'POST',
                body: formData
            });
            if (res.ok) {
                setMessage('Course added successfully!');
                setTitle('');
                setShortDes('')
                setDescription('');
                setCategory('');
                setLevel('');
                setPrice('');
                setCourseUrl('');
                setError('');
                setErrors('');
                setCreatAd('');
                setImage(null);
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
    const steps = ['Basic', 'Info', 'Pricing', 'Media', 'Finish']

    const navRef = useRef(null);
    const scrollLeft = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };
    const scrollRight = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    }

    // level  /options for select 
    const levels = [
        { value: 'Beginner', label: 'Beginner' },
        { value: 'Indermediate', label: 'Indermediate' },
        { value: 'Advance', label: 'Advance' }
    ];
    // create as / options for select 
    const courseStatus = [
        { value: "Active course", label: "Active course " },
        { value: "Private course ", label: "Private course" },
        { value: "Upcoming course", label: "Upcoming course " },
    ]

    return (
        <>
            <main className=' lg:flex w-full text-gray-500'>
                <section className='w-full'>
                    <div className='flex flex-col justify-between '>
                        <div className='bg-white lg:h-24 rounded flex  lg:items-center text-gray-500 border shadow'>
                            <h1 className='m-5 text-lg font-semibold flex items-center '>
                                <BiCommand className='mr-2 w-6 h-6' />Add new course
                            </h1>
                        </div>
                        <div className='bg-white  my-4 rounded  border shadow'>
                            <div className='flex justify-between flex-col lg:flex-row rounded-t m-5'>
                                <h1 className='p-2 font-semibold'>COURSE ADDING FORM</h1>
                                <Link href='/admin/course/managecourses'
                                    className='border rounded-full flex justify-center items-center py-2 px-4 hover:bg-violet-500 hover:text-white text-violet-500 border-violet-500'>
                                    &larr;Back to Course list
                                </Link>
                            </div>

                            <div className='flex items-center'>
                                {step > 1 && <IoArrowBackCircleOutline onClick={() => { scrollLeft(), prevStep() }} className='text-violet-500 bg-white w-10' size={30} />}
                                {/* title bar for form field  */}
                                <div ref={navRef} className='bg-gray-200 text-gray-500 flex w-[95%] space-x-5 overflow-scroll lg:overflow-visible'>
                                    {steps.map((label, index) => (
                                        <>
                                            <NavItem key={index} isActive={step === index + 1} onClick={() => setStep(index + 1)} className='w-[20%]'>
                                                <div className='flex items-center justify-center space-x-2 p-3 px-16'>
                                                    {index === 0 && <FaPenNib size={13} />}
                                                    {index === 1 && <MdInfoOutline />}
                                                    {index === 2 && <BiRupee />}
                                                    {index === 3 && <PiVideoLight />}
                                                    {index === 4 && <BsCheck2Circle />}
                                                    <p>{label}</p>
                                                </div>
                                            </NavItem>
                                        </>
                                    ))}
                                </div>
                                {step < 5 && <IoArrowForwardCircleOutline onClick={() => { scrollRight(), nextStep() }} className='text-violet-500 bg-white w-10' size={30} />}

                            </div>
                            {/* form input fields */}
                            <form onSubmit={handleOnsubmit} className='flex flex-col  space-y-5 lg:my-10 lg:mx-52  m-5'>
                                <div className='flex justify-center text-green-500 animate-bounce'>{message}</div>
                                {/* course Basic section  */}
                                {
                                    step == 1 &&
                                    <>
                                        {/* course title  */}
                                        <div className='lg:flex  lg:flex-row  justify-between  items-center'>
                                            <label htmlFor="coursetitle">Course Title<span className='text-red-500'>*</span> :</label>
                                            <input type="text" id="coursetitle"
                                                className={`lg:w-[70%]  w-full ${errors.title && "border-red-500"}`}
                                                placeholder={errors.title ? `${errors.title}` : 'Course title'}
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                            />
                                        </div>
                                        {/* short description  */}
                                        <div className='lg:flex  lg:flex-row  justify-between  '>
                                            <label htmlFor="courseDesc">Short Description<span className='text-red-500'>*</span></label>
                                            <textarea rows={2}
                                                className={`lg:w-[70%] p-2 border w-full ${errors.description && "border-red-500 "}`}
                                                placeholder={errors.shortdes ? `${errors.shortdes}` : 'Short Description'}
                                                value={shortdes}
                                                onChange={(e) => setShortDes(e.target.value)}
                                                id="courseDesc"></textarea>
                                        </div>

                                        {/* course   Description*/}
                                        <div className='lg:flex  lg:flex-row  justify-between  '>
                                            <label htmlFor="courseDesc">Description<span className='text-red-500'>*</span></label>
                                            <textarea rows={3}
                                                className={`lg:w-[70%] p-2 border w-full ${errors.description && "border-red-500 "}`}
                                                placeholder={errors.description ? `${errors.description}` : 'Course Description'}
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                id="courseDesc"></textarea>
                                        </div>
                                        {/* input for dropdown for level  */}
                                        <div className='flex flex-col lg:flex-row justify-between '>
                                            <label htmlFor="">Level <span className='text-red-500'>*</span> </label>
                                            <div className='font-medium lg:w-[70%]'>
                                                <Select options={levels}
                                                    id="level"
                                                    value={levels.find(option => option.value === Level)}
                                                    onChange={(selectedOption) => setLevel(selectedOption.value)}
                                                    placeholder={errors.Level ? `${errors.Level}` : 'Select Level'}
                                                    className={` w-full ${errors.Level && "border-red-500"}`} />
                                            </div>
                                        </div>
                                        {/* input box for langauge */}
                                        <div className='flex flex-col lg:flex-row justify-between '>
                                            <label htmlFor="">Langauge</label>
                                            <select value={langauge} onChange={(e) => setLangauge(e.target.value)}
                                                className={`lg:w-[70%] p-2 border  w-full ${errors.langauge && "border-red-500 "}`}>
                                                <option value="">Select langauge</option>
                                                <option value="English">English</option>
                                                <option value="Marathi">Marathi</option>
                                                <option value="Hindi">Hindi</option>
                                            </select>
                                        </div>
                                        <div className='flex flex-col lg:flex-row justify-between '>
                                            <label htmlFor="">Course Category <span className='text-red-500'>*</span> </label>
                                            <select value={category} className={`lg:w-[70%] border p-2.5 w-full ${errors.category && "border-red-500"}`}
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
                                    </>
                                }

                                {
                                    step == 2 &&
                                    <>
                                        {/* input for creator / instructor name  */}
                                        <div className='flex flex-col lg:flex-row justify-between '>
                                            <label htmlFor="courseVideo">Created By (instructor name)</label>
                                            <input type="text" value={CreatedBy}
                                                onChange={(e) => setCreatedBY(e.target.value)}
                                                className={`lg:w-[70%] p-2 border  w-full ${errors.CreatedBy && "border-red-500 "}`}
                                                placeholder='John Doe'
                                            />
                                        </div>
                                        {/* check box for Certificate  */}
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="Iscertificate "
                                                value="Yes"
                                                checked={Iscertificate === 'Yes'}
                                                onChange={(e) => setIscertificate(e.target.value)}
                                                className='mr-2'
                                            />
                                            <label htmlFor="Iscertificate">Certificate</label>
                                        </div>
                                        {/* create as status  */}
                                        <div className='flex justify-between w-full'>
                                            <label htmlFor="">Create as a</label>
                                            <div className='font-medium lg:w-[70%]'>
                                                <Select options={courseStatus}
                                                    id="level"
                                                    value={courseStatus.find(option => option.value === Level)}
                                                    onChange={(selectedOption) => setCreatAd(selectedOption.value)}
                                                    placeholder={errors.creatAs ? `${errors.creatAs}` : 'Select'}
                                                    className={` w-full ${errors.creatAs && "border-red-500"}`} />
                                            </div>
                                        </div>
                                    </>
                                }
                                {/*course price section */}
                                {
                                    step == 3 &&
                                    <>
                                        {/* input box for course price */}
                                        <div className='flex flex-col lg:flex-row justify-between '>
                                            <label htmlFor="course_prise">Course price</label>
                                            <input type="number" id="course_prise"
                                                className='lg:w-[70%]'
                                                placeholder='Course Price'
                                                value={price}
                                                onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                        {/* input box for isfree  */}
                                        <div className='lg:relative left-[30%]'>
                                            <input type="checkbox"
                                                value="free"
                                                checked={isfree === 'free'}
                                                onChange={(e) => setIsfree(e.target.value)}
                                            /> check if this is a free course
                                        </div>
                                        {/* input for Expiry  */}
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
                                    </>
                                }
                                {/* Course media  section */}
                                {
                                    step == 4 &&
                                    <>
                                        {/* input for Course url  */}
                                        <div className='flex flex-col lg:flex-row justify-between '>
                                            <label htmlFor="courseVideo">Add a Content Url <span className='text-red-500'>*</span></label>
                                            <input type="url" value={CourseUrl}
                                                onChange={(e) => setCourseUrl(e.target.value)}
                                                className={`lg:w-[70%] p-2 border  w-full ${errors.CourseUrl && "border-red-500 "}`}
                                                placeholder='www.google.com'
                                            />
                                        </div>
                                        {/*  input for course image */}
                                        <div className='flex flex-col lg:flex-row justify-between '>
                                            <label htmlFor="courseVideo">Add a Content Image <span className='text-red-500'>*</span></label>
                                            <input type="file"
                                                onChange={(e) => { setImage(e.target.files[0]); }}
                                                className={`lg:w-[70%] p-2 border  w-full ${errors.image && "border-red-500 "}`}
                                            />
                                        </div>
                                    </>
                                }

                                {/* finish code submit      */}
                                {
                                    step == 5 &&
                                    <>
                                        <div className='flex justify-center text-red-500 animate-bounce'> {error}</div>
                                        {/* message or error message  */}
                                        <div className='text-red-500 flex justify-center mt-5 font-semibold animate-bounce'>{errors.general}</div>
                                        <div className='flex flex-col space-y-3 justify-center items-center'>
                                            <RiCheckDoubleFill className='text-violet-500' size={40} />
                                            <h1 className='text-xl text-gray-500 font-semibold'>Thank you !</h1>
                                            <h5 className='text-sm'>You are just one click away</h5>
                                        </div>
                                    </>
                                }
                                {/* submit box  */}

                                <div className='flex justify-evenly mt-10 space-x-2'>
                                    {step > 1 && <button type='button' onClick={prevStep} className='px-4 py-2  hover:bg-cyan-500 bg-white hover:text-white  border border-violet-500  rounded lg:w-[20%] w-full'>Back</button>}
                                    {step < 5 && <button type='button' onClick={nextStep} className='px-4 py-2  hover:bg-cyan-500 bg-white hover:text-white  border border-violet-500  rounded lg:w-[20%] w-full'>Next</button>}
                                    {step == 5 && <button type='submit' className='bg-cyan-500 hover:bg-white hover:text-violet-500 border hover:border-violet-500 text-white rounded lg:w-[20%] w-full'>Submit</button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default AddCourse
