import { type ReactNode } from 'react'
import { HStack, useColorMode } from '@chakra-ui/react'
import { zIndex } from '../../styles/zIndex'
import { colors } from '../../styles/colors'

interface HeaderProps {
  left?: ReactNode,
  right?: ReactNode,
}

export function Header ({ left, right }: HeaderProps) {
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  const headerStyle = {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: zIndex.header,
    backgroundColor: isLight ? colors.white : colors.gray['800'],
    boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
    maxWidth: '1200px',
    margin: '0 auto',
  }
  return (
    <HStack sx={headerStyle}>
      {left}
      {right}
    </HStack>
  )
}
