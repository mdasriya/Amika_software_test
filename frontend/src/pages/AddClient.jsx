'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import axios from "axios"
const AddClient = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [Number, setNumber] = useState("")
  const [AadharId, setAadhar] = useState("")
  const [company, setCompany] = useState("")

  const handleAddClient = (e) => {
    e.preventDefault()
    const data = { name, email, address, Number, AadharId, company }
    axios.post("http://localhost:8080/client/create", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        console.log(res.data.msg);
        alert(res.data.msg)
      })
    setName("")
    setEmail("")
    setAddress("")
    setNumber("")
    setAadhar("")
    setCompany("")
  }
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mobile Number</FormLabel>
              <Input type="text" value={Number} onChange={(e) => setNumber(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Address</FormLabel>
              <Input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Company Name</FormLabel>
              <Input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Aadhar id</FormLabel>
              <Input type="text" value={AadharId} onChange={(e) => setAadhar(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
              </Stack>
              <Button
                onClick={handleAddClient}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Add Client
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
export default AddClient