/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {/*Condición: si la longitud de (mylist) tiene elementos, muestramelos.
      De lo contrario, oculta esta sección. (mylist) */}
      {initialState.mylist.length > 0 &&
        <Categories title='Mi lista'>
          <Carousel>
            {
              // eslint-disable-next-line react/jsx-props-no-spreading
              initialState.mylist.map((item) => <CarouselItem key={item.id} {...item} />)
            }
          </Carousel>
        </Categories>}

      <Categories title='Tendencias'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.trends.map((item) => <CarouselItem key={item.id} {...item} />)
          }
          { /*Con .map voy a tener el resultado de cada uno de los items de mi API
          y por cada uno de ellos, le voy a pasar mi componente -> CarouselItem con la información*/ }
          {/* key.{item.id} <- solo es para poder identificarlo*/}
          {/*y pasamos todos los elementos que contenga item, lo pasamos destructurandolo
          o clonandolo -> {...item}*/}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};
export default Home;
