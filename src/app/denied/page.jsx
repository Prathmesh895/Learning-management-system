import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
async function denied() {
    const session = await getServerSession(authOptions);
    if(!session) redirect('/')
    return (
    <main className='flex justify-center flex-col items-center h-screen'>
        <div className='text-red-500'>You Don't have permission to access this page</div>
        <p>please login as admin</p>
    </main>
    )
}

export default denied