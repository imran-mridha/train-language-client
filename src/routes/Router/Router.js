import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Category from '../../pages/CourseCategory/Category'
import CourseDetails from '../../pages/Courses/CourseDetails'
import Courses from '../../pages/Courses/Courses'
import Home from '../../pages/Home/Home/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
      }
    ]
  }
])