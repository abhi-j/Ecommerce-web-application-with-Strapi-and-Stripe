import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              process.env.REACT_APP_UPLOAD +
              item.attributes?.image?.data?.attributes?.url
            }
            alt=""
            className="mainImg"
          />
          <img
            src={
              process.env.REACT_APP_UPLOAD +
              item.attributes?.image2?.data?.attributes?.url
            }
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 50}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
