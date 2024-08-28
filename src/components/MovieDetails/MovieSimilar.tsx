import { useParams } from 'react-router-dom'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import { useMovieSimilar } from '../../hooks-api/useMovieSimilar'
import { MovieListCard } from '../Movies/MovieListCard'

export function MovieSimilar () {
  const { movieId } = useParams()
  const { data: movieSimilarData } = useMovieSimilar(movieId)
  const similarMovieList = movieSimilarData?.results
  return (
    <>
      <Flex w="100%" flexDirection="column" gap={3}>
        <Text as="b" fontSize="xl">推薦影片</Text>
        <Flex overflowX="auto" gap={4}>
          <HStack as="ul">
            {
              similarMovieList?.map(movie => (
                <Box key={movie.id} minW={136} pt={2} pb={2}>
                  <MovieListCard
                    data={movie}
                    isShowLanguage={false}
                  />
                </Box>
              ))
            }
          </HStack>
        </Flex>
      </Flex>

    </>
  )
}
