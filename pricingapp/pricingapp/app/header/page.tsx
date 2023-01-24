"use client"

import { Flex, Grid, GridItem, Heading, Link }  from '@chakra-ui/react'
import React from 'react'
import { Button } from '@chakra-ui/react'


export default function Header() {

  return (
    <Grid  w='100%' h='64px'>
        <Grid display='flex' pt='16px' pl='236px'>
            <GridItem w='73%'>
                <Flex >
                    <Link href="/">
                        <Heading as='h3' size='lg' color='white' mr='1rem' > Panaverse DAO</Heading>
                    </Link>
                    <Button 
                        color='white' 
                        variant='link' 
                        fontSize='16px' 
                        ml='2rem'
                        >
                            Pricing
                    </Button>
                    <Button color='white' variant='link'fontSize='16px' ml='2rem'>Account</Button>
                </Flex>
            </GridItem>
            <GridItem w='10%'>
                <Flex display='flex' justify='flex-end'>
                    <Button color='white' as='b' variant='link'fontSize='20px'>Sign in</Button>
                </Flex>
            </GridItem>
        </Grid>
    </Grid>
        
   
  )
  }