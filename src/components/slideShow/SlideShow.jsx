/* eslint-disable @next/next/no-img-element */

import { Carousel, Container } from "react-bootstrap";
import styles from './slideShow.module.css'

export default function SlideShow () {
   return (
      <>
         <Container>
            <Carousel>
               {/* First Item */}
               <Carousel.Item>
                  <img
                     className={`d-block ${styles.img}`}
                     src="https://photos.applyboard.com/school_photos/000/014/169/photos/original/SenecaCollegeNewnham-StudentLife-Jan2021.jpg?1659724028"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>Sustainable Seneca</h3>
                  </Carousel.Caption>
               </Carousel.Item>

               {/* Second Item */}
               <Carousel.Item>
                  <img
                     className={`d-block ${styles.img}`}
                     src="https://photos.applyboard.com/school_photos/000/014/169/photos/original/SenecaCollegeNewnham-StudentLife-Jan2021.jpg?1659724028"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>Sustainable Seneca</h3>
                  </Carousel.Caption>
               </Carousel.Item>

               {/* Third Item */}
               <Carousel.Item>
                  <img
                     className={`d-block ${styles.img}`}
                     src="https://photos.applyboard.com/school_photos/000/014/169/photos/original/SenecaCollegeNewnham-StudentLife-Jan2021.jpg?1659724028"
                     alt="First slide"
                  />
                  <Carousel.Caption>
                     <h3>Sustainable Seneca</h3>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </Container>
      </>
   )
}