/* eslint-disable @next/next/no-img-element */

import { Carousel, Container } from "react-bootstrap";

export default function SlideShow () {
   return (
      <>
         <Container>
            <Carousel>
               {/* First Item */}
               <Carousel.Item>
                  <img
                     className="d-block w-90 h-50 mx-auto"
                     src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
               </Carousel.Item>

               {/* Second Item */}
               <Carousel.Item>
                  <img
                     className="d-block h-50 w-90 mx-auto"
                     src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
               </Carousel.Item>

               {/* Third Item */}
               <Carousel.Item>
                  <img
                     className="d-block h-50 w-90 mx-auto"
                     src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthiest-cheese-1296x728-swiss.jpg"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>First slide label</h3>
                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </Container>
      </>
   )
}