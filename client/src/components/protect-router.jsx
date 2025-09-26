import React from 'react'
import { useUser } from '@clerk/clerk-react'
import { Navigate, useLocation } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const ProtectRouter = ({ children }) => {
    const {isSignedIn,user, isLoaded} = useUser()
    const {pathname} = useLocation()

    if(isLoaded && !isSignedIn && pathname !== undefined){
        toast.error("You must be logged in to access this page")
        return <Navigate to='/'></Navigate>
    }
    if(isLoaded && isSignedIn && !user?.unsafeMetadata?.role && pathname !== "/onboarding"){
        toast.error("You must complete the onboarding process")
        return <Navigate to='/onboarding'></Navigate>
    }
  return children
}

export default ProtectRouter
