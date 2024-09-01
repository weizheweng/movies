import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { type MovieListResponse } from '../types/Movies'
import { LANGUAGE } from '../constants/languageEnum'
import { REGION } from '../constants/regionEnum'

export function useMoviePopular (page?: number) {
  const key = urlWithQueryParams('/movie/popular',
    { language: LANGUAGE.ZH_TW, page, region: REGION.TW }
  )
  const { data, error, isLoading, mutate } = useSWR<MovieListResponse>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
