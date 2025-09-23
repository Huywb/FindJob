import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background '></div>
      <main className=' min-h-screen container'>
          <Outlet></Outlet>
      </main>
    </div>
  )
}

export default AppLayout
