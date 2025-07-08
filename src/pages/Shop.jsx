import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import Banner from "../components/Banner";
import AnnouncementBar from "../components/AnnouncementBar";

const Shop = () => {
  const [selectedSaxType, setSelectedSaxType] = useState('All');
  const [activeAccessory, setActiveAccessory] = useState('All');

  return (
    <>
      <Banner />
      <AnnouncementBar announcemen={"Free Shipping for Nasr City"}/>
      <Filters 
        selectedSaxType={selectedSaxType}
        setSelectedSaxType={setSelectedSaxType}
        activeAccessory={activeAccessory}
        setActiveAccessory={setActiveAccessory}
      />
      <ProductList 
        selectedSaxType={selectedSaxType}
        activeAccessory={activeAccessory}
        setSelectedSaxType={setSelectedSaxType}
        setActiveAccessory={setActiveAccessory}
      />
    </>
  );
};

export default Shop;
