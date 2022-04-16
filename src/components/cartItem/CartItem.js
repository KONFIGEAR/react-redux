import React from "react";
import "./styles.css";

export default function CartItem() {
  return (
    <div className="leaderboard">
      <main className="profiles">
        <div className="profile">
          <img
            src="https://i.imgur.com/xdbHo4E.png"
            alt="Mark Zuckerberg"
            className="picture"
          />
          <span className="name">WOMEN LEATHER BAG</span>
          <span className="value">
            230.99<span>$</span>
          </span>
        </div>
      </main>
    </div>
  );
}
