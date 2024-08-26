import { StarIcon } from '@chakra-ui/icons'
import { HStack, Text } from '@chakra-ui/react'

interface MovieVoteProps {
  voteAverage?: number,
  voteCount?: number,
}

export function MovieVote ({ voteAverage, voteCount }: MovieVoteProps) {
  const convertedVoteAverage = voteCount ? (voteCount / 1000).toFixed(1) : 0
  return (
    <HStack gap={1} width="100%" justifyContent="flex-end">
      <StarIcon color="yellow.500" />
      <HStack gap={0}>
        <Text as="b">
          {voteAverage?.toFixed(1)}
        </Text>
        <Text color="gray.500">/10</Text>
      </HStack>
      <Text ml={2} color="gray.500">
        {`${convertedVoteAverage}K`}
      </Text>
    </HStack>
  )
}
