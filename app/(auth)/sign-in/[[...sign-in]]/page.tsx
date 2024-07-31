'use client'
import React, { useEffect } from 'react'
import { SignIn } from '@clerk/nextjs'
import { toast } from 'sonner'

const SignInPage = () => {
  useEffect(() => {
    toast(
      <h1 style={{ whiteSpace: 'pre-line' }}>
        {`Test Mode\nEmail: codecrusaders02@gmail.com\nPassword: codecrusaders02`}
      </h1>,
      {
        duration: 600000, // Duration in milliseconds
      }
    )
  }, [])
  return <SignIn />
}

export default SignInPage
