import { Box, HStack, Tag, TagLabel, useBreakpointValue } from '@chakra-ui/react'
import * as OpenCC from 'opencc-js'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { colors } from '../../styles/colors'

interface MovieGenresProps {
  movieId?: string,
}

export function MovieGenres ({ movieId }: MovieGenresProps) {
  const { data: movieDetailSData } = useMovieDetails(movieId)
  const { genres } = movieDetailSData || {}
  const converter = OpenCC.Converter({ from: 'cn', to: 'tw' })
  const fontSize = useBreakpointValue({ base: 'md', sm: 'md', md: 'lg', lg: 'lg' })
  return (
    <HStack alignItems="flex-start" width="100%" gap={3} overflow="auto">
      {
        genres?.map(genre => (
          <Box key={genre.id} maxW={40} pt={0.5} pb={0.5}>
            <Tag whiteSpace="nowrap" minW="unset" backgroundColor={colors.gray['300']} borderRadius={8}>
              <TagLabel fontSize={fontSize} color={colors.gray['800']}>
                {converter(genre.name)}
              </TagLabel>
            </Tag>
          </Box>
        ))
      }
    </HStack>
  )
}
