
import './App.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import LandingPage from './pages/LandingPage'
import Onboarding from './pages/Onboarding'
import Job from './pages/job'
import JobListing from './pages/job-listing'
import MyJobs from './pages/my-jobs'
import SaveJob from './pages/save-job'
import PostJob from './pages/post-job'
import { ThemeProvider } from '@/components/theme-provider'
import { Protect, SignIn } from '@clerk/clerk-react'
import ProtectRouter from './components/protect-router'
import Login from './components/Login'

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
          element: 
          <ProtectRouter><Onboarding /></ProtectRouter>
        },
        {
          path: 'job',
          element: <ProtectRouter><Job /></ProtectRouter>
        },
        {
          path: 'list-job',
          element: <ProtectRouter><JobListing /></ProtectRouter>
        },
        {
          path: 'my-jobs',
          element: <ProtectRouter><MyJobs /></ProtectRouter>
        },
        {
          path: 'saved-jobs',
          element: <ProtectRouter><SaveJob /></ProtectRouter>
        },
        {
          path: 'post-job',
          element: <ProtectRouter><PostJob /></ProtectRouter>
        }
      ]
    }]
)


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
