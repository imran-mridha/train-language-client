import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import ErrorPage from '../../others/ErrorPage'
import Blog from '../../pages/Blog/Blog'
import Contact from '../../pages/Contact/Contact'
import Checkout from '../../pages/Courses/Checkout'
import CourseDetails from '../../pages/Courses/CourseDetails'
import Courses from '../../pages/Courses/Courses'
import Faq from '../../pages/Faq/Faq'
import Home from '../../pages/Home/Home/Home'
import Login from '../../pages/Login/Login'
import Profile from '../../pages/Profile/Profile'
import Register from '../../pages/Register/Register'
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        loader: ()=> fetch('https://train-language-server.vercel.app/courses'),
        element: <Home />
      },
      {
        path: '/home',
        loader: ()=> fetch('https://train-language-server.vercel.app/courses'),
        element: <Home />
      },
      {
        path: '/courses',
        loader: ()=> fetch('https://train-language-server.vercel.app/courses'),
        element: <Courses />
      },
      {
        path: '/course/:id',
        element:  <CourseDetails />,
        loader: ({params})=> fetch(`https://train-language-server.vercel.app/course/${params.id}`)
      },
      {
        path: '/contact',
        element:  <Contact />,
      },
      {
        path: '/checkout/:id',
        loader: ({params})=>fetch(`https://train-language-server.vercel.app/checkout/${params.id}`),
        element:   <PrivateRoutes><Checkout /></PrivateRoutes>
      }
      ,
      {
        path: '/login',
        element:  <Login />
      },
      {
        path: '/register',
        element:  <Register />
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile /></PrivateRoutes>
      },
      {
        path: '/faq',
        element: <Faq />
      }
      ,
      {
        path: '/blog',
        element: <Blog />
      }
    ]
  }
])