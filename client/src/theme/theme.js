import { extendTheme } from '@chakra-ui/react'
// import "@fontsource/nosifer";

const theme = extendTheme({
  fonts: {
    h1:  `'Nosifer', sans-serif`,
      // fontSize: ['48px', '72px']
    h2: `'Major mono display', sans-serif`,
  },
  fontSizes: {
    h1: '90px'
  },
  shadows: {
    h1: '1px'
  },
  colors: {

  }
})

export default theme;
