import { Container, Row, Nav } from "react-bootstrap";
import styles from './navBar.module.css'

export default function NayBar2() {
   return (
      <>
         <Container className={styles.background}>
            <Nav className="justify-content-start">
               <Nav.Link href="/" className={styles.link}>Home</Nav.Link>
               <Nav.Link href="https://students.senecacollege.ca/" className={styles.link}>MySeneca</Nav.Link>
               <Nav.Link href="#pricing" className={styles.link}>Something</Nav.Link>
            </Nav>

         </Container>
      </>
   )
}