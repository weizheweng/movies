import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Movies } from './components/Movies/Movies'
import { Layout } from './components/Layout/Layout'
import './global.css'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/movies" replace /> },
        { path: '/movies', element: <Movies /> },
        { path: 'movies/:id', element: 'MovieInfo' },
        { path: 'search', element: 'Search' },
        { path: '*', element: 'NotFound' },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
