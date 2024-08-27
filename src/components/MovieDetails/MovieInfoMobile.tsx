import { AspectRatio, Grid, GridItem, Image } from '@chakra-ui/react'
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
  const [isVideoLoad, setIsVideoLoad] = useState(false)

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" alignItems="center" width="50%">
        <GridItem colSpan={12}>
          <AspectRatio ratio={2 / 3} boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.1)" borderRadius={12}>
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
      </Grid>
      <Grid templateColumns="repeat(12, 1fr)" alignItems="center" width="100%">
        <GridItem colSpan={12} borderRadius={12} boxShadow="2px 2px 4px 2px rgba(0, 0, 0, 0.1)">
          <AspectRatio>
            <iframe
              key={videoUrl}
              title={title}
              src={videoUrl}
              allowFullScreen
              onLoad={() => setIsVideoLoad(true)}
              style={{
                borderRadius: 12,
                opacity: isVideoLoad ? 1 : 0,
                transition: 'opacity 0.5s ease-in-out',
              }}
            />
          </AspectRatio>
        </GridItem>
      </Grid>
      <MovieGenres />
      <MovieOverview />
    </>
  )
}
