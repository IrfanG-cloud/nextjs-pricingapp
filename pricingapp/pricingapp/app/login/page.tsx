"use client"

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

      return (
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}
          bg={useColorModeValue('gray.50', 'gray.800')}>
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'} textAlign={'center'}>
                Sign in
              </Heading>
            </Stack>
            <Box
              rounded={'lg'}
              bg={useColorModeValue('white', 'gray.700')}
              boxShadow={'lg'}
              p={8}>
              <Stack spacing={4}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
                    <InputRightElement h={'full'}>
                      <Button
                        variant={'ghost'}
                        >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button bg='red.500' >
                    <Link href='/'>
                      Sign in
                    </Link>
                   
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={'center'}>
                    Already a user? <Link color={'blue.400'}>Sign up</Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      );
    }

    // <Box color='white' textAlign='center' mt='5rem'>
    //  <Box fontSize='70px' fontWeight='extrabold' color='red'>Pricing Plans</Box>
    //  <Box fontSize='20px'>Start building for free, then add a site plan to go live. Account plans unlock additional features.</Box>
    //  <Stack direction='row' mt='3rem'>
    //   <Box
    //     display='flex'
    //     alignItems='center'
    //     justifyContent='center'
    //     width='100%'
    //     bgPosition='center'
    //     bgRepeat='no-repeat'
    //     color='gray'
    //     mb={2}
    //   >
    //     <ButtonGroup gap='4'>
    //       <Button  colorScheme='red' variant='solid' cursor='pointer' >
    //           <Link href='/monthly'>Monthly Billing</Link>
    //       </Button>
    //       <Button   
    //         colorScheme='white' 
    //         _hover={{ 
    //           color: 'white',
    //           bg:'red'
    //       }}
    //         >
    //           <Link href="/yearly">Yearly Billing</Link>
    //       </Button>
    //     </ButtonGroup>
    //   </Box>
    //   </Stack>
    // </Box>
