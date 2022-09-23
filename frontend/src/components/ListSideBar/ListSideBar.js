import React,{useState,useEffect} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link  } from 'react-router-dom';


function ListSideBar({val}) {
  // seletion color
    const [color,setColor]=useState('white')
    const [color1,setColor1]=useState('white')
    const [color2,setColor2]=useState('white')
    const [color3,setColor3]=useState('white')
    const [color4,setColor4]=useState('white')
    const [color5,setColor5]=useState('white')


    useEffect(() => {
        if (val===1){
            setColor('red')
            setColor1('white')
            setColor2('white')
            setColor3('white')
            setColor4('white')
            setColor5('white')
        }else if(val===2){
            setColor1('red')
            setColor('white')
            setColor2('white')
            setColor3('white')
            setColor4('white')
            setColor5('white')
        }else if(val===3){
            setColor2('red')
            setColor('white')
            setColor1('white')
            setColor3('white')
            setColor4('white')
            setColor5('white')
        } else if(val===4){
          setColor3('red')
          setColor('white')
          setColor1('white')
          setColor2('white')
          setColor4('white')
          setColor5('white')
      }else if(val===5){
        setColor4('red')
        setColor('white')
        setColor1('white')
        setColor2('white')
        setColor3('white')
        setColor5('white')
      }
        else {
          setColor5('red')
          setColor('white')
          setColor1('white')
          setColor2('white')
          setColor3('white')
          setColor4('white')    
        }
    }, [val])
    
   


  return (
    <div>
         <ListGroup className='p-5' style={{'height':'70vh','backgroundColor':'white'}}>
         <Link style={{'backgroundColor':'black' ,'color':color,'textDecoration':'none','textAlign':'center','fontSize':'22px'}} className='mt-5'  to="/adminHome">User List </Link>    
        <Link style={{'backgroundColor':'black' ,'color':color1,'textDecoration':'none','textAlign':'center','fontSize':'22px'}} className='mt-5'   to="/adminHome/dailyTask">Daily Task List</Link>
        <Link style={{'backgroundColor':'black' ,'color':color2,'textDecoration':'none','textAlign':'center','fontSize':'22px'}}className='mt-5'   to="/adminHome/weeklyTask">Weekly Task List</Link>
        <Link style={{'backgroundColor':'black' ,'color':color3,'textDecoration':'none','textAlign':'center','fontSize':'22px'}}className='mt-5'   to="/adminHome/monthlyTask">Monthly Task List</Link>
        <Link style={{'backgroundColor':'black' ,'color':color4,'textDecoration':'none','textAlign':'center','fontSize':'22px'}} className='mt-5'   to="/adminHome/dailyChart">Daily Task Chart </Link>         
        <Link style={{'backgroundColor':'black' ,'color':color5,'textDecoration':'none','textAlign':'center','fontSize':'22px'}}className='mt-5'   to="/adminHome/monthlyChart">Monthly Chart </Link>    
    </ListGroup>
    </div>
  )
}
  
export default ListSideBar