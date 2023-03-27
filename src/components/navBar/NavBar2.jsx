import { Container, Row } from "react-bootstrap";
import styles from './navBar.module.css'

export default function NayBar2() {
   return (
      <>
         <Container className={styles.background}>
            <Row style={{ flexWrap: 'nowrap' }}>
               <div className={`col-4 ${styles.link}`}>
                  Column 1
               </div>
               <div className={`col-4 ${styles.link}`}>
                  Column 1
               </div>
               <div className={`col-4 ${styles.link}`}>
                  Column 1
               </div>
            </Row>
            
         </Container>
      </>
   )
}