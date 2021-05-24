import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto Condensed',
    body: 'Roboto Condensed'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.900',
        fontWeight: 500
      },
    }
  },
})