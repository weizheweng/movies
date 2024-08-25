import { MovieList } from './MovieList'
import { Pagination } from '../Layout/Pagination'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useMoviesNowPlaying } from '../../hooks-api/useMoviesNowPlaying'

export function Movies () {
  const [searchParams] = useSearchParams()
  const history = useNavigate()
  const currentPage = searchParams.get('page') || 1
  const { data } = useMoviesNowPlaying(Number(currentPage))
  const { total_pages: totalPages } = data || {}

  const handlePageChange = (page: number) => {
    history(`/movies?page=${page}`)
  }

  return (
    <>
      <MovieList />
      <Pagination currentPage={Number(currentPage)} totalPages={totalPages} handlePageChange={handlePageChange} />
    </>
  )
}
