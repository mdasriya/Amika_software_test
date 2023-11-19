'use client'

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
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleSignup = (e) => {
    e.preventDefault()
    let data = { name, email, pass }
    axios.post("http://localhost:8080/user/register", data)
      .then(res => {
        console.log(res.data)
        alert(res.data.msg)
      })
    setName("")
    setEmail("")
    setPass("")
  }


  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel> Name</FormLabel>
                  <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
              </Box>

            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={pass} onChange={(e) => setPass(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleSignup}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <a href='/login' color={'blue.400'}>Login</a>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Signup