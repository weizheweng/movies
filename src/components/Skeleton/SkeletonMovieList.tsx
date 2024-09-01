import { Heading, SimpleGrid, Skeleton } from '@chakra-ui/react'

export function SkeletonMovieList () {
  return (
    <>
      <Skeleton>
        <Heading size="md">
          熱門推薦
        </Heading>
      </Skeleton>
      <SimpleGrid columns={[2, 3, 4, 5]} spacing={6} mt={4}>
        {Array.from({ length: 20 }).map((_, index) => (
          <Skeleton borderRadius={6} key={index} w="200" h="300" />
        ))}
      </SimpleGrid>
    </>
  )
}
