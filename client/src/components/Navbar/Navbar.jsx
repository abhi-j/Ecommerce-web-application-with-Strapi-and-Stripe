import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
import { BsCart, BsHeart, BsPersonDash } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Navbar.scss";

function Navbar() {
  const products = useSelector((state) => state.cart.products);

  const [open, setOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/shopping.png" alt="logo" width={24} height={24} />
            <AiOutlineDown />
          </div>
          <div className="item">
            <span>INR</span>
            <AiOutlineDown />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            PARADISE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Store
            </Link>
          </div>
          <div className="icons">
            <AiOutlineSearch />
            <BsHeart />
            <BsPersonDash />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <BsCart />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
}

export default Navbar;
