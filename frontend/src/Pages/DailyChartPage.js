import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import DailyChart from '../components/DailyChart/DailyChart'
import NavBar from '../components/NavBar/NavBar'

function DailyChartPage() {
  return (
    <div>
        <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
        
            <Col lg={12}>           
                <DailyChart />
                
            </Col>            
        </Row> 
    </div>
  )
}

export default DailyChartPage