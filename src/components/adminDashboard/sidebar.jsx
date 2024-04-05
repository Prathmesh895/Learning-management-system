import React from 'react';
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

const items = [
    { name: 'Dashboard', link: '/admin' },
    { name: 'Course', link: '/course' },
    { name: 'Bootcamp', link: '/bootcamp' },
    { name: 'Team training', link: '/team-training' },
    { name: 'Tutor booking', link: '/tutor-booking' },
    { name: 'Ebook', link: '/ebook' },
    { name: 'Enrollments', link: '/enrollments' },
    { name: 'Report', link: '/report' },
    { name: 'Affiliate', link: '/affiliate' },
    { name: 'Users', link: '/admin/user' },
    { name: 'Offline payment', link: '/offline-payment' },
    { name: 'Message', link: '/message' },
    { name: 'Newsletter', link: '/newsletter' },
    { name: 'Contact', link: '/contact' },
    { name: 'Blog', link: '/blog' },
    { name: 'Customer support', link: '/customer-support' },
    { name: 'Addons', link: '/addons' },
    { name: 'Themes', link: '/themes' },
    { name: 'Settings', link: '/settings' },
    { name: 'Manage profile', link: '/manage-profile' },
];

function Admin() {
    return (
        <div className="bg-white lg:flex lg:flex-col lg:space-y-6 text-gray-500 text-sm hidden rounded shadow-2xl">
            <div className="flex flex-col lg:h-16 h-14 text-white lg:px-2 justify-center items-center bg-slate-500 hover:text-blue-500 rounded-t">
                <p>Administrador</p>
            </div>
            <div className="hover:text-violet-600 px-4">Navigation</div>
            {items.map((item, index) => (
                <Link href={item.link} key={index}>
                    <div className="hover:text-violet-600 flex items-center px-8">
                        {React.createElement(icons[index], { className: 'mr-2' })}
                        {item.name}
                        <MdArrowForwardIos className="ml-auto" />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Admin;
