import React,{useEffect,useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListSideBar from '../ListSideBar/ListSideBar'
import axios from '../../Axios/Axios';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis} from 'recharts'

function DailyChart() {


  useEffect(()=>{
    dailyTask()
  },[])

//    storing data
   const [daily,setDaily]=useState([])

     // user datas
  const dailyTask=async()=>{   
    let request=(JSON.parse(localStorage.getItem('token')))  
   await axios.get('adminside/daily_graph/',{
        headers: {
            Authorization:'Bearer '+ request
          }
    }).then((res)=>{
      setDaily(res.data)  
      console.log(res.data)        
    })
}

  return (
    <div>
      <Row className='m-5'>
        <Col lg={3}>
          <ListSideBar val={5}/>

          
        </Col>
        <Col  lg={9}>
          <div style={{'backgroundColor':'white '}} align='center'>
          <h2 align='center' style={{color:'black'}}>Daily Progress Chart </h2>

          <BarChart width={800} height={600} data={daily}>
            <Bar dataKey="count" fill="blue" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="progress" />
            <YAxis dataKey='count' />
          </BarChart>
          </div>
        </Col>  
        </Row>        
    </div>
  )
}

export default DailyChart