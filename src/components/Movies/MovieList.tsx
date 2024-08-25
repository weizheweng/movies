import { Heading, SimpleGrid } from '@chakra-ui/react'
import { MoviesListCard } from './MoviesListCard'
import { useSearchParams } from 'react-router-dom'
import { useMoviesNowPlaying } from '../../hooks-api/useMoviesNowPlaying'

export function MovieList () {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') || 1
  const { data } = useMoviesNowPlaying(Number(page))

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
