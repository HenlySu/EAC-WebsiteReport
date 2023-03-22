/* eslint-disable @next/next/no-img-element */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar (){
   return(
      <>
         <Navbar className='navBar'>
            <Container>
               <Navbar.Brand href="#home">
                  <img 
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seneca_College_logo.svg/1200px-Seneca_College_logo.svg.png' 
                     className='logo'
                     alt='Seneca' 
                  />
               </Navbar.Brand>
               
               
               <Nav className="ml-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
      </>
   )
}