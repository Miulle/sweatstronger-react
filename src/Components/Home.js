import React from 'react';
import logo from '../assets/logo/logo.svg';
import './Home.css';
import { Fade, Zoom, Slide, Flip, Bounce } from 'react-reveal';

export const Home = () => {
  return (
    // <Fade bottom cascade>

    <div className='home-container'>
      <Bounce left cascade duration={2000}>
        <img className='img-logo' src={logo} alt='logo-big' />
      </Bounce>
      <Flip bottom duration={2000} delay={1000}>
        <div className='text-container'>
          <h2>Willkommen</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            tempore reprehenderit perspiciatis, consectetur corporis ipsum quasi
            ratione ducimus et placeat, nam inventore? Facilis esse sunt velit
            eum voluptas dolores cum, iste architecto? Ipsa, reprehenderit
            ratione hic voluptatum accusamus aut voluptates magnam recusandae
            vero corrupti fugit quod atque. Atque voluptatibus totam sit dicta
            eaque. Dolore ipsam labore nesciunt modi eius?
          </p>
        </div>
      </Flip>
    </div>

    // </Fade>
  );
};
