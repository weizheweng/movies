import { useParams } from 'react-router-dom'
import { useMovieCredits } from '../../hooks-api/useMovieCredits'
import { HStack, Text, VStack } from '@chakra-ui/react'
import { AvatarTooltip } from '../common/AvatarTooltip'

export function MovieDirector () {
  const { id } = useParams()
  const { data: movieCreditsData } = useMovieCredits(id)
  const directors = movieCreditsData?.crew.filter(crew => crew.job === 'Director')
  return (
    <VStack alignItems="flex-start" width="100%" gap={3}>
      <Text as="b" fontSize="xl">導演</Text>
      <HStack gap={1}>
        {
          directors?.map(director => (
            <AvatarTooltip key={director.name} originalName={director.original_name} profilePath={director.profile_path} />
          ))
        }
      </HStack>
    </VStack>
  )
}
