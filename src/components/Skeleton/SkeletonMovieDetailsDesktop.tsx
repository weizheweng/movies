import { Skeleton, VStack, HStack } from '@chakra-ui/react'

export function SkeletonMovieDetailsDesktop () {
  return (
    <VStack gap={4} alignItems="flex-start">
      <Skeleton borderRadius={6} h="105" w="20%" />
      <HStack gap={4} w="100%">
        <Skeleton borderRadius={6} h="500" w="33%" />
        <Skeleton borderRadius={6} h="500" w="67%" />
      </HStack>
      <Skeleton borderRadius={6} h="20" w="40%" />
      <Skeleton borderRadius={6} h="150" w="100%" />
      <Skeleton borderRadius={6} h="500" w="100%" />
    </VStack>
  )
}
