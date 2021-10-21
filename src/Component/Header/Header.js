import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';



const Header = () => {
    const{user,logOut}=useAuth();
    return (
           <>
              <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
               <Container>
               <Navbar.Brand href="#home">Manir medicare hospital</Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">
               <Nav>
               <Nav.Link  as={Link}to="/home">Home</Nav.Link>
               <Nav.Link  as={Link}to="/doctors">doctors</Nav.Link>
               <Nav.Link  as={Link}to="/aboutus">about us</Nav.Link>
               {
                   user.email &&
                  <span style={{color:'white'}}>{user.displayName}</span> 
               }
               
               
               {
                   user.email?
                   <button onClick={logOut}>log out</button>
                   :
                   <Nav.Link  as={Link}to="/login">login</Nav.Link>
               }
               </Nav>
              
               </Navbar.Collapse>
    
                </Container>
               </Navbar>
            </>
    );
};

export default Header;