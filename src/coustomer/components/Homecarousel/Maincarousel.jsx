import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MaincorouselData } from "./MaincorouselData";


const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 4 },
};





function Maincorousel() {
  const items = MaincorouselData.map((item)=> <img className="cursor-pointer" role="presentation"   src={item.image} alt = "" />)

  
  return (
    <AliceCarousel
    mouseTracking
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
    responsive={responsive}
    controlsStrategy="alternate" />
  )
}

export default Maincorousel


