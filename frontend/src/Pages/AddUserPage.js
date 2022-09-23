import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import UserRegister from '../components/AddUser/AddUser'
import NavBar from '../components/NavBar/NavBar'


function AddUserPage() {
  return (
    <div>
          <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
   
        <Col lg={5}>
          <h3 style={{textAlign:'center'}}>REGISTER</h3>
        
            <div>< UserRegister /></div>
            </Col>
        </Row>  
    </div>
  )
}

export default AddUserPage



