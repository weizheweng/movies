import { HStack, Tag, TagLabel, useBreakpointValue } from '@chakra-ui/react'
import * as OpenCC from 'opencc-js'
import { useParams } from 'react-router-dom'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'
import { colors } from '../../styles/colors'

export function MovieGenres () {
  const { id } = useParams()
  const { data: movieDetailSData } = useMovieDetails(id)
  const { genres } = movieDetailSData || {}
  const converter = OpenCC.Converter({ from: 'cn', to: 'tw' })
  const fontSize = useBreakpointValue({ base: 'md', sm: 'md', md: 'lg', lg: 'lg' })
  return (
    <HStack alignItems="flex-start" width="100%" gap={3} overflowX="auto">
      {
        genres?.map(genre => (
          <Tag key={genre.id} backgroundColor={colors.gray['300']}>
            <TagLabel fontSize={fontSize} color={colors.gray['800']}>
              {converter(genre.name)}
            </TagLabel>
          </Tag>
        ))
      }
    </HStack>
  )
}
