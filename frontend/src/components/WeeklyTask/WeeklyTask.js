import React,{useEffect,useState} from 'react'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import ListSideBar from '../ListSideBar/ListSideBar'
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import axios from '../../Axios/Axios';
import Table from 'react-bootstrap/Table';


function WeeklyTask() {

    useEffect(() => {      
         dailyTask()
    }, [])

//    storing data
   const [weeklyTask,setWeeklyTask]=useState([])

     //  datas
  const dailyTask=async()=>{   
    let request=(JSON.parse(localStorage.getItem('token')))  
   await axios.get('adminside/weeklytask/',{
        headers: {
            Authorization:'Bearer '+ request
          }
    }).then((res)=>{
        setWeeklyTask(res.data)           
    })
}

  return (
    <div>
      <Row className='m-5'>
        <Col lg={3}>
          <ListSideBar val={3}/>
        </Col>
        <Col  lg={9}>
          <div style={{'height':'60vh','backgroundColor':'white '}}>
          <h2 align='center' style={{color:'black'}}>UserList</h2>
          <Card sx={{ minWidth:'30%', maxWidth:'100%' ,padding:'50px'}}>           
      <CardActionArea>
      <Table striped>
      <thead>
        <tr>
          <th>Employee</th>
          <th>Project Name</th>
          <th>Estimate Time</th>
          <th>Current Status</th>        
          <th>last Modify</th>
        </tr>
      </thead>
      <tbody>
       {weeklyTask && weeklyTask.map((obj,key)=>
       <tr>
          <td >{obj.user.name}</td>
          <td>{obj.project_name}</td>
          <td>{obj.estimate_time}</td>
          <td>{obj.progress}</td>
          <td>{String(obj.modify_at).slice(11,19).split("-").reverse().join("-")}</td>         
        </tr> 
         )}       
      </tbody>
    </Table>
      </CardActionArea>
    </Card>
          </div>
        </Col>  
        </Row>        
    </div>
  )
}

export default WeeklyTask