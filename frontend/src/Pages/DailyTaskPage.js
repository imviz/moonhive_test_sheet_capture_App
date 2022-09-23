import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import DailyTask from '../components/DailyTask/DailyTask'
import NavBar from '../components/NavBar/NavBar'

function DailyTaskPage() {
  return (
    <div>
        <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>        
            <Col lg={12}>
            <h3 style={{textAlign:'center',color:'white'}}></h3>              
                <DailyTask />
            </Col>            
        </Row> 
    </div>
  )
}

export default DailyTaskPage