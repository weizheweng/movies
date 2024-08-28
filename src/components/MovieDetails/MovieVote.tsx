import { StarIcon } from '@chakra-ui/icons'
import { Flex, HStack, Text, useBreakpointValue } from '@chakra-ui/react'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'

interface MovieVoteProps {
  movieId?: string,
}

export function MovieVote ({ movieId }: MovieVoteProps) {
  const { data: movieDetailSData } = useMovieDetails(movieId)
  const { vote_average: voteAverage } = movieDetailSData || {}
  const fontSize = useBreakpointValue({ base: 'lg', sm: 'lg', md: 'xl', lg: 'xl' })
  return (
    <Flex gap={1} alignItems="center">
      <StarIcon color="yellow.500" fontSize={fontSize} />
      <HStack gap={0}>
        <Text as="b" fontSize={fontSize}>
          {voteAverage?.toFixed(1)}
        </Text>
        <Text color="gray.500" fontSize={fontSize}>/10</Text>
      </HStack>
    </Flex>
  )
}
