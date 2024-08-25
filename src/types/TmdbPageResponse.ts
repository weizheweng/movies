export interface TmdbPageResponse<T> {
  dates?: {
    maximum: string,
    minimum: string,
  },
  page: number,
  results: T[],
  total_pages: number,
  total_results: number,
}
