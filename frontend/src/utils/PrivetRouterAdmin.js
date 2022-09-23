import React,{useContext} from 'react'
import {Navigate,Outlet}  from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function PrivetRouterAdmin() {
    // only admin  can access these page
    
    let {authToken}=useContext(AuthContext) 
    return authToken ? <Outlet /> : <Navigate to="/login"/> 
    }
  

export default PrivetRouterAdmin