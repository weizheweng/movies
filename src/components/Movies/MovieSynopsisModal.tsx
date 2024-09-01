import { AspectRatio, Image, Grid, GridItem, Modal, ModalBody, ModalContent, ModalOverlay, VStack, Spinner, Flex } from '@chakra-ui/react'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { useState } from 'react'
import { MOVIE_IMAGE_BASE_URL } from '../../constants/baseUrl'
import { MovieTitle } from '../MovieDetails/MovieTitle'
import { MovieGenres } from '../MovieDetails/MovieGenres'
import { MovieOverview } from '../MovieDetails/MovieOverview'
import { MovieVote } from '../MovieDetails/MovieVote'

interface MovieSynopsisModalProps {
  isOpen: boolean,
  onClose: () => void,
  movieId: string,
}

export function MovieSynopsisModal ({ isOpen, onClose, movieId }: MovieSynopsisModalProps) {
  const [isLoad, setIsLoad] = useState(false)
  const { data: movieDetailSData, isLoading } = useMovieDetails(movieId)
  const {
    title,
    poster_path: posterPath,
    original_title: originalTitle,
    release_date: releaseDate,
    runtime,
  } = movieDetailSData || {}
  const imagePath = `${MOVIE_IMAGE_BASE_URL}${posterPath}`
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior="inside" size={['md', 'lg', 'xl', '2xl', '3xl']}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={4}>
          {
            !isLoading
              ? <VStack gap={4} width="100%">
                <Grid templateColumns="repeat(12, 1fr)" gap={4} width="100%">
                  <GridItem colSpan={4}>
                    <AspectRatio ratio={2 / 3}>
                      <Image
                        src={imagePath}
                        alt={title}
                        bgColor="gray.300"
                        opacity={isLoad ? 1 : 0}
                        transition="opacity 0.6s ease-in-out"
                        onLoad={() => setIsLoad(true)}
                        borderRadius={12}
                        boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.1)"
                      />
                    </AspectRatio>
                  </GridItem>
                  <GridItem colSpan={8}>
                    <VStack gap={2} height="100%" alignItems="flex-start">
                      <MovieTitle title={title} originalTitle={originalTitle} releaseDate={releaseDate} runtime={runtime} isHorizontalAligned={false} />
                      <MovieGenres movieId={movieId} />
                      <MovieVote movieId={movieId} />
                    </VStack>
                  </GridItem>
                </Grid>
                <MovieOverview movieId={movieId} noOfLines={6} />
              </VStack>
              : <Flex gap={4} alignItems="center" justifyContent="center" minH={200}>
                <Spinner size="xl" />
              </Flex>
          }
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
