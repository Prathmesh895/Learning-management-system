"use client"
import { ThreeCircles } from 'react-loader-spinner'
export default function loading() {

    return (
        <div className="flex justify-center items-center min-h-96 ">
            <div className='bg-white flex space-x-5 items-center px-5 py-2 border shadow-xl'>
            <ThreeCircles
                visible={true}
                height="40"
                width="40"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
            />
            <div className='text-xl text-gray-500'>Loading...</div> 
            </div>    
        </div>
    )
}