import { useParams } from 'react-router-dom'
import { useMovieCredits } from '../../hooks-api/useMovieCredits'
import { Box, Button, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { AvatarTooltip } from '../common/AvatarTooltip'
import { MovieCastModal } from './MovieCastModal'
import { colors } from '../../styles/colors'

export function MovieCast () {
  const { movieId } = useParams()
  const { data: movieCreditsData } = useMovieCredits(movieId)
  const castList = movieCreditsData?.cast.slice(0, 15)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Flex w="100%" flexDirection="column" gap={3}>
        <HStack>
          <Text as="b" fontSize="xl">演員</Text>
          <Button backgroundColor={colors.gray['300']} color={colors.gray['800']} size="sm" borderRadius={8} onClick={onOpen}>查看更多</Button>
        </HStack>
        <Flex overflowX="auto" gap={4}>
          <HStack>
            {
              castList?.map(cast => (
                <Box key={cast.original_name} maxW={96} pt={2} pb={2}>
                  <AvatarTooltip key={cast.original_name} originalName={cast.original_name} profilePath={cast.profile_path} />
                </Box>
              ))
            }
          </HStack>
        </Flex>
      </Flex>
      <MovieCastModal isOpen={isOpen} onClose={onClose} allCast={movieCreditsData?.cast} />
    </>
  )
}
