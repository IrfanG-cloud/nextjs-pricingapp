"use client"

import {
  Box,
  Center,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import CheckIcon from '@chakra-ui/icons';

export default function Yearly() {
  return (
    <Center py={6} mt={10} >
      <Box
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        
        >
        <Stack
          textAlign={'center'}
          p={3}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('red.50', 'red.900')}
            p={2}
            px={3}
            color={'red.500'}
            rounded={'full'}>
            Hobby
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              100
            </Text>
            <Text color={'gray.500'}>/yearly</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={2} display='flex'>
          <Box ml='4'>
            <List spacing={4}>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                5.000 page views
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 automation executions
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 identified users
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                All features
              </ListItem>
            </List>
            <Button
              ml={4}
              mt={10}
              w={'full'}
              bg={'red.500'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}>
              Start your trial
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        ml={'4'}>
        <Stack
          textAlign={'center'}
          p={3}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('red.50', 'red.900')}
            p={2}
            px={3}
            color={'red.500'}
            rounded={'full'}>
            Freelancer
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              200
            </Text>
            <Text color={'gray.500'}>/yearly</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={2} display='flex'>
          <Box ml={4}>
            <List spacing={4}>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                5.000 page views
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 automation executions
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 identified users
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                All features
              </ListItem>
            </List>
            <Button
            ml={4}
              mt={10}
              w={'full'}
              bg={'red.500'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}>
              Start your trial
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        ml={'4'}
      >
        <Stack
          textAlign={'center'}
          p={3}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('red.50', 'red.900')}
            p={2}
            px={3}
            color={'red.500'}
            rounded={'full'}>
           Startup
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
              300
            </Text>
            <Text color={'gray.500'}>/yearly</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={4} py={2} display='flex'  ml={'2'}>
          <Box ml={4}>
            <List spacing={4}>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                5.000 page views
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 automation executions
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 identified users
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                All features
              </ListItem>
            </List>
            <Button
              ml={4}
              mt={10}
              w={'full'}
              bg={'red.500'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}>
              Start your trial
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        maxW={'300px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        ml={'4'}
      >
        <Stack
          textAlign={'center'}
          p={3}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Text
            fontSize={'sm'}
            fontWeight={500}
            bg={useColorModeValue('red.50', 'red.900')}
            p={2}
            px={3}
            color={'red.500'}
            rounded={'full'}>
            Enterprise
          </Text>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'}>$</Text>
            <Text fontSize={'6xl'} fontWeight={800}>
             400
            </Text>
            <Text color={'gray.500'}>/yearly</Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={2} display='flex'>
          <Box>
            <List spacing={4}>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                5.000 page views
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 automation executions
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                50 identified users
              </ListItem>
              <ListItem>
                {/* <ListIcon as={CheckIcon} color="green.400" /> */}
                All features
              </ListItem>
            </List>
            <Button
              mt={10}
              w={'full'}
              bg={'red.500'}
              color={'white'}
              rounded={'xl'}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
              _hover={{
                bg: 'red.500',
              }}
              _focus={{
                bg: 'red.500',
              }}>
              Start your trial
            </Button>
          </Box>
        </Box>
      </Box>
    </Center>
  );
}