import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { LANGUAGE } from '../constants/languageEnum'
import { type MovieListResponse } from '../types/Movies'

export function useMovieSimilar (movieId?: string) {
  const key = urlWithQueryParams(`/movie/${movieId}/similar`, { language: LANGUAGE.ZH_TW })
  const { data, error, isLoading, mutate } = useSWR<MovieListResponse>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
