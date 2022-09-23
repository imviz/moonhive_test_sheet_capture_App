import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import NavBar from '../components/NavBar/NavBar'
import WeeklyTask from '../components/WeeklyTask/WeeklyTask'

function WeeklyTaskPage() {
  return (
    <div>
        <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>        
            <Col lg={12}>
            <h3 style={{textAlign:'center',color:'white'}}></h3>              
                <WeeklyTask  />
            </Col>            
        </Row> 
    </div>
  )
}

export default WeeklyTaskPage