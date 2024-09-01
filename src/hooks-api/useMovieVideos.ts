import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { type MovieVideos } from '../types/MovieVideos'
import { type LANGUAGE } from '../constants/languageEnum'

export function useMovieVideos (movieId?: string, language?: LANGUAGE) {
  const key = urlWithQueryParams(`/movie/${movieId}/videos`, { language })
  const { data, error, isLoading, mutate } = useSWR<MovieVideos>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
