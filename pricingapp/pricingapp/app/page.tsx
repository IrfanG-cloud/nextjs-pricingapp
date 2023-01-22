"use client"

import React from "react"
import {Box} from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/react';

export default function Home() {

  return (
    <Box color='white' textAlign='center' mt='6rem'>
     <Box fontSize='80px' fontWeight='extrabold'>Pricing Plans</Box>
     <Box fontSize='25px'>Start building for free, then add a site plan to go live. Account plans unlock additional features.</Box>
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
          <Button  colorScheme='gray' variant='outline'>Monthly Billing</Button>
          <Button  colorScheme='gray' variant='outline'>Yearly Billing</Button>
        </ButtonGroup>
      </Box>
      </Stack>
    </Box>
  )
}
