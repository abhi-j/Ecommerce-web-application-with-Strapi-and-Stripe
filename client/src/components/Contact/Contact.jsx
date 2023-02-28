import React from "react";
import "./Contact.scss";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>BE IN TOUCH WITH US</span>
        <div className="email">
          <input type="text" placeholder="Enter your email..." />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <AiFillTwitterSquare />
          <AiOutlineFacebook />
          <AiOutlineInstagram />
        </div>
      </div>
    </div>
  );
}

export default Contact;
