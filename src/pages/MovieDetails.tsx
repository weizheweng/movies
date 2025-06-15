import { useParams } from 'react-router-dom'
import { HStack, useMediaQuery, VStack } from '@chakra-ui/react'
import { MOVIE_IMAGE_BASE_URL, YOUTUBE_BASE_URL } from '../constants/baseUrl'
import { useMovieDetails } from '../hooks-api/useMovieDetails'
import { useMovieVideos } from '../hooks-api/useMovieVideos'
import { MovieTitle } from '../components/MovieDetails/MovieTitle'
import { MovieInfoDesktop } from '../components/MovieDetails/MovieInfoDesktop'
import { MovieVote } from '../components/MovieDetails/MovieVote'
import { MovieInfoMobile } from '../components/MovieDetails/MovieInfoMobile'
import { MovieLink } from '../components/MovieDetails/MovieLink'
import { MovieDirector } from '../components/MovieDetails/MovieDirector'
import { MovieCast } from '../components/MovieDetails/MovieCast'
import { MovieSimilar } from '../components/MovieDetails/MovieSimilar'
import { LANGUAGE } from '../constants/languageEnum'
import { SkeletonMovieDetailsDesktop } from '../components/Skeleton/SkeletonMovieDetailsDesktop'
import { SkeletonMovieDetailsMobile } from '../components/Skeleton/SkeletonMovieDetailsMobile'

export function MovieDetails () {
  const [isDesktop] = useMediaQuery('(min-width: 30em)')
  const { movieId } = useParams()
  const { data: movieDetailSData, isLoading: isMovieDetailLoading } = useMovieDetails(movieId)
  const { data: movieVideosData, isLoading: isMovieVideosLoading } = useMovieVideos(movieId, LANGUAGE.ZH_TW)
  const { data: movieVideosDataEn, isLoading: isMovieVideosLoadingEn } = useMovieVideos(movieId, LANGUAGE.EN_US)

  const { title, poster_path: posterPath } = movieDetailSData || {}
  const imagePath = `${MOVIE_IMAGE_BASE_URL}${posterPath}`
  const trailer = movieVideosData?.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')
  const trailerEn = movieVideosDataEn?.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')

  const { key: videoKey } = trailer || trailerEn || {}
  const videoUrl = `${YOUTUBE_BASE_URL}${videoKey}`

  if (isMovieDetailLoading || isMovieVideosLoading || isMovieVideosLoadingEn) {
    return isDesktop ? <SkeletonMovieDetailsDesktop /> : <SkeletonMovieDetailsMobile />
  }

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
