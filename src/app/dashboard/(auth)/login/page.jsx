"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const login = () => {
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with google</button>
    </div>
  )
}

export default login