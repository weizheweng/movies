import { ArrowLeft, ArrowRight, DoubleArrowLeft, DoubleArrowRight } from '../Icons/Icons'
import { HStack, IconButton, Text } from '@chakra-ui/react'

const buttonProps = {
  variant: 'outline',
  size: 'sm',
  borderColor: 'gray.600',
}

interface PaginationProps {
  currentPage: number,
  totalPages?: number,
  handlePageChange: (page: number) => void,
}

export function Pagination ({ currentPage, totalPages, handlePageChange }: PaginationProps) {
  const isFirstPageDisabled = Number(currentPage) === 1
  const isLastPageDisabled = Number(currentPage) === totalPages
  const isPrevDisabled = Number(currentPage) === 1
  const isNextDisabled = Number(currentPage) === totalPages

  return (
    <HStack gap={3} mt={6} width="100%" alignItems="center" justifyContent="center">
      <IconButton
        {...buttonProps}
        aria-label="Previous"
        icon={<DoubleArrowLeft />}
        isDisabled={isFirstPageDisabled}
        onClick={() => handlePageChange(1)}
      />
      <IconButton
        {...buttonProps}
        aria-label="Previous"
        icon={<ArrowLeft />}
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
        icon={<ArrowRight />}
        isDisabled={isNextDisabled}
        onClick={() => handlePageChange(currentPage + 1)}
      />
      <IconButton
        {...buttonProps}
        aria-label="Previous"
        icon={<DoubleArrowRight />}
        isDisabled={isLastPageDisabled}
        onClick={() => handlePageChange(totalPages ?? 0)}
      />
    </HStack>
  )
}
