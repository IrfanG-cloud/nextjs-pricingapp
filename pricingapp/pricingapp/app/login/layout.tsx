"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './header/page'
import { Box } from '@chakra-ui/react'
import Card from './pricing/page'
import Pricing from './pricing/page'

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
            <Pricing />
          </Box>
      </body>
    </ChakraProvider>
  )
}
