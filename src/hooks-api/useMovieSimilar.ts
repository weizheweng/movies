import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { LANGUAGE } from '../constants/constants'
import { type MovieList } from '../types/Movies'

export function useMovieSimilar (movieId?: string) {
  const key = urlWithQueryParams(`/movie/${movieId}/similar`, { language: LANGUAGE })
  const { data, error, isLoading, mutate } = useSWR<MovieList>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
