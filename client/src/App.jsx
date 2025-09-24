
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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  )
}

export default App
