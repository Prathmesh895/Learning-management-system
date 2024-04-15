"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { TfiLayoutGrid3Alt } from 'react-icons/tfi';
import { LuNetwork } from 'react-icons/lu';
import { BsStack } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { RiFileListLine } from 'react-icons/ri';
import { TbReportSearch } from 'react-icons/tb';
import { GiMoneyStack } from 'react-icons/gi';
import { BiMessageDetail } from 'react-icons/bi';
import { SlEnvolopeLetter } from 'react-icons/sl';
import { FaUserCog } from 'react-icons/fa';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BsBrush } from 'react-icons/bs';
import { GrSupport } from 'react-icons/gr';
import { AiOutlinePieChart } from 'react-icons/ai';
import { MdOutlineContactPhone, MdArrowForwardIos } from 'react-icons/md';

const icons = [
    TfiLayoutGrid3Alt,
    BsStack,
    FiUsers,
    RiFileListLine,
    RiFileListLine,
    RiFileListLine,
    LuNetwork,
    TbReportSearch,
    TbReportSearch,
    FiUsers,
    GiMoneyStack,
    BiMessageDetail,
    SlEnvolopeLetter,
    MdOutlineContactPhone,
    RiFileListLine,
    GrSupport,
    AiOutlinePieChart,
    BsBrush,
    GiSettingsKnobs,
    FaUserCog,
];

// Define sub-items for each main item with name and link
const subItems = {
    Dashboard: [],
    Course: [{ name: 'Manage Courses', link: '/admin/course/subitem1' }, 
    { name: 'Add new course', link: '/admin/course' }],
    Bootcamp: [],
    Report: [],
    Affiliate: [],
    Users: [{name: 'Admin',link:'/admin/user/Add_admin'},
    {name:'Instructor',link:'/admin/user/Instructors'},
    {name:'Student ',link:'/admin/user/Add_student'}],
    Settings: [],
};

const items = [
    { name: 'Dashboard', link: '/admin' },
    { name: 'Course', link: '/admin/course' },
    { name: 'Bootcamp', link: '/bootcamp' },
    // { name: 'Team training', link: '/team-training' },
    // { name: 'Tutor booking', link: '/tutor-booking' },
    // { name: 'Ebook', link: '/ebook' },
    // { name: 'Enrollments', link: '/enrollments' },
    { name: 'Report', link: '/report' },
    { name: 'Affiliate', link: '/affiliate' },
    { name: 'Users', link: '/admin/user' },
    // { name: 'Offline payment', link: '/offline-payment' },
    // { name: 'Message', link: '/message' },
    // { name: 'Newsletter', link: '/newsletter' },
    // { name: 'Contact', link: '/contact' },
    // { name: 'Blog', link: '/blog' },
    // { name: 'Customer support', link: '/customer-support' },
    // { name: 'Addons', link: '/addons' },
    // { name: 'Themes', link: '/themes' },
    { name: 'Settings', link: '/settings' },
    // { name: 'Manage profile', link: '/manage-profile' }
];

function Admin() {
    const [expandedItems, setExpandedItems] = useState([]);
    // const handleItemClick = (itemName, itemLink) => {
    //     if (subItems[itemName]?.length === 0) {
    //         // If the clicked item has no sub-items, redirect to the provided link
    //         window.location.href = itemLink;
    //     } else {
    //         if (expandedItems === itemName) {
    //             // If the clicked item is already expanded, close it
    //             setExpandedItems(null);
    //         } else {
    //             // Close the previously expanded item and open the clicked item
    //             setExpandedItems(itemName);
    //         }
    //     }
    // };
    const handleItemClick = (itemName, itemLink) => {
        if (subItems[itemName]?.length === 0) {
            // If the clicked item has no sub-items, redirect to the provided link
            window.location.href = itemLink;
        } else {
            if (expandedItems === null || expandedItems !== itemName) {
                // Close the previously expanded item and open the clicked item
                setExpandedItems([itemName]);
            } else {
                // If the clicked item is already expanded, close it
                setExpandedItems([]);
            }
        }
    };
    
    

    return (
        <div className="bg-white lg:flex lg:flex-col lg:space-y-6 text-gray-500 text-sm hidden rounded shadow-lg">
            <div className="flex flex-col lg:h-16 h-14 lg:px-2 justify-center items-center hover:text-blue-500 rounded-t">
                <p>Administrador</p>
            </div>
            <div className="hover:text-violet-600 px-4">Navigation</div>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <div
                        className="hover:text-violet-600 flex items-center px-8"
                        onClick={() => handleItemClick(item.name,item.link)}
                        
                    >
                        {React.createElement(icons[index], { className: 'mr-2' })}
                        {item.name}
                        {/* Check if sub-items exist for the current item */}
                        {subItems[item.name]?.length > 0 && (
                            <MdArrowForwardIos className={`ml-auto ${expandedItems.includes(item.name) ? 'transform rotate-90' : ''}`} />
                        )}
                    </div>
                    {/* Render sub-items if the current item is expanded */}
                    {expandedItems.includes(item.name) &&
                        subItems[item.name].map((subItem, subIndex) => (
                            <Link href={subItem.link} key={`${index}-${subIndex}`}>
                                <div className="hover:text-violet-600 flex items-center px-12">
                                    {subItem.name}
                                </div>
                            </Link>
                        ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default Admin;
