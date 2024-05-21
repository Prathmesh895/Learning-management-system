"use client"
import React, { useState } from 'react'
import NavItem from '@/components/adminDashboard/CourseformNav';
import { BiCommand } from "react-icons/bi";
import { FaPenNib } from "react-icons/fa";
import { useSession } from 'next-auth/react';
import { MdInfoOutline } from "react-icons/md";
import Link from 'next/link';
import { ImArrowRight, ImArrowLeft } from "react-icons/im";
import { BiChevronDown, BiRupee } from 'react-icons/bi'
import { BsCheck2Circle } from "react-icons/bs";
import { PiVideoLight } from "react-icons/pi";
import { RiCheckDoubleFill } from "react-icons/ri";

function Addcorse() {
    const { data: session } = useSession('');
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
    const [Iscertificate, setIscertificate] = useState('');
    const [CreatedBy, setCreatedBY] = useState('')
    const [error, setError] = useState('');
    const [errors, setErrors] = useState({
        title: '', description: '',
        category: '', Level: '',
        price: '', CourseUrl: '',
        langauge: '', expiry: '',
        isfree: '', Iscertificate: '',
        CreatedBy: '', general: ''
    })
    const [showcategory, setShowCategory] = useState(false);
    const [activeItem, setActiveItem] = useState('Basic');
    const [basic, setBasic] = useState(true);
    const [info, setInfo] = useState('');
    const [Addprice, setAddPrice] = useState('');
    const [media, setMedia] = useState('');
    const [finish, setFinish] = useState('');
    const handleBasic = () => {
        setBasic(!basic);
        setInfo(null);
        setAddPrice(null);
        setMedia(null);
        setFinish(null);
    }
    const handleInfo = () => {
        setInfo(!info);
        setBasic(null);
        setAddPrice(null);
        setMedia(null);
        setFinish(null);
    }
    const handlePrice = () => {
        setAddPrice(!Addprice);
        setInfo(null);
        setBasic(null);
        setMedia(null);
        setFinish(null);
    }
    const handleMedia = () => {
        setMedia(!media);
        setInfo(null);
        setBasic(null);
        setAddPrice(null);
        setFinish(null);
    }
    const handleFinish = () => {
        setFinish(!finish);
        setMedia(null);
        setInfo(null);
        setBasic(null);
        setAddPrice(null);
    }

    const handleOnshowCategory = () => {
        setShowCategory(!showcategory);
    }
    const handleOnsubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
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

        if (Object.keys(newError).length > 0) {
            setErrors(newError);
            setErrors(prev => ({ ...prev, general: 'Enter All fields' }))
        }

        // const AddedBy = {session?.user?.email}
        console.log({ title, description, category, Level, price, CourseUrl, langauge, isfree, expiry, CreatedBy })
        try {
            const res = await fetch("/api/add_courses", ({
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

    const handleClick = (name) => {
        setActiveItem(name);
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
                            <div className='flex justify-between flex-col lg:flex-row rounded-t m-5'>
                                <h1 className='p-2 font-semibold'>COURSE ADDING FORM</h1>
                                <Link href='/admin/course/managecourses'
                                    className='border rounded-full flex items-center px-4 hover:bg-violet-500 hover:text-white text-violet-500 border-violet-500'>
                                    &larr;Back to Course list
                                </Link>
                            </div>
                            {/* title bar for form field  */}
                            <div className='bg-gray-200 text-gray-500 flex space-x-8  mx-6 overflow-scroll lg:overflow-visible'>
                                <NavItem isActive={activeItem === 'Basic'} onClick={() => { handleClick('Basic'), handleBasic() }} className='w-[20%]'>
                                    <div className='flex items-center justify-center  space-x-2 p-3 px-16'><FaPenNib size={13} /> <p>Basic</p></div>
                                </NavItem>
                                <NavItem isActive={activeItem === 'Info'} onClick={() => { handleClick('Info'), handleInfo() }} className='w-[20%]'>
                                    <div className='flex items-center justify-center  space-x-2 p-3 px-16'><MdInfoOutline /><p>Info</p></div>
                                </NavItem>
                                <NavItem isActive={activeItem === 'Pricing'} onClick={() => { handleClick('Pricing'), handlePrice() }} className='w-[20%]'>
                                    <div className='flex items-center justify-center  space-x-1 p-3 px-16'><BiRupee /><p>Pricing</p> </div>
                                </NavItem>
                                <NavItem isActive={activeItem === 'Media'} onClick={() => { handleClick('Media'), handleMedia() }} className='w-[20%]'>
                                    <div className='flex items-center justify-center  space-x-2 p-3 px-16'><PiVideoLight /><p>Media</p></div>
                                </NavItem>
                                <NavItem isActive={activeItem === 'Finish'} onClick={() => { handleClick('Finish'), handleFinish() }} className='w-[20%]'>
                                    <div className='flex items-center justify-center  space-x-2 p-3 px-16'><BsCheck2Circle /><p>Finish</p></div>
                                </NavItem>
                            </div>
                            {/* message or error message  */}
                            <div className='text-red-500 flex justify-center mt-5 font-semibold'>{errors.general}</div>
                            {/* form input fields */}
                            <form onSubmit={handleOnsubmit} className='flex flex-col  space-y-5 lg:my-10 lg:mx-52  m-5'>
                                {/* course Basic section  */}
                                {
                                    basic &&
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
                                                <div onClick={handleOnshowCategory} className={`w-full p-2 flex justify-between items-center border ${errors.Level && "border-red-500"}`}>
                                                    {Level ? Level : "Select Level"}
                                                    <BiChevronDown size={20} />
                                                </div>

                                                {showcategory &&
                                                    <ul className='bg-white border absolute w-[33.3%]'>
                                                        <li onClick={() => setLevel("Beginner")}
                                                            className='p-2 cursor-pointer hover:bg-blue-500 hover:text-white'>
                                                            Beginner
                                                        </li>
                                                        <li onClick={() => setLevel("Indermediate")}
                                                            className='p-2 cursor-pointer hover:bg-blue-500 hover:text-white'>
                                                            Indermediate
                                                        </li>
                                                        <li onClick={() => setLevel("Advance")}
                                                            className='p-2 cursor-pointer hover:bg-blue-500 hover:text-white'>
                                                            Advance
                                                        </li>
                                                    </ul>
                                                }
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
                                    info &&
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
                                    </>
                                }
                                {/*course price section */}
                                {
                                    Addprice &&
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
                                    media &&
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
                                    </>
                                }

                                {/* finish code submit      */}
                                {
                                    finish &&
                                    <> 
                                        <div className='flex flex-col space-y-3 justify-center items-center'>
                                        <RiCheckDoubleFill size={30}/>
                                            <h1 className='text-xl text-gray-500 font-semibold'>Thank you !</h1>
                                            <h5 className='text-sm'>You are just one click away</h5>
                                            <input type="submit"
                                                value="Add Course"
                                                className='bg-violet-500 text-white rounded lg:w-[20%] w-full'
                                            />
                                        </div>
                                    </>
                                }
                                {/* submit box  */}

                                <div className='flex justify-center space-x-2'>
                                    <span className='px-4 py-3 bg-cyan-500 hover:bg-cyan-600 rounded'><ImArrowLeft className=' text-white ' /></span>
                                    <span className='px-4 py-3 bg-cyan-500 hover:bg-cyan-600 rounded'> <ImArrowRight className=' text-white ' /></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Addcorse