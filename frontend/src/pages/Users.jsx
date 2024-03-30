import { Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"


const Users = () => {
const [users, setUsers]= useState([])
    
  useEffect(() => {
    axios.get("http://localhost:8080/user", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      })
  }, [])
  return (
    <>
    {
      users.length<=0 ? <h1 style={{position:"absolute", top:"50vh", left:"45%", fontSize:"30px",fontWeight:"600"}}>No Users ...</h1> : <div style={{ marginTop: "20px", padding: "20px" }}>
        <Text fontSize="20px" fontWeight={"bold"} mb={2}>All Users...</Text>
        <table>
          <tr>
            <th>sr</th>
            <th>User</th>
            {/* <th>Number</th> */}
            <th>Email</th>
            {/* <th>Address</th> */}
            {/* <th>Company</th> */}
            {/* <th>Aadhar_ID</th> */}
            {/* <th>Update</th>
            <th>Delete</th> */}

          </tr>

          {
            users && users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                 
                  {/* <td className='update' onClick={() => handleUpdate({ "name": item.name, "_id": item._id, "number": item.Number, "email": item.email, "address": item.address, "company": item.company, "aadhar": item.AadharId })}>update</td>
                  <td className='delete' onClick={() => handleDelete(item._id)}>Delete</td> */}
                  {/* <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Create your account</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <Flex gap={3}>
                          <FormControl mt={3} >
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} onChange={handleInputChange} placeholder='name' name='name' value={updateData.name} />
                          </FormControl>
                          <FormControl mt={3} >
                            <FormLabel>Mobile Number</FormLabel>
                            <Input placeholder='number' onChange={handleInputChange} name="number" value={updateData.number} />
                          </FormControl>
                        </Flex>


                        <FormControl mt={3}>
                          <FormLabel>email</FormLabel>
                          <Input placeholder='email' onChange={handleInputChange} name="email" value={updateData.email} />
                        </FormControl>
                        <FormControl mt={3}>
                          <FormLabel>Address</FormLabel>
                          <Input placeholder='address' onChange={handleInputChange} name='address' value={updateData.address} />
                        </FormControl>
                        <FormControl mt={3}>
                          <FormLabel>Company</FormLabel>
                          <Input placeholder='Last company' onChange={handleInputChange} name='company' value={updateData.company} />
                        </FormControl>
                        <FormControl mt={3}>
                          <FormLabel>Aadhar_ID</FormLabel>
                          <Input placeholder='Last aadhar' onChange={handleInputChange} name='aadhar' value={updateData.aadhar} />
                        </FormControl>
                      </ModalBody>

                      <ModalFooter>
                        <Button colorScheme='red' mr={3} onClick={()=> handlemoodaldata(item._id)}>
                          Update
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal> */}
                </tr>
              )
            })
          }
        </table>
      </div>
    }

  </>
  )
}

export default Users
