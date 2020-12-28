import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Competitions.css';

export const Competitions = () => {
  return (
    <div>
      <h1>Competitions</h1>
      <div className='carousel-container'>
        <Carousel className='carousel-element'></Carousel>
      </div>
    </div>
  );
};
