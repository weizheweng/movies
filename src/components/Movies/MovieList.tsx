import { Heading, SimpleGrid } from '@chakra-ui/react'
import { MoviesListCard } from './MoviesListCard'
import { useMoviesNowPlaying } from '../../hooks-api/useMoviesNowPlaying'
import { useCurrentPage } from '../../hooks/useCurrentPage'

export function MovieList () {
  const currentPage = useCurrentPage()
  const { data } = useMoviesNowPlaying(Number(currentPage))

  return (
    <>
      <Heading size="md">
        現正熱映
      </Heading>
      <SimpleGrid columns={[2, 3, 4, 5]} spacing={6} mt={4}>
        {data?.results.map(movie => (
          <MoviesListCard data={movie} key={movie.id} />
        ))}
      </SimpleGrid>
    </>
  )
}
