import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MonthlyChart from '../components/MonthlyChart/MonthlyChart'
import NavBar from '../components/NavBar/NavBar'

function MonthlyChartPage() {
  return (
    <div>
            <Row>
            <NavBar/>
        </Row>
        <Row className='justify-content-center mt-1 pt-5'>
        
            <Col lg={12}>           
                <MonthlyChart />
                
            </Col>            
        </Row> 
    </div>
  )
}

export default MonthlyChartPage