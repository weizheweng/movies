export interface MovieDetail {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: BelongsToCollection,
  budget: number,
  genres: Genre[],
  homepage: string,
  id: number,
  imdb_id: string,
  origin_country: string[],
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: ProductionCompany[],
  release_date: Date,
  revenue: number,
  runtime: number,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

interface BelongsToCollection {
  id: number,
  name: string,
  poster_path: string,
  backdrop_path: string,
}

interface Genre {
  id: number,
  name: string,
}

interface ProductionCompany {
  id: number,
  logo_path: null | string,
  name: string,
  origin_country: string,
}
