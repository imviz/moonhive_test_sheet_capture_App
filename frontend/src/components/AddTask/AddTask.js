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

//dropdown imports
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function AddTask() {
    
  const navigate=useNavigate()
  // for storing values
    const [name,setName]=useState('')
    const [estimate,setEstimate]=useState('')


  
    // for validation purpose
    const[nameErr, setNameErr] = useState({})
    const [estimateErr,setEstimateErr] = useState({})
  

const formValidation=()=>{ 
  const nameErr={}
  const estimaateErr ={}



  let isValid = true

  // for name
  if (!name){
    nameErr.short_fname = '* project name is a required field'
      isValid = false
    }
  else if(name.trim().length <3){
    nameErr.short_fname = '* name field contain min 3 charector'
    isValid = false
  }

// for username

  if (!estimate){
    estimateErr.short_fname = '* estimatae time  field is required '
  isValid = false
  }
  else if(estimate.trim().length<2){
    estimateErr.short_fname = '* estimate time  field contain min 2 charector'
  isValid = false
  }

  setNameErr(nameErr)
  setEstimateErr(estimateErr)


  return isValid
  }


// register calling
    const handler=(e)=>{
      e.preventDefault()
      const isValid = formValidation()
      let request=(JSON.parse(localStorage.getItem('usertoken')))  
      const user=localStorage.getItem('userId')
      if (isValid){      
        axios.post('userside/task/',{
            project_name:name,
            estimate_time:estimate,
            user:user,
          },{
            headers: {
                Authorization:'Bearer '+ request
              }
       
          }).then((res)=>{
              console.log(res.data,'data')
              console.log(res.status)
              if (res.status==201){
                console.log('dfdf')
                navigate('/')
              }
          })
      }
    }


  return (
    <div>
      <Grid>   

        <Paper elevation={5}  style={{height:'550px',padding:'30px'}}>
         
          <Grid align='center' className='grid'>
          <Avatar >          
          </Avatar >
              <Typography variant='h4' className='typo'>Add Task Here</Typography>
          </Grid>
          <Grid >
            <form onSubmit={handler} className='formss' >   
            <div><TextField style={{marginTop:'55px'}}   InputLabelProps={{
                                                                            style: { color: 'black' ,fontWeight:600,}, 
                                                                        }}        
            variant='standard' name="project_name"  type='text' label='Project Name' placeholder='Enter Project Name' onChange={(e)=>setName(e.target.value)} value={name} fullWidth></TextField>
              {Object.keys(nameErr).map((key)=>{
                                 return <div style={{color:'red'}} >{nameErr[key]}</div> })}        
            </div>
            <div><TextField  name="estimate time" style={{marginTop:'50px'}} 
                                                                     InputLabelProps={{
                                                                            style: { color: 'black' ,fontWeight:600}, 
                                                                        }}
            variant='standard' type='text' label='Estimate Time' placeholder='Enter estimate time' onChange={(e)=>setEstimate(e.target.value)} value={estimate}  fullWidth ></TextField>
             {Object.keys(estimateErr).map((key)=>{
                                 return <div style={{color:'red'}} >{estimateErr[key]}</div> })}          
            </div>
{/*           
            <FormControl variant="standard" fullWidth={true}>
        <InputLabel id="demo-simple-select-standard-label">Year of joining</InputLabel>
        <Select 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard-label"
          onChange={(e)=>setStart(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {arr.map((elevation) => (
               
                  <MenuItem value={elevation} elevation={elevation}>
                  {elevation}</MenuItem>
                
             
              ))}             
              <MenuItem >15%</MenuItem>
              <MenuItem >30%</MenuItem>
              <MenuItem >50%</MenuItem>
              <MenuItem >70%</MenuItem>
              <MenuItem >90%</MenuItem>
              <MenuItem >Completed</MenuItem>
        </Select>
        {Object.keys(startErr).map((key)=>{
                  return <div style={{color:'red'}} >{startErr[key]}</div>
                })}
      </FormControl> */}
            <Button style={{marginTop:'40px',height:'50px'}} type='submit' fullWidth={true} className='button1'  variant='contained' color='success' >Create Task</Button><br /><br />
            <Button fullWidth={true} className='button1' variant='contained' color='error'  onClick={()=>navigate('/')}>Back</Button>
            </form> 
          </Grid> 
        </Paper>
      </Grid>
    </div>
  )
}

export default AddTask
