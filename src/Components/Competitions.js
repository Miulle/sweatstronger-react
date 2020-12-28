import React from 'react';
import Carousel from 'react-elastic-carousel';
import './Competitions.css';

export const Competitions = () => {
  return (
    <div>
      <h1>Competitions</h1>
      <div className='carousel-container'>
        <h2>Carousel</h2>
        <div className='carousel-element'></div>
        <div className='button-container'>
          <button className='prev'>prev</button>
          <button className='next'>next</button>
        </div>
      </div>
    </div>
  );
};
