import { useParams } from 'react-router-dom'
import { HStack, useMediaQuery, VStack } from '@chakra-ui/react'
import { MOVIE_IMAGE_BASE_URL, YOUTUBE_BASE_URL } from '../../constants/constants'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { useMovieVideos } from '../../hooks-api/useMovieVideos'
import { MovieTitle } from './MovieTitle'
import { MovieInfoDesktop } from './MovieInfoDesktop'
import { MovieVote } from './MovieVote'
import { MovieInfoMobile } from './MovieInfoMobile'
import { MovieLink } from './MovieLink'
import { MovieDirector } from './MovieDirector'
import { MovieCast } from './MovieCast'

export function MovieDetails () {
  const [isDesktop] = useMediaQuery('(min-width: 30em)')
  const { id } = useParams()
  const { data: movieDetailSData } = useMovieDetails(id)
  const { data: movieVideosData } = useMovieVideos(id)

  const { title, poster_path: posterPath, vote_average: voteAverage, imdb_id: imdbId, homepage } = movieDetailSData || {}
  const imagePath = `${MOVIE_IMAGE_BASE_URL}${posterPath}`
  const { key: videoKey } = movieVideosData?.results[0] || {}
  const videoUrl = `${YOUTUBE_BASE_URL}${videoKey}`

  return (
    <VStack gap={6} width="100%">
      <MovieTitle
        title={movieDetailSData?.title}
        originalTitle={movieDetailSData?.original_title}
        releaseDate={movieDetailSData?.release_date}
        runtime={movieDetailSData?.runtime}
      />
      {isDesktop
        ? <MovieInfoDesktop imagePath={imagePath} title={title} videoUrl={videoUrl} />
        : <MovieInfoMobile imagePath={imagePath} title={title} videoUrl={videoUrl} />
      }
      <HStack justifyContent="space-between" width="100%">
        <MovieLink imdbId={imdbId} homepage={homepage} />
        <MovieVote voteAverage={voteAverage} />
      </HStack>
      <MovieDirector />
      <MovieCast />
    </VStack>
  )
}
