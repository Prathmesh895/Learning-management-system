import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import {authOptions } from '../api/auth/[...nextauth]/route'
import Dashboard from '@/components/adminDashboard/dashboard';

export default  async function Page() {
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
    <>
    <Dashboard/>
    </>
  )
}