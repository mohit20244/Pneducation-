import React from 'react'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import HeroSection from './pages/student/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router-dom'
import Courses from './pages/student/Courses'
import Home from './pages/student/Home'
import AboutUs from './pages/student/AboutUs'
import ContactUs from './pages/student/ContactUs'

import Certificates from './pages/student/Certificates'
import MyLearning from './pages/student/MyLearning'
import Profile from './pages/student/Profile'
import Sidebar from './pages/admin/Sidebar';
import Dashboard from './pages/admin/Dashboard'
import CourseTable from './pages/admin/course/CourseTable'
import AddCourse from './pages/admin/course/AddCourse'
import CourseTab from './pages/admin/course/CourseTab'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
    children:[
     
      {
        path:'/',
        element:<Home/>
        // (
        //   // <>
          
        //   // {/* <HeroSection/>
        //   // <Courses/> */}

        //   // </>
       //)
      },
      {
        path:'aboutus/',
        element:<AboutUs/>

      },
      {
        path:'contactus/',
        element:<ContactUs/>

      },
      {
        path:'courses/',
        element:<Courses/>

      },
      {
        path:'certificates/',
        element:<Certificates/>
      },
      {
        path:'login',
        element:<Login/>
      },
        {
        path:'mylearnings',
        element:<MyLearning/>
      },
      {
        path:'profile',
        element:<Profile/>
      },
      {
        // path:'logout',
        // element:<Logout/>
      },


      //admin route
      {
        path: "admin",
        element:<Sidebar/>,
        children:[
          {
            index:true,
            path:"dashboard",
            element:<Dashboard/>

          },
          {
            path:"course",
            element:<CourseTable/>

          },

          {
            path:"course/create",
            element:<AddCourse/>

          },
          {
             path:"course/tab",
            element:<CourseTab/>

          },
          {
             path:"course/table",
            element:<CourseTable/>

          }

          
        ]
      },
    
    ]
    
  }
])

function App() {
  return (
  <>
    
    <RouterProvider router={appRouter}/>
  </>
  )
}

export default App
