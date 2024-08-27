import { useParams } from 'react-router-dom'
import { useMovieCredits } from '../../hooks-api/useMovieCredits'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { AvatarTooltip } from '../common/AvatarTooltip'

export function MovieCast () {
  const { id } = useParams()
  const { data: movieCreditsData } = useMovieCredits(id)
  const castList = movieCreditsData?.cast.slice(0, 15)

  return (
    <VStack alignItems="flex-start" width="100%" gap={3} overflow="auto">
      <Text as="b" fontSize="xl">演員</Text>
      <HStack>
        {
          castList?.map(cast => (
            <AvatarTooltip key={cast.name} originalName={cast.original_name} profilePath={cast.profile_path} />
          ))
        }
      </HStack>
    </VStack>
  )
}
