import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__logo"><span>EG</span>SAXO</h1>
        <h2 className="hero__title">Egypt’s first online store built just for SAXO Players.</h2>
        <p className="hero__subtitle">Everything the modern Saxophonist needs in one curated space.
          <br />
          We source the finest saxophone accessories, so you can focus on what truly matters, Your Performance.</p>
        {/* <img src="./logo-icon.svg" alt="" /> */}
        <button className="hero__cta">Shop Now</button>
        {/* <img src="./loud.jpg" alt="" /> */}
      </div>
    </section>
  );
};

export default Hero; 