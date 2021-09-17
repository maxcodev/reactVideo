import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div>
    <h3 className='categories__title'>{title}</h3>
    {/*Podemos manipular el titulo para cada uno de los Items*/}
    {children}
    {/*Este Children recibe al componente Carousel.*/}
  </div>
);

export default Categories;
