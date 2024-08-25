import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { colors } from './colors'
import { zIndex } from './zIndex'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, colors, zIndex })

export default theme
