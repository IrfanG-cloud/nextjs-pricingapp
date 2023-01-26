"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Home from '../login/page'


export default function MonthlyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <head />
      <body>
      
        <Box>    
          {/* <Home /> */}
          {/* {children} */}
        </Box>
        </body>
    </ChakraProvider>
  )
}
