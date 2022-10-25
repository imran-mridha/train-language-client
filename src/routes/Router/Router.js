import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
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
      }
    ]
  }
])