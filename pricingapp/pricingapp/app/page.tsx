"use client"

import React from "react"
import {Box, Link} from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';
import NextLink from 'next/link'

export default function Home() {

  return (
    <Box color='white' textAlign='center' mt='5rem'>
     <Box fontSize='70px' fontWeight='extrabold'>Pricing Plans</Box>
     <Box fontSize='20px'>Start building for free, then add a site plan to go live. Account plans unlock additional features.</Box>
     <Stack direction='row' mt='3rem'>
      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        width='100%'
        bgPosition='center'
        bgRepeat='no-repeat'
        color='gray'
        mb={2}
      >
        <ButtonGroup gap='4'>
          <Button  colorScheme='gray' variant='solid' cursor='pointer' >
              <Link href='/monthly'>Monthly Billing</Link>
          </Button>
          <Button  colorScheme='gray' variant='outline'>
          <NextLink href='/pricing' passHref>
              <Link>Yearly Billing</Link>
          </NextLink>
          </Button>
        </ButtonGroup>
      </Box>
      </Stack>
    </Box>
  )
}
