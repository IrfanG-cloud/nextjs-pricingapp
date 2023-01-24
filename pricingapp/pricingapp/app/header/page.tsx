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
                        <Heading as='h3' size='lg' color='red.500' mr='1rem' > Panaverse DAO</Heading>
                    </Link>
                    <Button 
                        color='red.500' 
                        variant='link' 
                        fontSize='16px' 
                        ml='4rem'
                        _hover={{ fontWeight: 'semibold', color: 'red.500'}}
                        >
                        <Link href='/monthly'>
                            Pricing
                        </Link>
                           
                    </Button>
                    <Button 
                        color='white' 
                        variant='link'
                        fontSize='16px' 
                        ml='2rem'
                        _hover={{ 
                                fontWeight: 'semibold', 
                                color: 'red.500'
                            }}
                    >
                    <Link href='/login'>
                        Account
                    </Link>
                            
                    </Button>
                </Flex>
            </GridItem>
            <GridItem w='10%'>
                <Flex display='flex' justify='flex-end'>
                    <Button 
                        color='white' 
                        as='b' 
                        variant='link' 
                        fontSize='20px' 
                        cursor='pointer'
                        _hover={{ 
                                fontWeight: 'semibold', 
                                color: 'red.500'
                    }}
                    >
                    <Link href='/login'>
                        Sign in
                    </Link>
                        
                    </Button>
                </Flex>
            </GridItem>
        </Grid>
    </Grid>
        
   
  )
  }