import React from "react";
import "./Hero.css";
import BtnPrimary from "./BtnPrimary";
import BtnOutline from "./BtnOutline";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__logo fade-in-up delay-1">
          <span>EG</span>SAXO
        </h1>
        {/* <img src="./logo-icon.svg" alt="" /> */}
        <h2 className="hero__title fade-in-up delay-2">
          Egypt's first online store built just for SAXO Players.
        </h2>
        <p className="hero__subtitle fade-in-up delay-3">
          Everything the modern saxophonist needs in one curated space, from
          trusted global brands to handpicked essentials. We source premium
          accessories to elevate your tone, comfort, and performance.
        </p>
        {/* <button className="hero__cta">Shop Now</button> */}
        <BtnPrimary
          label={"Explore Collection"}
          className="fade-in-up delay-4"
          onClick={() => navigate("/shop")}
        />
        <div className="btn__container fade-in-up delay-5">
          <BtnOutline label={"Why Us "} />
          <BtnOutline label={"FAQ & Policy"} />
        </div>
        {/* <img src="./loud.jpg" alt="" /> */}
      </div>
    </section>
  );
};

export default Hero;
