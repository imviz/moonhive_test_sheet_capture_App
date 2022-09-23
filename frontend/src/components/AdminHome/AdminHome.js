import React,{useEffect,useState} from 'react'
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


function AdminHome() {


  const navigate=useNavigate()
 useEffect(() => {
  userData()
   }, [])

//    storing data
   const [user,setUser]=useState([])


// for dropdown
   const [show, setShow] = useState(false);
   const [del,setDel]=useState('')
   const [text,setText]=useState('')
   const handleClose = () => setShow(false);
   const handleShow = (d,title) => {
    setText(title)
    setShow(true);
    setDel(d)
   }


     // user datas
  const userData=async()=>{   
    let request=(JSON.parse(localStorage.getItem('token')))  
   await axios.get('adminside/user/',{
        headers: {
            Authorization:'Bearer '+ request
          }
    }).then((res)=>{
        setUser(res.data)
        console.log(res.data,'evide work ann')
         
    })
}


// delete
const deleteUser=async()=>{   
    let request=(JSON.parse(localStorage.getItem('token')))  
   await axios.delete(`adminside/user/${del}/`,{
        headers: {
            Authorization:'Bearer '+ request
          }
    }).then((res)=>{     
        console.log(res.data,'evide work ann')  
        handleClose()
        userData()
    })
}


  return (
    <div>
      <Row className='m-5'>
        <Col lg={3}>
          <ListSideBar val={1}/>
        </Col>
        <Col  lg={9}>


                 {/* for pop up message */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete {text} ?</Modal.Body>
        <Modal.Footer>
          <Button variant="outlined" onClick={handleClose}>
            Close
          </Button>
          <Button variant="contained" color='error' onClick={deleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>


          <div style={{'height':'60vh','backgroundColor':'white '}}>
          <h2 align='center' style={{color:'black'}}>UserList</h2>
          <Card sx={{ minWidth:'30%', maxWidth:'100%' ,padding:'50px'}}> 
            <Button onClick={()=>navigate('addUser')} variant="contained">Add User</Button>
      <CardActionArea>
      <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th> Name</th>
          <th>section</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
       {user && user.map((obj)=>
       <tr>
          <td >{obj.id}</td>
          <td>{obj.name}</td>
          <td>{obj.section}</td>
          <td>{obj.email}</td>
          <td style={{color:'blue'}} onClick={()=>navigate(`editUser/${obj.id}`)}><EditIcon /></td>
          <td style={{color:'red'}} onClick={()=>handleShow(obj.id,obj.name)}><DeleteIcon /></td>
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

export default AdminHome