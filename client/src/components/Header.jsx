import React, { useEffect, useState } from 'react'
import logo from '../../public/logo.png'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'
import Login from './Login'
const Header = () => {
  const [checklogin, setCheckLogin] = useState(false)
  const {user} = useUser()
  console.log(checklogin)


  return (
    <nav className='py-4 flex items-center justify-between'>
      <Link to={"/"}>
        <img src={logo} alt="Logo" className='h-20' />
      </Link>

      <div className='flex gap-4'>
        <SignedOut>
          <div onClick={() => setCheckLogin(true)}>
          Login
          </div>
        </SignedOut>
        {
          user && <Button variant="outline"><PenBox></PenBox> <Link to="/post-job">Post a Job</Link></Button>
        }
        <SignedIn >
          <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-10 h-10",
              userButtonPopoverCard: "bg-gray-800 border-0",
              userButtonActionButton: "text-white hover:bg-gray-700",
            }
          }
          } >
          <UserButton.MenuItems>
            <UserButton.Link label='My Jobs' href='/my-jobs' labelIcon={<BriefcaseBusiness size={15}></BriefcaseBusiness>}></UserButton.Link>
            <UserButton.Link label='Save Jobs' href='/saved-jobs' labelIcon={<Heart size={15}></Heart>}></UserButton.Link>
          </UserButton.MenuItems>
          </UserButton>
        </SignedIn>
      </div>

      {
        checklogin && (
        <Login setCheckLogin={setCheckLogin}></Login>
      )}

    </nav>
  )
}

export default Header
