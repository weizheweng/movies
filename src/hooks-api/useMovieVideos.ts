import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { type MovieVideos } from '../types/MovieVideos'
import { LANGUAGE } from '../constants/constants'

export function useMovieVideos (movieId?: string) {
  const key = urlWithQueryParams(`/movie/${movieId}/videos`, { language: LANGUAGE })
  const { data, error, isLoading, mutate } = useSWR<MovieVideos>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
