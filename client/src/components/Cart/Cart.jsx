import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove, resetCart } from "../../redux/cartReducer";
import "./Cart.scss";
import { loadStripe } from "@stripe/stripe-js";
import { request } from "../../request";

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach((element) => (total += element.quantity * element.price));
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51MfrW1SHJyYKBMZOd7G0bJ0OmxHXQ8DrZ64tJvomDGcbZ6DgPW95cLRwY1QInC2PeT7hJd2sTNmhK2n5yHivIgBj006DLrV057"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await request.post("/orders", { products });

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  // const data = [
  //   {
  //     id: 1,
  //     img: "https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg",
  //     img2: "https://images.pexels.com/photos/3080536/pexels-photo-3080536.jpeg",
  //     title: "",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  //     oldPrice: 20,
  //     price: 16,
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //     img2: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg",
  //     isNew: true,
  //     title: "New Arrivals",
  //     desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  //     oldPrice: 20,
  //     price: 16,
  //   },
  // ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD + item.image} alt="" />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item?.description.substring(0, 40)}</p>
            <div className="price">
              {item.quantity} x {item.price}
            </div>
          </div>
          <MdDeleteOutline
            className="delete"
            onClick={() => dispatch(remove(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        RESET CART
      </span>
    </div>
  );
}

export default Cart;
