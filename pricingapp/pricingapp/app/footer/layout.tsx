
"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Footer from './page'


export default function FooterLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <head />
      <body>
      
        <Box>        
            {/* {children} */}
        </Box>
        </body>
    </ChakraProvider>
  )
}
