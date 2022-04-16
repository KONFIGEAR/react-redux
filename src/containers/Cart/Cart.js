import React from "react";
import "./style.css";
import CartItem from "../../components/cartItem/CartItem";

export default function Cart() {
  return (
    <div className="cart-wraper">
      <CartItem />
    </div>
  );
}
