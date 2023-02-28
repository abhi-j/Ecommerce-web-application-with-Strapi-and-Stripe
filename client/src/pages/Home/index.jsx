import React from "react";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";
import Slider from "../../components/Slider/Slider";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct type="featured" />
      <FeaturedProduct type="trending" />
      <Categories />
      <Contact />
    </div>
  );
}

export default Home;
