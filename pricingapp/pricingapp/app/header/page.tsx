"use client"

import { Box}  from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'



export default function Header() {

  return (

    <div className='header'>
        <Box maxW='960px' flexDirection='row'>
            <Box  justifyItems='center' maxW='700px'>
                <Box color='white'>
                    <Link href={'/'}>Home</Link>
                </Box>
                <Box color='white'>
                <Link href={'/About'}>About</Link>
                </Box>
            </Box>
            <Box>
                <Box color='white'>
                <Link href={'/Signin'}>signin</Link>
                </Box>
            </Box>
            
            
        </Box>
    </div>
  )
  }