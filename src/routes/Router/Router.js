import { createBrowserRouter } from 'react-router-dom'
import Main from '../../layout/Main'
import Courses from '../../pages/Courses/Courses'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Courses />
      }
    ]
  }
])