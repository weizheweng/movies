import { Box, HStack, IconButton, useColorMode } from '@chakra-ui/react'
import { Logo } from '../Icons/Icons'
import { Header } from './Header'
import { SunIcon, MoonIcon, SearchIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

const Left = () => {
  const navigate = useNavigate()
  const handleToHomePage = () => navigate('/')
  return (
    <Box h={6} w={6} cursor="pointer">
      <Logo onClick={handleToHomePage} />
    </Box>
  )
}

const Right = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'
  const navigate = useNavigate()
  const handleSearch = () => navigate('/search')
  return (
    <HStack gap={2}>
      <IconButton
        aria-label="Toggle theme"
        icon={isLight ? <SunIcon /> : <MoonIcon />}
        variant="ghost"
        isRound
        onClick={toggleColorMode}
        w={6}
        h={6}
      />
      <IconButton
        aria-label="Search"
        icon={<SearchIcon />}
        variant="ghost"
        isRound
        onClick={handleSearch}
        w={6}
        h={6}
      />
    </HStack>
  )
}

export function MovieHeader () {
  return <Header left={<Left />} right={<Right />} />
}
