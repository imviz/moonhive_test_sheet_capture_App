import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AdminHome from '../components/AdminHome/AdminHome'
import NavBar from '../components/NavBar/NavBar'


function AdminHomePage() {
  return (
    <div>
          <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
        
            <Col lg={12}>
            {/* <h3 style={{textAlign:'center',color:'white'}}>Admin Home</h3> */}
                <AdminHome />
                
            </Col>            
        </Row> 
    </div>
  )
}

export default AdminHomePage