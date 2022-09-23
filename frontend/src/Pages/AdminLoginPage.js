import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AdminLogin from '../components/AdminLogin/AdminLogin'

function LoginPage() {
  return (
    <div>
        <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
   
        <Col lg={5}>
          <h3 style={{textAlign:'center'}}>LOGIN</h3>
        
            <div> <AdminLogin /> </div>
            </Col>
        </Row>  

    </div>
  )
}

export default LoginPage