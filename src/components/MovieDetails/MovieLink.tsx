import { Button, Flex, Link, Text } from '@chakra-ui/react'
import { IMDB_BASE_URL } from '../../constants/constants'
import { IMDb } from '../Icons/Icons'
import { colors } from '../../styles/colors'
import { useMovieDetails } from '../../hooks-api/useMovieDetails'

interface MovieIMDbProps {
  movieId?: string,
}

export function MovieLink ({ movieId }: MovieIMDbProps) {
  const { data: movieDetailSData } = useMovieDetails(movieId)
  const { imdb_id: imdbId, homepage } = movieDetailSData || {}
  const imdbUrl = `${IMDB_BASE_URL}${imdbId}/`
  return (
    <Flex gap={2}>
      {
        homepage &&
          <Link href={homepage}>
            <Button gap={1} borderRadius={8} bgColor={colors.gray['200']} backgroundColor={colors.gray['300']} size="sm">
              <Text color={colors.gray['800']}>官方網站</Text>
            </Button>
          </Link>
      }
      <Link href={imdbUrl}>
        <Button gap={1} borderRadius={8} bgColor={colors.gray['200']} backgroundColor={colors.gray['300']} size="sm">
          <IMDb width={16} height={16} />
          <Text color={colors.gray['800']}>IMDb</Text>
        </Button>
      </Link>
    </Flex>
  )
}
