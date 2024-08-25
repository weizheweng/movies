import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { MovieHeader } from '../Header/MovieHeader'

export function Layout () {
  return (
    <Box mt={14} p={4} maxWidth="1200px" height="100%">
      <MovieHeader />
      <Outlet />
    </Box>
  )
}
