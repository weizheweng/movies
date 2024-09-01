import { SearchIcon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { type ChangeEvent, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDebounceCb } from '../../hooks/useDebounceCb'
import { useMovieSearch } from '../../hooks-api/useMovieSearch'
import { useCurrentPage } from '../../hooks/useCurrentPage'
import { Pagination } from '../Layout/Pagination'
import { SkeletonMovieList } from '../Skeleton/SkeletonMovieList'
import { MovieList } from '../Movies/MovieList'
import { SearchNotFound } from './SearchNotFound'

export function Search () {
  const navigate = useNavigate()
  const currentPage = useCurrentPage()
  const [searchParams] = useSearchParams()
  const { debounceCb } = useDebounceCb()
  const query = searchParams.get('query') || ''
  const [searchInput, setSearchInput] = useState(query)
  const { data, isLoading } = useMovieSearch(Number(currentPage), query)
  const { total_pages: totalPages } = data || {}
  const maxPage = Math.min(totalPages ?? 0, 500) // API requests exceeding 500 will result in an error

  const handlePageChange = (page: number) => {
    navigate(`/search?query=${query}&page=${page}`)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchInput(value)
    debounceCb(() => navigate(`/search?query=${value}&page=${1}`), 500)
  }

  const clearSearch = () => {
    setSearchInput('')
    navigate('/search')
  }

  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="搜尋電影"
          borderRadius={12}
          value={searchInput}
          onChange={handleInputChange}
        />
      </InputGroup>
      {isLoading
        ? <SkeletonMovieList />
        : <>
          <MovieList movieData={data} />
          {data?.total_results ? <Pagination currentPage={Number(currentPage)} totalPages={maxPage} handlePageChange={handlePageChange} /> : null}
        </>
      }
      {
        data?.results?.length === 0 && <SearchNotFound clearSearch={clearSearch} />
      }
    </>
  )
}
