import React, { useState, useEffect } from "react";
import "./Banner.css";
import AnnouncementBar from "./AnnouncementBar";
import LoaderPage from "./LoaderPage";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";
import { GoDot, GoDotFill } from "react-icons/go";
import AltoSaxo from "./AltoSaxo";

const imagesToPreload = ["/loud-6.jpg", "/saxo.png"];

const Banner = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const perspective = 900;

  // Scroll handler for arrow down
  const handleArrowDownClick = () => {
    const productListSection = document.querySelector(".announcement-bar");
    if (productListSection) {
      productListSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Mouse move handler for 3D effect
  const handleMouseMove = (e) => {
    const banner = e.currentTarget;
    const rect = banner.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Max rotation: 18deg
    const rotateY = ((x - centerX) / centerX) * 18;
    const rotateX = -((y - centerY) / centerY) * 18;
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  useEffect(() => {
    let loadedCount = 0;
    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToPreload.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  if (!imagesLoaded) {
    return <LoaderPage />;
  }

  return (
    <>
      <div
        className="banner__container"
        // onMouseMove={handleMouseMove}
        // onMouseLeave={handleMouseLeave}
        style={{ perspective: `${perspective}px` }}
      >
        {/* <AltoSaxo /> */}
        <div
          className="banner__background-img"
          style={{
            transform: `translateX(-50%) rotateX(${
              rotation.x / 2
            }deg) rotateY(${rotation.y / 2}deg)`,
          }}
        >
          <img
            // src="/sugar.jpeg"
            alt="Banner background"
          />
        </div>
        <div
          className="banner__container-content"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
        >
          {/* <div className="banner__container-slogan banner__container-slogan--glow">
            <h2>
              Egypt's
              <br /> <span> Saxophone </span>
            </h2>
          </div> */}
          <div className="banner__container-title fade-in-up delay-1">
            {" "}
            <h2>Join The Hub</h2>
          </div>
          <div className="banner__container-paragraph fade-in-up delay-2">
            <p>
              <b>More Than Just Accessories</b>
              <br />
              We believe that great music starts with great gear, but it thrives
              through great connections. We're not just selling saxophone
              accessories – we're cultivating Egypt's most vibrant saxophone
              community, one player at a time.
            </p>
          </div>
          <div className="banner__container-social fade-in-up delay-3">
            <Link to={"https://www.tiktok.com/@egsaxo"} target="_blank">
              <AiFillTikTok />
            </Link>
            <Link to={"https://www.instagram.com/egsaxo/"} target="_blank">
              <AiFillInstagram />
            </Link>
          </div>
        </div>
        <div className="arrow-down" onClick={handleArrowDownClick}>
          {/* <IoIosArrowDown size={"2rem"} /> */}
          <GoDotFill />
        </div>
      </div>
      <AnnouncementBar
        announcement={"Limited stock available – Don’t miss out!"}
      />
    </>
  );
};

export default Banner;
