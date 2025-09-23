import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@/components/ui/button'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import Job from './pages/job'
import JobListing from './pages/job-listing'
import MyJobs from './pages/my-jobs'
import SaveJob from './pages/save-job'
import PostJob from './pages/post-job'

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
        },
        {
          path: 'job',
          element: <Job />
        },
        {
          path: 'list-job',
          element: <JobListing></JobListing>
        },
        {
          path: 'my-jobs',
          element: <MyJobs></MyJobs>
        },
        {
          path: 'save-job',
          element: <SaveJob></SaveJob>
        },
        {
          path: 'post-job',
          element: <PostJob></PostJob>
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
