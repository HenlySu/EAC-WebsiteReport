/* eslint-disable @next/next/no-img-element */

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './navBar.module.css'

export default function NavBar (){
   return(
      <>
         <Navbar className={styles.navBar} collapseOnSelect  expand='lg'>
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
                     <Nav.Link href="/" className={styles.navLink}>Introduction</Nav.Link>
                     <Nav.Link href="/solution" className={styles.navLink}>Solution</Nav.Link>
                     <Nav.Link href="/comparative" className={styles.navLink}>Comparative Analysis</Nav.Link>
                     <Nav.Link href="/conclusion" className={styles.navLink}>Conclusion</Nav.Link>
                     <Nav.Link href="/reference" className={styles.navLink}>Reference</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}