import useSWR from 'swr'
import { urlWithQueryParams } from '../utils/urlWithQueryParams'
import { tmdbSWRFetcher } from '../utils/tmdbSWRFetcher'
import { type MoviesNowPlaying } from '../types/Movies'

export function useMoviesNowPlaying (page?: number) {
  const language = 'zh-TW'
  const key = urlWithQueryParams('/movie/now_playing', { language, page })
  const { data, error, isLoading, mutate } = useSWR<MoviesNowPlaying>(key, tmdbSWRFetcher)

  return {
    data,
    error,
    isLoading,
    mutate,
  }
}
