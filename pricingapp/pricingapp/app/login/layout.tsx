"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Login from './page'


export default function LoginLayout({
  // children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <head />
      <body>
          <Box w="100%" bg='black' h='auto'>
            {/* {children} */}
            <Login />
          </Box>
      </body>
    </ChakraProvider>
  )
}
