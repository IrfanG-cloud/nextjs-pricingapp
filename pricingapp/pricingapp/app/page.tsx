"use client"

import React from "react"
import {Box, Link} from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';

export default function Home() {

  return (
    <Box color='white' textAlign='center' mt='5rem'>
     <Box fontSize='70px' fontWeight='extrabold' color='red.500'>Pricing Plans</Box>
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
          <Button  bg='red.500' color='white' variant='solid' cursor='pointer' >
              <Link href='/monthly'>Monthly Billing</Link>
          </Button>
          <Button   
            colorScheme='white' 
            _hover={{ 
              color: 'white',
              bg:'red'
          }}
            >
              <Link href="/yearly">Yearly Billing</Link>
          </Button>
        </ButtonGroup>
      </Box>
      </Stack>
    </Box>
  )
}
