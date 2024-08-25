import { Box, Text, Image, VStack, Tag, TagLeftIcon, HStack, AspectRatio } from '@chakra-ui/react'
import { type Movie } from '../../types/Movies'
import { MOVIE_IMAGE_BASE_URL } from '../../constants/constants'
import { StarIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface MoviesListCardProps {
  data: Movie,
}

const cardStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 6,
  borderColor: 'gray.400',
  boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
}

export function MovieListCard ({ data }: MoviesListCardProps) {
  const navigate = useNavigate()
  const { title, poster_path: posterPath } = data
  const imagePath = `${MOVIE_IMAGE_BASE_URL}${posterPath}`
  const [isLoad, setIsLoad] = useState(false)

  return (
    <Box sx={cardStyle} _hover={{ opacity: 0.6 }} onClick={() => navigate(`/movies/${data.id}`)}>
      <AspectRatio maxW="200px" ratio={3 / 4}>
        <Image
          src={imagePath}
          alt={data.title}
          width="100%"
          bgColor="gray.300"
          borderTopRadius={6}
          opacity={isLoad ? 1 : 0}
          transition="opacity 0.6s ease-in-out"
          onLoad={() => setIsLoad(true)}

        />
      </AspectRatio>
      <VStack p={2} pt={3} gap={1.5} alignItems="flex-start">
        <HStack gap={2}>
          <Tag>
            <TagLeftIcon as={StarIcon} color="yellow.500" />
            {(data.vote_average).toFixed(1)}
          </Tag>
          <Tag>
            {data.original_language.toUpperCase()}
          </Tag>
        </HStack>
        <Text fontSize="md" fontWeight="bold" noOfLines={1}>
          {title}
        </Text>
      </VStack>
    </Box>
  )
}
