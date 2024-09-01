import { SimpleGrid } from '@chakra-ui/react'
import { MovieListCard } from './MovieListCard'
import { type MovieListResponse } from '../../types/Movies'

interface MovieListProps {
  movieData?: MovieListResponse,
}

export function MovieList ({ movieData }: MovieListProps) {
  return (
    <>
      <SimpleGrid columns={[2, 3, 4, 5]} spacing={6} mt={4}>
        {movieData?.results.map(movie => (
          <MovieListCard data={movie} key={movie.id} />
        ))}
      </SimpleGrid>
    </>
  )
}
