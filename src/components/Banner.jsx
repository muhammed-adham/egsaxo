import React, { useState, useEffect } from "react";
import "./Banner.css";
import AnnouncementBar from "./AnnouncementBar";
import LoaderPage from "./LoaderPage";

const imagesToPreload = ["/loud-6.jpg", "/saxo.png"];

const Banner = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

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
      <div className="banner__container">
        <div className="banner__container-slogan">
          <h2>Egypt's Saxophone</h2>
        </div>
        <img
          className="banner__background-img"
          src="/sugar.jpeg"
          alt="Banner background"
        />
        <div className="banner__container-img">
          <img src="/saxo-2.png" alt="" />
        </div>
        <div className="banner__container-img-2">
          <img src="/TC.jpeg" alt="" />
        </div>
        <div className="banner__container-content">
          <div className="banner__container-title">
            {" "}
            <h2>Join The Hub</h2>
          </div>
          <div className="banner__container-cards">
            {/* <div className="banner__card"><img src="./loud.jpg" alt="" /></div> */}
            {/* <div className="banner__card"><img src="./loud.jpg" alt="" /></div> */}
            {/* <div className="banner__card"><img src="./loud.jpg" alt="" /></div> */}
          </div>
          <div className="banner__container-pragraph">
            <p>
              <b>More Than Just Accessories</b>
              <br />
              We believe that great music starts with great gear, but it thrives
              through great connections. We're not just selling saxophone
              accessories – we're cultivating Egypt's most vibrant saxophone
              community, one player at a time.
            </p>
          </div>
        </div>
        <div className="banner__container-circle"></div>
        <AnnouncementBar announcemen={"Free Shipping for Nasr City"} />
      </div>
    </>
  );
};

export default Banner;
