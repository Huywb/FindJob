import React from 'react'
import logo from '../../public/logo.png'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
const Header = () => {
  return (
    <nav className='py-4 flex items-center justify-between'>
      <Link to={"/"}>
        <img src={logo} alt="Logo" className='h-20' />
      </Link>

       <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}

export default Header
