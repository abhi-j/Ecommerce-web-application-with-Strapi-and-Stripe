import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./Slider.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg",
    "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg",
    "https://images.pexels.com/photos/5088874/pexels-photo-5088874.jpeg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <AiOutlineArrowLeft />
        </div>
        <div className="icon" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Slider;
