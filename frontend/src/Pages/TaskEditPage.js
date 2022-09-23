import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import EditTask from '../components/EditTask/EditTask'
import NavBar from '../components/NavBar/NavBar'

function EditTaskPage() {
  return (
    <div>
           <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
   
        <Col lg={5}>
          <h3 style={{textAlign:'center'}}>Edit Test</h3>
        
            <div><EditTask /></div>
            </Col>
        </Row>  
    </div>
  )
}

export default EditTaskPage