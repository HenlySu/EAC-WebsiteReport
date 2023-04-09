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
                     <Nav.Link href="/requirements" className={styles.navLink}>Requirement</Nav.Link>
                     <Nav.Link href="/discussion" className={styles.navLink}>Discussion</Nav.Link>
                     <Nav.Link href="/comparative" className={styles.navLink}>Comparative</Nav.Link>
                     <Nav.Link href="/summary" className={styles.navLink}>Summary</Nav.Link>
                     <Nav.Link href="/conclusion" className={styles.navLink}>Conclusion</Nav.Link>
                     <Nav.Link href="/recommendation" className={styles.navLink}>Recommendation</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   )
}