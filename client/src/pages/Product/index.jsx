import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import { addToCart } from "../../redux/cartReducer";
import "./Product.scss";

function Product() {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState("image");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  process.env.REACT_APP_UPLOAD +
                  data?.attributes?.image?.data.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImage("image")}
              />
              <img
                src={
                  process.env.REACT_APP_UPLOAD +
                  data?.attributes?.image2?.data.attributes.url
                }
                alt=""
                onClick={(e) => setSelectedImage("image2")}
              />
            </div>
            <div className="mainImg">
              <img
                src={
                  process.env.REACT_APP_UPLOAD +
                  data?.attributes?.[selectedImage]?.data.attributes.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    description: data.attributes.description,
                    image: data.attributes.image.data.attributes.url,
                    price: data.attributes.price,
                    quantity,
                  })
                )
              }
            >
              ADD TO CART
            </button>
            <div className="link">
              <div className="item">ADD TO WISHLIST</div>
              <div className="item">ADD TO COMPARE</div>
            </div>
            <div className="info">
              <span> Vendor: Puma </span>
              <span> Product Type : T-Shirt </span>
              <span> Tag: Women, Top </span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Product;
