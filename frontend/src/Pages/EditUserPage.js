import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EditUser from '../components/EditUSer/EditUser'
import NavBar from '../components/NavBar/NavBar'

function EditUserPage() {
  return (
    <div>
          <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
   
        <Col lg={5}>
          <h3 style={{textAlign:'center'}}>REGISTER</h3>
        
            <div>< EditUser /></div>
            </Col>
        </Row>  
    </div>
  )
}

export default EditUserPage