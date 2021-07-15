import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import ChakraTheme  from '../styles/chakra-theme'


const App = ({ Component, pageProps }: AppProps) => (

    <ChakraProvider theme = { ChakraTheme } >
      <Component {...pageProps} />
    </ChakraProvider>
)

export default App