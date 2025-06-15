import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Layout } from './layouts/Layout/Layout'
import { MovieDetails } from './pages/MovieDetails'
import { Movies } from './pages/Movies'
import './global.css'
import { Search } from './pages/Search'

export function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Navigate to="/movies" replace /> },
        { path: '/movies', element: <Movies /> },
        { path: 'movies/:movieId', element: <MovieDetails /> },
        { path: 'search', element: <Search /> },
        { path: '*', element: 'NotFound' },
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}
