import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import ErrorPage from '../../others/ErrorPage'
import Contact from '../../pages/Contact/Contact'
import Category from '../../pages/CourseCategory/Category'
import Checkout from '../../pages/Courses/Checkout'
import CourseDetails from '../../pages/Courses/CourseDetails'
import Courses from '../../pages/Courses/Courses'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import Profile from '../../pages/Profile/Profile'
import Register from '../../pages/Register/Register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: ()=> fetch('http://localhost:5000/courses'),
        element: <Home />
      },
      {
        path: '/home',
        loader: ()=> fetch('http://localhost:5000/courses'),
        element: <Home />
      },
      {
        path: '/courses',
        loader: ()=> fetch('http://localhost:5000/courses'),
        element: <Courses />
      },
      {
        path: '/category/:id',
        element: <Category />,
        loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/course/:id',
        element:  <CourseDetails />,
        loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)
      },
      {
        path: '/contact',
        element:  <Contact />,
      },
      {
        path: '/checkout/:id',
        loader: ({params})=>fetch(`http://localhost:5000/checkout/${params.id}`),
        element:  <Checkout />,
      }
      ,
      {
        path: '/login',
        element:  <Login />,
      },
      {
        path: '/register',
        element:  <Register />,
      },
      {
        path: '/profile',
        element:  <Profile />,
      }
    ]
  }
])