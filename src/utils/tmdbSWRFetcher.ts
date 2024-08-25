import { tmdbAxios } from './tmdbAxios'

export const tmdbSWRFetcher = async (url: string) =>
  await tmdbAxios().get(url)
    .then(response => response.data)
