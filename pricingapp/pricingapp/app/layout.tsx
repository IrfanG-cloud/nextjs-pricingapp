
"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../app/header/page'
import { Box } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <head />
      <body>
          <Box w="100%" bg='black' h='100vh'>
            <Header />
            {children}
          </Box>
      </body>
    </ChakraProvider>
  )
}
