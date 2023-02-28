import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProduct.scss";
import useFetch from "../hooks/useFetch";

const FeaturedProduct = ({ type }) => {
  const { data, loading, error } = useFetch(
    `products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProduct">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading..."
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProduct;
