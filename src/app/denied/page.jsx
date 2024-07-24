import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'
async function denied() {
    const session = await getServerSession(authOptions);
    if (!session) redirect('/')
    return (
        <main className='flex justify-center flex-col items-center my-28 mx-5 '>
             <img src='/access_denied_re_awnf.svg' alt="Logo" width={400} height={300}></img>
            <div className='text-red-500 mt-5 text-center'>You Don't have permission to access this page</div>
            <p>Only admin can access this page</p>
        </main>
    )
}

export default denied