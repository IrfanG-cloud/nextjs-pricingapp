"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Monthly from './monthly/page'
import Footer from './footer'
import Header from './header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <head />
      <body>
          <Box w="100%" bg='black' h='auto'>
            <Header />
            {children}
            <Monthly />
            <Footer />

          </Box>
      </body>
    </ChakraProvider>
  )
}
