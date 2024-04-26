import Sidebar from '@/app/courses/sidebar/page'
import CourseList from '@/app/courses/courselist/page'
import Drow from '@/components/dropdowm'
import Nav from '@/components/courses/nav'

export default function Courses({ children }) {

    return (
        <>
            <Nav/>
            <div className='lg:flex my-6 lg:justify-around lg:mx-[13%]'>
                <div className='lg:w-[25%] border border-gray-100'><Sidebar /></div>
                <div className='lg:w-3/4'>{children}</div>
            </div>

        </>
    )
}