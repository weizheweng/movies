import { AspectRatio, Box, Grid, GridItem, Image, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { MovieGenres } from './MovieGenres'
import { MovieOverview } from './MovieOverview'

interface MovieInfoDesktopProps {
  imagePath?: string,
  title?: string,
  videoUrl?: string,
}

export function MovieInfoMobile ({ imagePath, title, videoUrl }: MovieInfoDesktopProps) {
  const [isLoad, setIsLoad] = useState(false)

  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} alignItems="center" width="100%" height="100%">
        <GridItem colSpan={12} borderRadius={12} boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.1)" alignItems="flex-start">
          <AspectRatio>
            <iframe
              title={title}
              src={videoUrl}
              allowFullScreen
              style={{ borderRadius: 12 }}
            />
          </AspectRatio>
        </GridItem>
      </Grid>
      <Grid templateColumns="repeat(12, 1fr)" gap={4} alignItems="flex-start" width="100%">
        <GridItem colSpan={4} borderRadius={12} boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.1)">
          <AspectRatio ratio={4.5 / 7}>
            <Image
              src={imagePath}
              alt={title}
              width="100%"
              bgColor="gray.300"
              opacity={isLoad ? 1 : 0}
              transition="opacity 0.6s ease-in-out"
              onLoad={() => setIsLoad(true)}
              borderRadius={12}
            />
          </AspectRatio>
        </GridItem>
        <GridItem colSpan={8}>
          <MovieGenres />
          <MovieOverview />
        </GridItem>
      </Grid>
    </>
  )
}
