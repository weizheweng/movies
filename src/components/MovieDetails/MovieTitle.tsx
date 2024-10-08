import { Text, VStack, HStack, useBreakpointValue } from '@chakra-ui/react'
import { convertMinutes } from '../../utils/convertMinutes'

interface MovieInfoProps {
  title?: string,
  originalTitle?: string,
  releaseDate?: string,
  runtime?: number,
  isHorizontalAligned?: boolean,
}

export function MovieTitle ({ title, originalTitle, releaseDate, runtime, isHorizontalAligned = true }: MovieInfoProps) {
  const titleFontSize = useBreakpointValue({ base: '2xl', sm: '3xl', md: '4xl', lg: '5xl' })
  const otherFontSize = useBreakpointValue({ base: 'sm', sm: 'sm', md: 'md', lg: 'md' })
  const alignment = useBreakpointValue({ base: 'center', sm: 'flex-start' })

  return (
    <VStack alignItems={isHorizontalAligned ? alignment : 'flex-start'} gap={0.5} width="100%">
      <Text fontSize={titleFontSize} noOfLines={1} as="b">
        {title}
      </Text>
      <Text fontSize={otherFontSize} noOfLines={1} color="gray.500" as="i">
        {originalTitle}
      </Text>
      <HStack>
        <Text fontSize={otherFontSize} color="gray.500">
          {releaseDate}
        </Text>
        <Text fontSize={otherFontSize} color="gray.500">
          ·
        </Text>
        <Text fontSize={otherFontSize} color="gray.500">
          {runtime ? convertMinutes(runtime) : '-'}
        </Text>
      </HStack>
    </VStack>
  )
}
