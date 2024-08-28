import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { Text, useBreakpointValue } from '@chakra-ui/react'

interface MovieOverviewProps {
  movieId?: string,
}

export function MovieOverview ({ movieId }: MovieOverviewProps) {
  const { data: movieDetailSData } = useMovieDetails(movieId)
  const fontSize = useBreakpointValue({ base: 'md', sm: 'md', md: 'lg', lg: 'lg' })
  const { overview } = movieDetailSData || {}
  return (
    <Text fontSize={fontSize} noOfLines={9}>{overview}</Text>
  )
}
