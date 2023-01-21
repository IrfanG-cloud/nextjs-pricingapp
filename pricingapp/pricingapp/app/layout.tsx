
"use client"

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ChakraProvider>
      <head />
      <body>{children}</body>
    </ChakraProvider>
  )
}
