"use client"

import { Flex, Grid, GridItem, Text, Link }  from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react'


export default function Footer() {

  return (
    <Grid  w='100%' h='80px' borderTop='1px gray solid' mt={50} p={3}>
        <Grid display='flex' pt='16px' pl='236px' >
            <GridItem w='100%'>
                <Flex >
                    <Text color='white'>© 2020 ACME, Inc. All rights reserved.</Text>
                </Flex>
            </GridItem>
        </Grid>
    </Grid>
        
   
  )
  }