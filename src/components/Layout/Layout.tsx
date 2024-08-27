import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { MovieHeader } from '../Header/MovieHeader'

export function Layout () {
  return (
    <Box maxWidth="1200px" height="100%" margin="0 auto">
      <MovieHeader />
      <Box mt={14} p={4}>
        <Outlet />
      </Box>
    </Box>
  )
}
