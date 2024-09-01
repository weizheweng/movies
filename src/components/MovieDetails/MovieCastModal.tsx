import { Avatar, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, VStack } from '@chakra-ui/react'
import { type Cast } from '../../types/MovieCredits'
import { CAST_IMAGE_BASE_URL } from '../../constants/baseUrl'

interface MovieCastModalProps {
  isOpen: boolean,
  onClose: () => void,
  allCast?: Cast[],
}

export function MovieCastModal ({ isOpen, onClose, allCast }: MovieCastModalProps) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p={3} boxShadow="0 4px 4px rgba(0, 0, 0, 0.1)">全部演員</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
            {
              allCast?.map(cast => (
                <HStack key={cast.id} gap={3} width="100%" justifyContent="flex-start">
                  <Avatar name={cast.original_name} src={`${CAST_IMAGE_BASE_URL}${cast.profile_path}`} size="lg" />
                  <VStack alignItems="flex-start" gap={1}>
                    <Text fontSize="lg">{cast.original_name}</Text>
                    <Text color="gray.500">{cast.character}</Text>
                  </VStack>
                </HStack>
              ))
            }
            <HStack />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
