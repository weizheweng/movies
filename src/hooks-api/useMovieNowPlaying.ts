import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { type MovieList } from '../types/Movies'
import { LANGUAGE, REGION } from '../constants/constants'

export function useMovieNowPlaying (page?: number) {
  const key = urlWithQueryParams('/movie/now_playing',
    { language: LANGUAGE, page, region: REGION }
  )
  const { data, error, isLoading, mutate } = useSWR<MovieList>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
