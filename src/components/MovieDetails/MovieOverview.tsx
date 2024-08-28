import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { Text, useBreakpointValue } from '@chakra-ui/react'

interface MovieOverviewProps {
  movieId?: string,
  noOfLines?: number,
}

export function MovieOverview ({ movieId, noOfLines }: MovieOverviewProps) {
  const { data: movieDetailSData } = useMovieDetails(movieId)
  const fontSize = useBreakpointValue({ base: 'md', sm: 'md', md: 'lg', lg: 'lg' })
  const { overview } = movieDetailSData || {}
  return (
    <Text fontSize={fontSize} noOfLines={noOfLines}>{overview}</Text>
  )
}
