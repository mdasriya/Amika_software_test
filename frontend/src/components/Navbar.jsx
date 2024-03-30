import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Heading} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
const Navbar = () => {
  const toast = useToast()
  const [auth, setAuth] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear()
    setAuth(false)
    toast({
      title: 'Logout Success',

      status: 'error',
      duration: 3000,
      isClosable: true,
    })
    navigate("/login")
  }


  useEffect(() => {
    let token = localStorage.getItem("token")
    if (token) {
      setAuth(true)
    }

  }, [handleLogout, auth])


  return (
    <div>
      <div style={({ width: "100%",boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-between", padding:5 })}>
        <Heading onClick={() => navigate("/")}>Client Create Application</Heading>
        <div style={{ display: "flex", gap: 5 }}>
          <div>
            <Button colorScheme='teal' variant='outline' onClick={() => navigate("/addclient")}>AddClient</Button>
          </div>
          <div>
            <Button colorScheme='green'  onClick={() => navigate("/users")}>Users</Button>
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
