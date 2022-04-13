import React from "react";
import "../scss/CartFooter.scss";
import data from "../data";

function CartFooter({ datas, setDatas }) {
  const totalAmount = datas.reduce((total, data) => {
    return (total = data.price * data.amount + total);
  }, 0);

  const handleClearAll = () => {
    if (datas.length > 0) {
      setDatas([]);
    } else if (datas.length <= 0) {
      setDatas(data);
    }
  };

  return (
    <footer>
      <div className="underline"></div>
      <div className="total">
        <p>Total: </p>
        <p>${totalAmount}</p>
      </div>
      <button onClick={handleClearAll}>
        {datas.length <= 0 ? "Revoke" : "Remove All"}
      </button>
    </footer>
  );
}

export default CartFooter;
