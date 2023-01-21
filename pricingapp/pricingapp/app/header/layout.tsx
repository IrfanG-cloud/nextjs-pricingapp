
"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
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
        <Box>        
            {children}
        </Box>
        </body>
    </ChakraProvider>
  )
}
