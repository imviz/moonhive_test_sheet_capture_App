import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MonthlyTask from '../components/MonthlyTask/MonthlyTask'
import NavBar from '../components/NavBar/NavBar'

function MonthlyTaskPage() {
  return (
    <div>
                   <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
   
        <Col lg={12}>      
        
            <div><MonthlyTask /></div>
            </Col>
        </Row>  
    </div>
  )
}

export default MonthlyTaskPage