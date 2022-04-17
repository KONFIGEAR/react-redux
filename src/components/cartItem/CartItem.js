import React from "react";
import "./styles.css";

export default function CartItem({ title, price, image }) {
  return (
    <div className="leaderboard">
      <main className="profiles">
        <div className="profile">
          <img
            src={image}
            alt="Mark Zuckerberg"
            className="picture"
          />
          <span className="name">{title}</span>
          <span className="value">
            {price}<span>$</span>
          </span>
        </div>
      </main>
    </div>
  );
}

CartItem.defaultProps = {
  title: "WOMEN LEATHER BAG",
  price: "230.99",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
}