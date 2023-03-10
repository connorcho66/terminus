import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    h1:  `'Nosifer', sans-serif`,
    h2: `'Major mono display', sans-serif`,
    h3: `'Noto serif ahom', 'serif'`
  },
  shadows: {
    h1: '1px'
  },
  colors: {
    browns: {
      100: '#BFA58E',
      200: '#8C715A',
      300: '#735646',
      400: '#40342A'
    },
    greys: {
      100: '#D8CCC8',
      200: '#B1A7A5',
      300: '#8B8381',
      400: '#4B4746'
    }
  },
  layerStyles: {
    btnRed: {
      bgColor: 'red.800',
      rounded: 'full',
      color: 'white',
      fontFamily: 'h2',
      _hover:{ bgColor: 'red.700'},
      _focus: { boxShadow: 'none', bgColor: 'red.600'}
    }
  }
})

export default theme;
