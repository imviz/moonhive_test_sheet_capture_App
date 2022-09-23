import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { Link ,useNavigate,useParams} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import './EditUser.css'
import axios from '../../Axios/Axios';


function EditUser() {
    
  const navigate=useNavigate()
  // for storing values
    const [name,setName]=useState('')
    const [section,setSection]=useState('')
    const [email,setEmail]=useState('')
  

     const parms=useParams()
     const id=parms.id
     console.log('id',id)

  
   useEffect(() => {
     console.log('dfd')
     instance()
    
   }, [])
   
   
 const instance=async()=>{
    let request=(JSON.parse(localStorage.getItem('token')))  
   await axios.get(`adminside/user/${id}/`,{
    headers: {
        Authorization:'Bearer '+ request
      }
    }).then((res)=>{
        console.log(res.data,'data')
        if (res.status==200){
            setName(res.data.name)
            setSection(res.data.section)
            setEmail(res.data.email)
        }
    })
 }
// register calling
    const handler=(e)=>{
      e.preventDefault()
      let request=(JSON.parse(localStorage.getItem('token')))  
        axios.patch(`adminside/user/${id}/`,{
              name:name,
              section:section,
              email:email,
          },{
            headers: {
                Authorization:'Bearer '+ request
              }
            }).then((res)=>{
              console.log(res.data,'data')
              if (res.status==200){
                navigate('/adminHome')
              }
          })
   }
    
  return (
    <div>
      <Grid>
        <Paper elevation={5} className='paperz'>
         
          <Grid align='center' className='grid'>
          <Avatar >          
          </Avatar >
              <Typography variant='h4' className='typo'>Edit Here</Typography>
          </Grid>
          <Grid >
            <form onSubmit={handler} className='formss' >   
            <div><TextField style={{marginTop:'55px'}}   InputLabelProps={{
                                                                            style: { color: 'black' ,fontWeight:600,}, 
                                                                        }}        
            variant='standard' name="name"  type='text' label='name' placeholder='Enter name' onChange={(e)=>setName(e.target.value)} value={name} fullWidth></TextField>
            
            </div>
            <div><TextField  name="username" style={{marginTop:'50px'}} 
                                                                     InputLabelProps={{
                                                                            style: { color: 'black' ,fontWeight:600}, 
                                                                        }}
            variant='standard' type='text' label='section' placeholder='Enter working section' onChange={(e)=>setSection(e.target.value)} value={section}  fullWidth ></TextField>
                
            </div>
            <div>
            <TextField style={{marginTop:'50px'}}       InputLabelProps={{
                                                                            style: { color: 'black' ,fontWeight:600}, 
                                                                        }}
            variant='standard' name="email" type='text' label='Email' onChange={(e)=>setEmail(e.target.value)} value={email}  placeholder='Enter Email' fullWidth></TextField>  
          
            </div>      
      
            <Button style={{marginTop:'20px',height:'40px'}} type='submit' fullWidth={true} className='button1' variant='contained' color='success'>Edit User</Button><br /><br />
            </form> 
          </Grid> 
        </Paper>
      </Grid>
    </div>
  )
}

export default EditUser
