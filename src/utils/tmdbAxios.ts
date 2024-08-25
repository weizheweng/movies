import axios from 'axios'

export function tmdbAxios () {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  return axiosInstance
}
