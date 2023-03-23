/* eslint-disable @next/next/no-img-element */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar/navBar.module.css'

export default function NavBar (){
   return(
      <>
         <Navbar className={styles.navBar} expand='md'>
            <Container>
               <Navbar.Brand href="/">
                  <img 
                     src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Seneca_College_logo.svg/1200px-Seneca_College_logo.svg.png' 
                     className={styles.logo}
                     alt='Seneca' 
                  />
               </Navbar.Brand>
               
               <Navbar.Toggle aria-controls="navbar-nav" />
               <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                  <Nav>
                     <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
                     <Nav.Link href="#features" className={styles.navLink}>Something</Nav.Link>
                     <Nav.Link href="#pricing" className={styles.navLink}>Something</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}