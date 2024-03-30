'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()
  const handleLogin = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = { email, pass }
    axios.post("http://localhost:8080/user/login", data)
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token)
      if(res.data.msg === "register first"){
        toast({
          title: res.data.msg,
       position:'top-right',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return
      }
        setLoading(false)
        if(res.data.token){
          toast({
            title: 'Login Success',
         position:'top-right',
            status: 'success',
            duration: 3000,
            isClosable: true,
          })
          setEmail("")
          setPass("")
          navigate("/")
        }
      })
      .catch((error)=> {
        console.log(error)
    setLoading(false)
      })
  
  }
 



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
             {loading ?  <Button
               
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                wait...
              </Button>: <Button
                onClick={handleLogin}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>}
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
export default Login