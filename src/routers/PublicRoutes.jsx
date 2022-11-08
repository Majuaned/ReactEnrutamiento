import { Navigate } from "react-router-dom"
import {useContext} from 'react'
import { AuthContext } from "../context/AuthContext"
export const PublicRoutes = ({ children }) => {
  
  const user=useContext(AuthContext)
  return user.islogged
          ? <Navigate to='/login' />
          : children
}
