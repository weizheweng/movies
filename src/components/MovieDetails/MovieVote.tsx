import { StarIcon } from '@chakra-ui/icons'
import { HStack, Text, useBreakpointValue } from '@chakra-ui/react'

interface MovieVoteProps {
  voteAverage?: number,
}

export function MovieVote ({ voteAverage }: MovieVoteProps) {
  const fontSize = useBreakpointValue({ base: 'lg', sm: 'lg', md: 'xl', lg: 'xl' })
  return (
    <HStack gap={1} width="100%" justifyContent="flex-end">
      <StarIcon color="yellow.500" fontSize={fontSize} />
      <HStack gap={0}>
        <Text as="b" fontSize={fontSize}>
          {voteAverage?.toFixed(1)}
        </Text>
        <Text color="gray.500" fontSize={fontSize}>/10</Text>
      </HStack>
    </HStack>
  )
}
