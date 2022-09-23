import React,{useEffect,useState,useContext} from 'react'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import ListSideBar from '../ListSideBar/ListSideBar'
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import axios from '../../Axios/Axios';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Table from 'react-bootstrap/Table';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from 'react-bootstrap/Modal';
import Chip from '@mui/material/Chip';
import CommonModal from '../Common/CommonModal'
import AuthContext from '../../context/AuthContext'

function UserHome() {
    const navigate=useNavigate()
    const {userToken} =useContext(AuthContext)

    useEffect(()=>{
        userTask()
    },[])

    //    storing data
   const [user,setUser]=useState([])

    // for dropdown
   const [show, setShow] = useState(false);
   const [del,setDel]=useState('')

//    modal
   const handleClose = () => setShow(false);
   const handleShow = (d) => {

    setShow(true);
    setDel(d)
   }
    //    modal2 for status changing

    const [view,setView]=useState(false)
    const [changeId,setChangeId]=useState('')
    const statusHandle = () => setView(false);
    const statusShow = (id,name) => {
    setView(true);  
    setChangeId(id)
    setChanger(name)
    }


    // filter data of user tasks
    const userTask=async()=>{   
        console.log(userToken,'yuy')
        const user=localStorage.getItem('userId')
          await axios.get(`userside/usertask/?user=${user}`,{
            headers: {
                Authorization:'Bearer '+ userToken?.access
            }
        }).then((res)=>{   
            setUser(res.data)
          
        })
    }


// set change
const [change,setChanger]=useState('')
console.log(change,'change andd')


// progress change
const StatusHandler=(e)=>{
    console.log('ererer')
    e.preventDefault()
      axios.patch(`userside/task/${changeId}/`,{
           progress:change,
        },{
          headers: {
            Authorization:'Bearer '+ userToken?.access
            }
          }).then((res)=>{
            console.log(res.data,'data')
            if (res.status==200){              
                statusHandle()
            }
            statusHandle()
            userTask()
        })    
 }

 // delete
const deleteTask=async()=>{     
   await axios.delete(`userside/task/${del}/`,{
        headers: {
            Authorization:'Bearer '+ userToken?.access
          }
    }).then((res)=>{     
        console.log(res.data,'evide work ann')  
        handleClose()
        userTask()
      
    })
}

  return (
    <div className='m-5'>
        <Col  lg={12}>
      
            <CommonModal show={show} handleClose={handleClose} message={`do you want to delete taskno. ${del} ?`} title='confirm to delete' btnname='delete' btnfn={deleteTask}/>
            <CommonModal show={view} handleClose={statusHandle} change={change} title='status changer' btnname='save' setChange={setChanger}  btnfn={StatusHandler} >
   
            </CommonModal>
            <div style={{'height':'60vh','backgroundColor':'white '}}>
                <h2 align='center' style={{color:'black'}}>Task List</h2>
                <Card sx={{ minWidth:'30%', maxWidth:'100%' ,padding:'50px'}}> 
                    <Button onClick={()=>navigate('/addTask')} style={{height:'50px',width:'150px',marginBottom:'30px'}} variant="contained">Add Task</Button>
                    <CardActionArea>
                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Task No.</th>
                                    <th>date</th>
                                    <th> project Name</th>                                   
                                    <th>Progress</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {user && user.map((obj,key)=>
                                <tr>
                                    <td >{obj.id}</td>
                                    <td>{obj.created_at}</td>
                                    <td>{obj.project_name}</td>
                                    <td>
                                    { obj.progress==='started' ?  (<Chip label={obj.progress} style={{width:'100px',height:'50px'}} onClick={()=>statusShow(obj.id,obj.progress)}    color='error' /> ):
                                    (obj.progress ==='15%' || obj.progress ==='30%' || obj.progress ==='50%' || obj.progress ==='70%' || obj.progress ==='90%') ? (<Chip label={obj.progress} style={{width:'100px',height:'50px'}} onClick={()=>statusShow(obj.id,obj.progress)}    color='warning' />):
                               
                                  (<Chip label={obj.progress} style={{width:'100px',height:'50px'}} onClick={()=>statusShow(obj.id,obj.progress)}    color='success' />)  }
                                    </td>
                                      
                                    <td style={{color:'blue'}} onClick={()=>navigate(`editTask/${obj.id}`)}><EditIcon /></td>
                                    <td style={{color:'red'}} onClick={()=>handleShow(obj.id)}><DeleteIcon /></td>
                                </tr> 
                                )}
                            </tbody>
                        </Table>
                    </CardActionArea>   
                </Card>
            </div> 
        </Col>     
    </div>
  )
}

export default UserHome