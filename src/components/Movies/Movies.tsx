import { MovieList } from './MovieList'
import { Pagination } from '../Layout/Pagination'
import { useNavigate } from 'react-router-dom'
import { useMoviesNowPlaying } from '../../hooks-api/useMoviesNowPlaying'
import { useCurrentPage } from '../../hooks/useCurrentPage'
import { SkeletonMovieList } from '../Skeleton/SkeletonMovieList'

export function Movies () {
  const currentPage = useCurrentPage()
  const history = useNavigate()
  const { data, isLoading } = useMoviesNowPlaying(Number(currentPage))
  const { total_pages: totalPages } = data || {}

  const handlePageChange = (page: number) => {
    history(`/movies?page=${page}`)
  }

  return (
    <>
      {isLoading ? <SkeletonMovieList /> : <MovieList />}
      <Pagination currentPage={Number(currentPage)} totalPages={totalPages} handlePageChange={handlePageChange} />
    </>
  )
}
