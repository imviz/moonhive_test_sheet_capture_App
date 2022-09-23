import React,{useEffect,useState} from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListSideBar from '../ListSideBar/ListSideBar'
import axios from '../../Axios/Axios';
import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

function MonthlyChart() {


  useEffect(()=>{
    dailyTask()
  },[])

//    storing data
   const [monthly,setMonthly]=useState([])

     // user datas
  const dailyTask=async()=>{   
    let request=(JSON.parse(localStorage.getItem('token')))  
   await axios.get('adminside/monthly_graph/',{
        headers: {
            Authorization:'Bearer '+ request
          }
    }).then((res)=>{
      setMonthly(res.data)  
      console.log(res.data)
        
    })
}

  return (
    <div>
      <Row className='m-5'>
        <Col lg={3}>
          <ListSideBar val={6}/>          
        </Col>
        <Col  lg={9}>
          <div style={{'backgroundColor':'white '}} align='center'>
          <h2 align='center' style={{color:'black'}}>Daily Progress Chart </h2>            
          <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={monthly} margin={{ right: 300 }}>
                    <CartesianGrid />
                    <XAxis dataKey="user" 
                        interval={'preserveStartEnd'} />
                    <YAxis></YAxis>
                    <Legend />
                    <Tooltip />
                    <Line dataKey="user"
                        stroke="black" activeDot={{ r: 8 }} />
                    <Line dataKey="count"
                        stroke="red" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default MonthlyChart