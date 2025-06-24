import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { type MovieDetails } from '../types/MovieDetails'
import { LANGUAGE } from '../constants/languageEnum'

export function useMovieDetails (movieId?: string) {
  const key = movieId ? urlWithQueryParams(`/movie/${movieId}`, { language: LANGUAGE.ZH_TW }) : null
  const { data, error, isLoading, mutate } = useSWR<MovieDetails>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
