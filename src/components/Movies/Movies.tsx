import { MovieList } from './MovieList'
import { Pagination } from '../Layout/Pagination'
import { useNavigate } from 'react-router-dom'
import { useMoviePopular } from '../../hooks-api/useMoviePopular'
import { useCurrentPage } from '../../hooks/useCurrentPage'
import { SkeletonMovieList } from '../Skeleton/SkeletonMovieList'

export function Movies () {
  const currentPage = useCurrentPage()
  const navigate = useNavigate()
  const { data, isLoading } = useMoviePopular(Number(currentPage))
  const { total_pages: totalPages } = data || {}
  const maxPage = Math.min(totalPages ?? 0, 500) // API requests exceeding 500 will result in an error

  const handlePageChange = (page: number) => {
    window.scrollTo(0, 0)
    navigate(`/movies?page=${page}`)
  }

  return (
    <>
      {isLoading ? <SkeletonMovieList /> : <MovieList />}
      <Pagination currentPage={Number(currentPage)} totalPages={maxPage} handlePageChange={handlePageChange} />
    </>
  )
}
