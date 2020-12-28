import React from 'react';
import logo from '../assets/logo/logo.svg';
import './Home.css';

export const Home = () => {
  return (
    <div className='home-container'>
      <img className='img-logo' src={logo} alt='' />
    </div>
  );
};
