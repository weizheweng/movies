import { Box, Text, Image, VStack, Tag, TagLeftIcon, HStack, AspectRatio, Icon, TagLabel, Flex, useDisclosure } from '@chakra-ui/react'
import { type Movie } from '../../types/Movies'
import { MOVIE_IMAGE_BASE_URL } from '../../constants/constants'
import { InfoIcon, StarIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { colors } from '../../styles/colors'
import { MovieSynopsisModal } from './MovieSynopsisModal'

const cardStyle = {
  width: '100%',
  height: '100%',
  borderRadius: 12,
  borderColor: 'gray.400',
  boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
}
interface MovieListCardProps {
  data: Movie,
  isShowLanguage?: boolean,
}

export function MovieListCard ({ data, isShowLanguage = true }: MovieListCardProps) {
  const navigate = useNavigate()
  const { title, poster_path: posterPath } = data
  const imagePath = `${MOVIE_IMAGE_BASE_URL}${posterPath}`
  const [isLoad, setIsLoad] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleMovieClick = () => {
    window.scrollTo(0, 0)
    navigate(`/movies/${data.id}`)
  }

  return (
    <>
      <Box sx={cardStyle}>
        <AspectRatio ratio={2 / 3} _hover={{ opacity: 0.6 }} onClick={handleMovieClick}>
          <Image
            src={imagePath}
            alt={title}
            width="100%"
            bgColor="gray.300"
            borderTopRadius={12}
            opacity={isLoad ? 1 : 0}
            transition="opacity 0.6s ease-in-out"
            onLoad={() => setIsLoad(true)}
          />
        </AspectRatio>
        <VStack p={2} pt={3} gap={1.5} alignItems="flex-start">
          <HStack gap={1} justifyContent="space-between" width="100%">
            <Flex gap={1}>
              <Tag gap={1} backgroundColor={colors.gray['300']}>
                <TagLeftIcon as={StarIcon} color="yellow.500" mr={0} />
                <TagLabel color={colors.gray['800']}>
                  {(data.vote_average).toFixed(1)}
                </TagLabel>
              </Tag>
              {
                isShowLanguage &&
                  <Tag backgroundColor={colors.gray['300']}>
                    <TagLabel color={colors.gray['800']}>
                      {data.original_language.toUpperCase()}
                    </TagLabel>
                  </Tag>
              }
            </Flex>
            <Icon as={InfoIcon} boxSize={5} _hover={{ opacity: 0.6 }} onClick={onOpen} />
          </HStack>
          <Text fontSize="md" fontWeight="bold" noOfLines={1} _hover={{ opacity: 0.6 }} onClick={() => navigate(`/movies/${data.id}`)}>
            {title}
          </Text>
        </VStack>
      </Box>
      {
        isOpen && <MovieSynopsisModal isOpen={isOpen} onClose={onClose} movieId={String(data.id)} />
      }
    </>
  )
}
