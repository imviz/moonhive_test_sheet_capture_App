import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavBar from '../components/NavBar/NavBar'
import UserHome from '../components/UserHome/UserHome'

function UserHomePage() {
  return (
    <div>
        <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>        
            <Col lg={12}>
            <h3 style={{textAlign:'center',color:'white'}}>User Home</h3>
                <UserHome  />
                
            </Col>            
        </Row> 
    </div>
  )
}

export default UserHomePage