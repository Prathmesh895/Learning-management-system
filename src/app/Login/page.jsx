import LoginForm from '@/components/loginform'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import {authOptions } from '../api/auth/[...nextauth]/route'

async function LoginForm1() {
  const session = await getServerSession(authOptions);
    if(!session){
      return <LoginForm />;
    }else if (session?.user?.userRole==='admin'){
      redirect('admin');
      return null;
    }else{
      redirect('student');
      return null;
    }
}

export default LoginForm1

