import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import {authOptions } from '../api/auth/[...nextauth]/route'
export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    if(!session) redirect('/Login')
    
  return (
  <>
  <h1> This is user/student Dashboard </h1>
  </>
  )
}

