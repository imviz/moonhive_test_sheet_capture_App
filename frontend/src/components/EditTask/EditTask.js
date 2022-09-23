import React,{useState,useContext, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useNavigate} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from '../../Axios/Axios';
import {useParams} from 'react-router-dom'

function EditTask() {
    
  const navigate=useNavigate()
    const parms=useParams()
    const id=parms.id
    console.log(id,'dfdf')
  // for storing values
    const [name,setName]=useState('')
    const [estimate,setEstimate]=useState('')

            
        useEffect(() => {
            gettingInatance()
        }, [])


    //   gettting instance
    const gettingInatance=async()=>{
        let request=(JSON.parse(localStorage.getItem('usertoken')))  
        axios.get(`userside/task/${id}/`
            ,{
            headers: {
                Authorization:'Bearer '+ request
              }
       
          }).then((res)=>{
              console.log(res.data,'data')
              console.log(res.status)
              setEstimate(res.data.estimate_time)
              setName(res.data.project_name)
        
          })
    } 

// register calling
    const handler=(e)=>{
      e.preventDefault()
     let request=(JSON.parse(localStorage.getItem('usertoken')))  
        axios.patch(`userside/task/${id}/`,{
            project_name:name,
            estimate_time:estimate,
            
          },{
            headers: {
                Authorization:'Bearer '+ request
              }       
          }).then((res)=>{                      
              navigate('/')
          })     
    }



  return (
    <div>
      <Grid>  

        <Paper elevation={5}  style={{height:'550px',padding:'30px'}}>         
          <Grid align='center' className='grid'>
          <Avatar >          
          </Avatar >
              <Typography variant='h4' className='typo'>Edit Task Here</Typography>
          </Grid>
          <Grid >
            <form onSubmit={handler} className='formss' >   
            <div><TextField style={{marginTop:'55px'}}   InputLabelProps={{
                                                                            style: { color: 'black' ,fontWeight:600,}, 
                                                                        }}        
            variant='standard' name="project_name"  type='text' label='Project Name' placeholder='Enter Project Name' onChange={(e)=>setName(e.target.value)} value={name} fullWidth></TextField>
               
            </div>
            <div><TextField  name="estimate time" style={{marginTop:'50px'}} 
                                                                     InputLabelProps={{
                                                                            style: { color: 'black' ,fontWeight:600}, 
                                                                        }}
            variant='standard' type='text' label='Estimate Time' placeholder='Enter estimate time' onChange={(e)=>setEstimate(e.target.value)} value={estimate}  fullWidth ></TextField>
                
            </div>

            <Button style={{marginTop:'40px',height:'50px'}} type='submit' fullWidth={true} className='button1'  variant='contained' color='success' >Create Task</Button><br /><br />
            <Button fullWidth={true} className='button1' variant='contained' color='error'  onClick={()=>navigate('/')}>Back</Button>
            </form> 
          </Grid> 
        </Paper>
      </Grid>
    </div>
  )
}

export default EditTask
