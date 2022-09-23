import React from 'react'
import {Navigate,Outlet,}  from 'react-router-dom'

function UserLoginCase() {

        // ther have a token then not go to login or signup pages 
         
   const val= localStorage.getItem('usertoken')
    return val ? <Navigate to='/'></Navigate>:<Outlet/>
    }
    
export default UserLoginCase