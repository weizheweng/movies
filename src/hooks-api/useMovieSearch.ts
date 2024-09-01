import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { type MovieListResponse } from '../types/Movies'
import { LANGUAGE } from '../constants/languageEnum'

export function useMovieSearch (page?: number, query?: string) {
  const key = query
    ? urlWithQueryParams('/search/movie', { language: LANGUAGE.ZH_TW, page, query })
    : null

  const { data, error, isLoading, mutate } = useSWR<MovieListResponse>(key, tmdbSWRFetcher, { revalidateOnFocus: false })

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
