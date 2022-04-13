import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../scss/Nav.scss";

function Nav({ datas }) {
  return (
    <nav>
      <h1>UseReducer</h1>
      <FaShoppingCart className="cart-icon" />
      <button>{datas.length}</button>
    </nav>
  );
}

export default Nav;
