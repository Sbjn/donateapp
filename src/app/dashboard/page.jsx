"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Dastboard = () => {
  const session = useSession()

  const router = useRouter()
  
  console.log(session)

  return (
    <div>Dastboard</div>
  )
}

export default Dastboard