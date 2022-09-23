import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

function NavBar() {

  const {logoutAdmin}=useContext(AuthContext)
  const value=localStorage.getItem('token')
  const user=localStorage.getItem('usertoken')
  
  return (
    
<div>
<Navbar style={{height:'100px',backgroundColor:'white'}}  expand="lg">
      <Container fluid>
        <Navbar.Brand style={{fontWeight:800}} href="#">Time Capture</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
        {value? <Link to='/adminHome'><Button className='ms-5' variant="outline-dark" >HOME</Button></Link> :<Link to='/'><Button className='ms-5' variant="outline-dark" >HOME</Button></Link> }
            {value || user ? '' :<Link to='/login'><Button className='ms-5' variant="outline-dark" >LOGIN</Button></Link>}   
          </Nav>       
         {value || user ? <Button  variant="outline-dark" onClick={logoutAdmin}>Logout</Button> : ''}
        </Navbar.Collapse>
      </Container>
    </Navbar>
</div>
  )
}

export default NavBar