"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dashboard = () => {
  const session = useSession()

  const router = useRouter()
  
  console.log(session)

  return (
   <div>Dashboard</div>
  )
};

export default Dashboard