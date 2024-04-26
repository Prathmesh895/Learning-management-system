import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

export default function dropdowm() {
  return (
    <div className='w-72 font-medium h-80'>
        <div className='bg-white w-full p-2 flex justify-center items-center rounded'>
            Select category
            <BiChevronDown size={20}/>
        </div>
        <ul className='bg-white mt-2'>
                <li className='p-2'>1</li>
                <li className='p-2'>2</li>
                <li className='p-2'>3</li>
                <li className='p-2'>4</li>
                <li className='p-2'>5</li>
                <li className='p-2'>6</li>
            </ul> 
    </div>
  )
}
