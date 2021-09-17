import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <section className='carousel'>
    <div className='carousel__container'>
      {children}
      {/*Este children recibe los Items de CarouselItem*/}
    </div>
  </section>
);

export default Carousel;
