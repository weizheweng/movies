import { useParams } from 'react-router-dom'
import { HStack, useMediaQuery, VStack } from '@chakra-ui/react'
import { MOVIE_IMAGE_BASE_URL, YOUTUBE_BASE_URL } from '../../constants/baseUrl'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { useMovieVideos } from '../../hooks-api/useMovieVideos'
import { MovieTitle } from './MovieTitle'
import { MovieInfoDesktop } from './MovieInfoDesktop'
import { MovieVote } from './MovieVote'
import { MovieInfoMobile } from './MovieInfoMobile'
import { MovieLink } from './MovieLink'
import { MovieDirector } from './MovieDirector'
import { MovieCast } from './MovieCast'
import { MovieSimilar } from './MovieSimilar'
import { LANGUAGE } from '../../constants/languageEnum'

export function MovieDetails () {
  const [isDesktop] = useMediaQuery('(min-width: 30em)')
  const { movieId } = useParams()
  const { data: movieDetailSData } = useMovieDetails(movieId)
  const { data: movieVideosData } = useMovieVideos(movieId, LANGUAGE.ZH_TW)
  const { data: movieVideosDataEn } = useMovieVideos(movieId, LANGUAGE.EN_US)

  const { title, poster_path: posterPath } = movieDetailSData || {}
  const imagePath = `${MOVIE_IMAGE_BASE_URL}${posterPath}`
  const { key: videoKey } = movieVideosData?.results[0] || movieVideosDataEn?.results[0] || {}
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
        <MovieLink movieId={movieId} />
        <MovieVote movieId={movieId} />
      </HStack>
      <MovieDirector />
      <MovieCast />
      <MovieSimilar />
    </VStack>
  )
}
