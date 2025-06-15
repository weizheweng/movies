import { Skeleton, VStack } from '@chakra-ui/react'

export function SkeletonMovieDetailsMobile () {
  return (
    <VStack gap={4} alignItems="center">
      <Skeleton borderRadius={6} h="105" w="50%" />
      <Skeleton borderRadius={6} h="300" w="50%" />
      <Skeleton borderRadius={6} h="300" w="100%" />
      <Skeleton borderRadius={6} h="200" w="100%" />
    </VStack>
  )
}
