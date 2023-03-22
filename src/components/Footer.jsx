import { Container, Row, Col } from 'react-bootstrap';

export default function Footer(){
   return (
      <>
         <footer className="bg-dark text-center text-lg-start">
            <Container>
               <Row>
                  <Col lg={6} className="text-center text-lg-start">
                     <p className="text-muted">© 2023 All Rights Reserved.</p>
                  </Col>
                  <Col lg={6} className="text-center text-lg-end">
                     <p className="text-muted">Made with <i className="bi bi-heart-fill text-danger"></i> by Henly Su</p>
                  </Col>
               </Row>
            </Container>
         </footer>
      </>
   )
}