import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Text } from '@chakra-ui/react'

const buttonProps = {
  isRound: true,
  variant: 'outline',
  colorScheme: 'blue',
  size: 'sm',
}

interface PaginationProps {
  currentPage: number,
  totalPages?: number,
  handlePageChange: (page: number) => void,
}

export function Pagination ({ currentPage, totalPages, handlePageChange }: PaginationProps) {
  const isPrevDisabled = Number(currentPage) === 1
  const isNextDisabled = Number(currentPage) === totalPages
  return (
    <HStack gap={5} mt={6} width="100%" alignItems="center" justifyContent="center">
      <IconButton
        {...buttonProps}
        aria-label="Previous"
        icon={<ArrowBackIcon />}
        isDisabled={isPrevDisabled}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      <Text fontSize="lg" fontWeight="bold">
        {currentPage}
        {' / '}
        {totalPages}
      </Text>
      <IconButton
        {...buttonProps}
        aria-label="Next"
        icon={<ArrowForwardIcon />}
        isDisabled={isNextDisabled}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </HStack>
  )
}
