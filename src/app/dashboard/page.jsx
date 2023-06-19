"use client"
import { useSession } from 'next-auth/react'
import React from 'react'

const Dastboard = () => {
  const session = useSession()
  console.log(session)

  return (
    <div>Dastboard</div>
  )
}

export default Dastboard