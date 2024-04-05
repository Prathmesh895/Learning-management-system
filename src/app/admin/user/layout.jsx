import Link from "next/link";

export default function Adduser({ children }) {


    return (
        <section className="flex flex-col bg-white rounded shadow-2xl">
            <div className='bg-white'>
                <div className='bg-slate-500 lg:flex lg:justify-between lg:h-16 lg:items-center text-white rounded-t'>
                    <div className='lg:w-1/3 h-full items-center flex justify-center border-r border-gray-100'>
                        <Link href="/admin/user/Add_admin">Admin</Link>
                    </div>
                    <div className='lg:w-1/3 lg:h-full items-center flex justify-center border-r border-gray-100'>
                        <Link href='/admin/user/Instructors'>Instructors </Link>
                    </div>
                    <div className='lg:w-1/3 flex justify-center '>
                        <Link href='/admin/user/Add_student'>Student</Link>
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>

        </section>
    );

}