import React from 'react'
import Image from 'next/image';
import Img_logo from '/public/logo-sm.png'
import Link from 'next/link';
function logo() {
    return (
        <Link href='/'>
            <div className='flex items-center space-x-2'><Image src={Img_logo} width={40} alt='Company log' />
                <div className='font-serif leading-5 drop-shadow-md text-lg'>
                    <h1>Learning</h1>
                    <h1 className=''> Academy</h1>
                </div>
            </div>
        </Link>
    )
}

export default logo