'use client'
import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FaDotCircle, FaCircle } from "react-icons/fa";
import { useAppDispatch } from '@/Redux/store/hooks';
import { add } from '@/Redux/store/feature/course/courseSlice';


export const categories = [
  { category: "All Categories", subcategories: [] },
  { category: "Web Design", subcategories: ["Responsive_Design", "WordPress Theme", "Bootstrap", "HTML & CSS"] },
  { category: "Graphic Design", subcategories: ["Photoshop", "Adobe Illustrator", "Drawing", "Logo Design", "Digital Art"] },
  { category: "User Experience", subcategories: ["User Experience Design", "Mobile App Design", "User Interface", "Design Thinking", "Figma", "Prototyping"] },
  { category: "Interior Design", subcategories: ["Color Theory", "Lighting Design", "SketchUp", "Home Improvement", "3D Lighting"] },
  { category: "3D and Animation", subcategories: ["Blender", "Motion Graphics", "After Effects", "Maya", "zBrush", "Character Modeling"] },
  { category: "Fashion", subcategories: ["Fashion Design", "Sewing", "T-shirt Design", "Jewelry Design"] },
  { category: "Frontend Development", subcategories: [] }
];

const Price = ["All","Free", "Paid"];
const Level = ["All","Beginner", "Indermediate", "Advanced"];

function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [categoryCounts, setCategoryCounts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(searchParams.get('subcategory') || null);
  const [selectedPrice, setselectedPrice] = useState(searchParams.get('price') || null);
  const [selectedLevel, setselectedLevel] = useState(searchParams.get('level') || null);
  const [showAdditionalCategories, setShowAdditionalCategories] = useState(false);
  const [totalCourses,setTotalCourses]=useState(0);

  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchCourses();
  }, []);

  // fetch courses 
  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/add_courses', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      dispatch(add(data.courses));
      console.log("data", data.courses.length);
      setTotalCourses(data.courses.length);
      const counts = {};
      data.courses.forEach(course => {
        counts[course.category] = (counts[course.category] || 0) + 1;
      });
      setCategoryCounts(counts);
      console.log("total Courses",);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };


  const handleClickCategory = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null);
    const newQueryParams = new URLSearchParams(searchParams);
    newQueryParams.delete("subcategory"); // Remove existing category
    newQueryParams.set("category", category); // Set new category
    router.push(`/courses/CourseSort/?${newQueryParams.toString()}`);

  };

  const handleClickSubcategory = (subcategory) => {
    setSelectedCategory(null);
    setSelectedSubcategory(subcategory);
    const newQueryParams = new URLSearchParams(searchParams);
    newQueryParams.set("subcategory", subcategory);
    newQueryParams.delete("category")
    router.push(`/courses/CourseSort/?${newQueryParams.toString()}`);
  };
  const handleOnPrice = (price) => {
    setselectedPrice(price);
    const newQueryParams = new URLSearchParams(searchParams);
    newQueryParams.set('price',price);
    router.push(`/courses/CourseSort/?${newQueryParams.toString()}`);
  }
  const handleOnLevel = (level) => {
    setselectedLevel(level);
    const newQueryParams = new URLSearchParams(searchParams);
    newQueryParams.set('level',level);
    router.push(`/courses/CourseSort/?${newQueryParams.toString()}`);
  }

  const toggleAdditionalCategories = () => {
    setShowAdditionalCategories(prevState => !prevState);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <section className='bg-white p-8 shadow-xl flex flex-col  rounded-md text-gray-500'>
        <h1 className='text-xl font-semibold mb-4 border-b-[3px] border-violet-500 w-[25%] hover:w-[50%] ease-in duration-500'>Categories</h1>
        {categories.map((group, index) => (
          <React.Fragment key={index}>
            {index <= 3 ? (
              <div className="text-sm  ">
                <div onClick={() => handleClickCategory(group.category)} className="mb-3 flex space-x-2 space-y-4 cursor-pointer hover:font-semibold">
                  <div className='flex space-x-2 items-center '>
                    {selectedCategory === group.category ?
                      <FaDotCircle className='text-violet-600' size={18} /> :
                      <FaCircle className='text-violet-50' size={18} />
                    }
                    <p>{group.category}</p>
                  </div>
                  ({group.category=='All Categories' ? totalCourses : categoryCounts[group.category] || 0})
                </div>
                <ul>
                  {group.subcategories.map((subcategory, i) => (
                    <li key={i} className="capitalize flex ml-5 my-4 hover:font-semibold" onClick={() => handleClickSubcategory(subcategory)}>
                      <div className='flex space-x-2 items-center cursor-pointer '>
                        {selectedSubcategory === subcategory ?
                          <FaDotCircle className='text-violet-600' size={18} /> :
                          <FaCircle className='text-violet-50 border rounded-full' size={18} />
                        }
                        <p>{subcategory}</p>
                      </div>
                      <p className='ml-auto'>({categoryCounts[subcategory] || 0})</p>
                    </li>
                  ))}
                </ul>
              </div>
            )
              :
              // show more / show less 
              (
                <div key={index}>
                  <p className='font-semibold text-black '>
                    {index === categories.length - 1 && !showAdditionalCategories && (
                      <button onClick={toggleAdditionalCategories}>Show More</button>
                    )}
                  </p>
                  {showAdditionalCategories && index > 3 && (
                    <div className="text-sm">
                      <div onClick={() => handleClickCategory(group.category)} className=" flex space-x-2">
                        <div className='flex space-x-2 items-center'>
                          {selectedCategory === group.category ?
                            <FaDotCircle className='text-violet-600' size={18} /> :
                            <FaCircle className='text-violet-50' size={18} />
                          }
                          <p>{group.category}</p>
                        </div>
                        ({categoryCounts[group.category] || 0})
                      </div>
                      <ul>
                        {group.subcategories.map((subcategory, i) => (
                          // <li key={i} className="capitalize flex ml-4 my-4" onClick={() => handleClickSubcategory(subcategory)}>
                          <li key={i} className="capitalize flex ml-4 my-4"
                            onClick={() => handleClickSubcategory(subcategory)}

                          >

                            <div className='flex space-x-2 items-center'>
                              {selectedSubcategory === subcategory ?
                                <FaDotCircle className='text-violet-600' size={18} /> :
                                <FaCircle className='text-violet-50 border rounded-full' size={18} />
                              }
                              <p>{subcategory}</p>
                            </div>
                            <p className='ml-auto'>({categoryCounts[subcategory] || 0})</p>
                          </li>
                        ))}

                      </ul>
                      <p className='font-semibold text-black my-2'>
                        {index === categories.length - 1 && showAdditionalCategories && (
                          <button onClick={toggleAdditionalCategories}>Show Less</button>
                        )}
                      </p>
                    </div>
                  )}
                </div>
              )}
          </React.Fragment>
        ))}
        {/* get courses by Price  */}
        <div>
          <h1 className='text-xl mt-2 font-semibold border-b-[3px] border-violet-500 w-[10%] hover:w-[25%] ease-in duration-500'>Price</h1>
          {
            Price.map((price, i) => (
              <div key={i} >
                <div onClick={() => handleOnPrice(price)} className='flex space-x-2 items-center my-4 hover:font-semibold cursor-pointer'>
                  {selectedPrice === price ?
                    <FaDotCircle className='text-violet-600' size={18} /> :
                    <FaCircle className='text-violet-50' size={18} />
                  }
                  <p >{price}</p>
                </div>
              </div>
            ))
          }
        </div>
        {/* get courses by Level  */}
        <div>
          <h1 className='text-xl font-semibold border-b-[3px] border-violet-500 w-[10%] hover:w-[25%] ease-in duration-500'>Level</h1>
          {
            Level.map((level, index) => (
              <div key={index} >
                <div onClick={()=> handleOnLevel(level)} className='flex space-x-2 items-center my-4 hover:font-semibold cursor-pointer'>
                  {selectedLevel === level ?
                    <FaDotCircle className='text-violet-600' size={18} /> :
                    <FaCircle className='text-violet-50' size={18} />
                  }
                  <p >{level}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </Suspense>
  );
}

export default Page;




