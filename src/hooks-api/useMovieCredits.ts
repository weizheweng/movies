import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { LANGUAGE } from '../constants/constants'
import { type MovieCredits } from '../types/MovieCredits'

export function useMovieCredits (movieId?: string) {
  const key = urlWithQueryParams(`/movie/${movieId}/credits`, { language: LANGUAGE })
  const { data, error, isLoading, mutate } = useSWR<MovieCredits>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
