import React from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import Header from '@/components/Header'

const AppLayout = () => {
  return (
    <div >
      <div className='grid-background '></div>
      <main className=' min-h-screen container px-8'>
        <Header></Header>
        <Outlet></Outlet>
      </main>
      <div className='p-10 text-center'></div>
    </div>
  )
}

export default AppLayout
