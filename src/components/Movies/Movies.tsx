import { MovieList } from './MovieList'
import { Pagination } from '../Layout/Pagination'
import { useNavigate } from 'react-router-dom'
import { useMoviePopular } from '../../hooks-api/useMovieNowPlaying'
import { useCurrentPage } from '../../hooks/useCurrentPage'
import { SkeletonMovieList } from '../Skeleton/SkeletonMovieList'

export function Movies () {
  const currentPage = useCurrentPage()
  const navigate = useNavigate()
  const { data, isLoading } = useMoviePopular(Number(currentPage))
  const { total_pages: totalPages } = data || {}

  const handlePageChange = (page: number) => {
    window.scrollTo(0, 0)
    navigate(`/movies?page=${page}`)
  }

  return (
    <>
      {isLoading ? <SkeletonMovieList /> : <MovieList />}
      <Pagination currentPage={Number(currentPage)} totalPages={totalPages} handlePageChange={handlePageChange} />
    </>
  )
}
