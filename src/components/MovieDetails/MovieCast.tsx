import { useParams } from 'react-router-dom'
import { useMovieCredits } from '../../hooks-api/useMovieCredits'
import { Button, HStack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import { AvatarTooltip } from '../common/AvatarTooltip'
import { MovieCastModal } from './MovieCastModal'
import { colors } from '../../styles/colors'

export function MovieCast () {
  const { id } = useParams()
  const { data: movieCreditsData } = useMovieCredits(id)
  const castList = movieCreditsData?.cast.slice(0, 15)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <VStack alignItems="flex-start" width="100%" gap={3} overflow="auto">
        <HStack>
          <Text as="b" fontSize="xl">演員</Text>
          <Button backgroundColor={colors.gray['300']} color={colors.gray['800']} size="sm" borderRadius={8} onClick={onOpen}>查看更多</Button>
        </HStack>
        <HStack>
          {
          castList?.map(cast => (
            <AvatarTooltip key={cast.name} originalName={cast.original_name} profilePath={cast.profile_path} />
          ))
        }
        </HStack>
      </VStack>
      <MovieCastModal isOpen={isOpen} onClose={onClose} allCast={movieCreditsData?.cast} />
    </>
  )
}
