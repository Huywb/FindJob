import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'

function App() {

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children:[
        {
          path: '/',
          element: <LandingPage />
        },
        {
          path: '/onboarding',
          element: <Onboarding />
        }
      ]
    }]
)


  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  ) 
}

export default App
