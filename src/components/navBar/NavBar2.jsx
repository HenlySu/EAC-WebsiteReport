import { Container, Row, Nav } from "react-bootstrap";
import styles from './navBar.module.css'

export default function NayBar2() {
   return (
      <>
         <Container className={`${styles.background}`}>
            <Row>
               <Nav className="justify-content-center">
                  <Nav.Link href="/" className={`col-4 ${styles.link}`}>Home</Nav.Link>
                  <Nav.Link href="https://students.senecacollege.ca/" className={`col-4 ${styles.link}`}>MySeneca</Nav.Link>
                  <Nav.Link href="#pricing" className={`col-4 ${styles.link}`}>Something</Nav.Link>
               </Nav>
            </Row>
         </Container>
      </>
   )
}