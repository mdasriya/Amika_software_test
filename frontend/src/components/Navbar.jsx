import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, ButtonGroup } from '@chakra-ui/react'
const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div style={({ width: "100%", borderBottom: "1px solid gray", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between" })}>
        <h1>Client Create Application</h1>
        <div style={{ display: "flex", gap: 5 }}>
          <div>
            <Button colorScheme='teal' variant='outline' onClick={() => navigate("/addclient")}>AddClient</Button>
          </div>
          <Button colorScheme='teal' variant='outline' onClick={() => navigate("/login")}>
            Login
          </Button>
          <div>
            <Button colorScheme='teal' variant='outline' onClick={() => navigate("/signup")}>SignUp</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
