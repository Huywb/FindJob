import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = ({ setCheckLogin }) => {
    const handleClick = (e) => {
    if(e.target === e.currentTarget){
    setCheckLogin(false)
    }
  }
    
  return (
        <div onClick={handleClick} className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <SignIn
          fallbackRedirectUrl='/onboarding'
          forceRedirectUrl='/onboarding'
          ></SignIn>
        </div>
  )
}

export default Login
