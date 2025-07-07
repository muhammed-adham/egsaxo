import React, { useRef } from 'react';
import Hero from '../components/Hero';
import AltoSaxo from '../components/AltoSaxo';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const altoSaxoRef = useRef();
  const navigate = useNavigate();

  const handleExplore = () => {
    if (altoSaxoRef.current && altoSaxoRef.current.spin) {
      altoSaxoRef.current.spin();
      setTimeout(() => {
        navigate('/shop');
      }, 800); // same spin duration
    } else {
      navigate('/shop');
    }
  };

  return (
    <>
      <AltoSaxo ref={altoSaxoRef}/>
      <Hero onExplore={handleExplore} />
    </>
  );
};

export default HomePage; 