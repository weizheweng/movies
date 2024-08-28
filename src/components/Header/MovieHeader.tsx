import { Box, IconButton, useColorMode } from '@chakra-ui/react'
import { Logo } from '../Icons/Icons'
import { Header } from './Header'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const Left = () => {
  const navigate = useNavigate()
  const handleToHomePage = () => navigate('/')
  return (
    <Box h={6} w={6}>
      <Logo onClick={handleToHomePage} />
    </Box>
  )
}

const Right = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={isLight ? <SunIcon /> : <MoonIcon />}
      variant="ghost"
      isRound
      onClick={toggleColorMode}
      w={6}
      h={6}
    />
  )
}

export function MovieHeader () {
  return <Header left={<Left />} right={<Right />} />
}
