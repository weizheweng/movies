import { SearchIcon } from '@chakra-ui/icons'
import { Button, Heading, VStack } from '@chakra-ui/react'

interface SearchNotFoundProps {
  clearSearch?: () => void,
}

export function SearchNotFound ({ clearSearch }: SearchNotFoundProps) {
  return (
    <VStack p={30} align="center" spacing={6}>
      <SearchIcon boxSize="200px" />
      <Heading fontSize={['lg', 'xl']}>很抱歉，查無資料</Heading>
      <Button variant="outline" onClick={clearSearch}>
        清除搜尋
      </Button>
    </VStack>
  )
}
