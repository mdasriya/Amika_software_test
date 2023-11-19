import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Text } from '@chakra-ui/react'
const Navbar = () => {
  const [auth, setAuth] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setAuth(false)
    alert("User Logout Success!!!")
  }


  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      setAuth(true)
    }

  }, [handleLogout, auth])


  return (
    <div>
      <div style={({ width: "100%", borderBottom: "1px solid gray", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between" })}>
        <Text onClick={() => navigate("/")}>Client Create Application</Text>
        <div style={{ display: "flex", gap: 5 }}>
          <div>
            <Button colorScheme='teal' variant='outline' onClick={() => navigate("/addclient")}>AddClient</Button>
          </div>
          {
            auth ? <Button colorScheme='teal' variant='outline' onClick={handleLogout}>
              Logout
            </Button> : <Button colorScheme='teal' variant='outline' onClick={() => navigate("/login")}>
              Login
            </Button>
          }


          <div>
            <Button colorScheme='teal' variant='outline' onClick={() => navigate("/signup")}>SignUp</Button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
