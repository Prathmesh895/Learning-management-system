import Navbar from '@/components/adminDashboard/navbar'
import Sidebar from '@/components/adminDashboard/sidebar'

export default function DashboardLayout({children}) {
   
  return (
      <section className='flex flex-col'>
        <div>< Navbar/></div>
        <div className='lg:flex my-6 lg:justify-around'>
          <div className='lg:w-[17%]'><Sidebar/></div>
          <div className='lg:w-3/4'>{children}</div>
        </div>
      </section>
    )
  }