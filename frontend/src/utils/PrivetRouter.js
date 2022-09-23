import React,{useContext} from 'react'
import {Navigate,Outlet}  from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function PrivetRouter() {
    // only user  can access these page
    
    let {userToken}=useContext(AuthContext) 
    return userToken ? <Outlet /> : <Navigate to="/login"/> 
    }
  

export default PrivetRouter