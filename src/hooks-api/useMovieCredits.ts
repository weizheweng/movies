import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { LANGUAGE } from '../constants/languageEnum'
import { type MovieCredits } from '../types/MovieCredits'

export function useMovieCredits (movieId?: string) {
  const key = urlWithQueryParams(`/movie/${movieId}/credits`, { language: LANGUAGE.ZH_TW })
  const { data, error, isLoading, mutate } = useSWR<MovieCredits>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
