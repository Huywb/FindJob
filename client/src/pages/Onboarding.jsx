import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-react'
import BarLoader from "react-spinners/BarLoader";
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom';
const Onboarding = () => {
  const {user, isLoaded} = useUser();
  const navigate = useNavigate()  
  console.log(user)
  const handleRoleSelected = async (role) => {
    await user.update({
      unsafeMetadata: {role: role}
    }).then(() => {
      navigate(role === "candidate" ? "/job" : "/post-job")
    }).catch((err) => {
      console.log("Error updating user metadata:", err);
    }
    )
  }

  useEffect(() => {
    if(isLoaded && user?.unsafeMetadata?.role) {
      navigate(user.unsafeMetadata.role === "candidate" ? "/job" : "/post-job")
    }},[user])
  
  if(!isLoaded) {
    return <BarLoader className='mb-4' width={"100%"} color='#36d7b7'></BarLoader>
  }
  return (
    <div className='flex items-center justify-center mt-40 flex-col gap-10'>  
        <h2 className='font-bold text-7xl'>
          I am ...
        </h2>
        <div className='flex gap-4'>
          <Button onClick={() => handleRoleSelected("candidate")} variant='mode' className='px-30 py-12 text-xl'>Candidate</Button>
          <Button onClick={() => handleRoleSelected("recruiter")} variant='destructive' className='px-30 py-12 text-xl'>Recruiter</Button>
        </div>
    </div>
  )
}

export default Onboarding
    