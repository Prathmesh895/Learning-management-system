import Navbar from '@/components/adminDashboard/navbar'
import Sidebar from '@/components/adminDashboard/sidebar'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({children}) {
  const session = await getServerSession(authOptions);
   
  if (!session) {
    redirect('/Login');
    return null; // Ensure that the function returns null after redirection
  }

  if (session && session.user.role !== 'admin') {
    redirect('/denied');
    return null; // Ensure that the function returns null after redirection
  }
   
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