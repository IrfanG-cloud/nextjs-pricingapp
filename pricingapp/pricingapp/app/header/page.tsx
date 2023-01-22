import { Box }  from '@chakra-ui/react'

import React from 'react'
import Link from 'next/link';


export default function Header() {

  return (

    <div className='styles.header'>
        <Box display='flex' bg='white'>
            <Box maxW='65%' display='flex'>
                <Box color='white'>
                    <Link href='/'>Home1</Link>
                </Box>
                <Box color='white'>
                <Link href='/about'>About</Link>
                </Box>
            </Box>
            <Box maxW='25%'>
                <Box color='white'>
                    <Link href='/signin'>Signin</Link>
                </Box>
            </Box>
   
        </Box>
    </div>
  )
  }