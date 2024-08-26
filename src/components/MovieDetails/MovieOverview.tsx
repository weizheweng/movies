import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { Text, useBreakpointValue } from '@chakra-ui/react'

export function MovieOverview () {
  const { id } = useParams()
  const { data: movieDetailSData } = useMovieDetails(id)
  const fontSize = useBreakpointValue({ base: 'xs', sm: 'md', md: 'lg', lg: 'lg' })
  const { overview } = movieDetailSData || {}
  return (
    <Text fontSize={fontSize}>{overview}</Text>
  )
}
