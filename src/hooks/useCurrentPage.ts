import { useSearchParams } from 'react-router-dom'

export function useCurrentPage () {
  const [searchParams] = useSearchParams()
  const currentPage = searchParams.get('page') || 1
  return Number(currentPage)
}
