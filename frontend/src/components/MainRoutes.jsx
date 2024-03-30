
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Dashboard from '../pages/Dashboard'
import AddClient from '../pages/AddClient'
import Users from '../pages/Users'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/addclient" element={<AddClient />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}

export default MainRoutes
