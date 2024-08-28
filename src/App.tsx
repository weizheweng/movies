import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { MovieDetails } from './components/MovieDetails/MovieDetails'
import { Movies } from './components/Movies/Movies'
import './global.css'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/movies" replace /> },
        { path: '/movies', element: <Movies /> },
        { path: 'movies/:movieId', element: <MovieDetails /> },
        { path: 'search', element: 'Search' },
        { path: '*', element: 'NotFound' },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
