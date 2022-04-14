import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../scss/Nav.scss";

function Nav({ datas }) {
  const totalAmount = datas.reduce((total, data) => {
    return (total = total + data.amount);
  }, 0);
  return (
    <nav>
      <h1>UseReducer</h1>
      <FaShoppingCart className="cart-icon" />
      <button>{totalAmount}</button>
    </nav>
  );
}

export default Nav;
