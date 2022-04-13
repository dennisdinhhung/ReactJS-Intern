import React from "react";
import "../scss/CartSection.scss";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";

function CartSection({ datas, setDatas }) {
  const handleDeleteItem = (id) => {
    const itemLeft = datas.filter((item) => item.id !== id);
    setDatas(itemLeft);
    console.log(itemLeft);
  };

  const inceaseAmount = (id) => {
    const increaseAmount = datas.map((data) => {
      if (data.id === id) {
        data.amount = data.amount + 1;
      }
      return data;
    });
    setDatas(increaseAmount);
  };

  const deceaseAmount = (id) => {
    const increaseAmount = datas.map((data) => {
      if (data.id === id) {
        if (data.amount <= 0) {
          data.amount = 1;
          handleDeleteItem(data.id);
        }
        data.amount = data.amount - 1;
      }
      return data;
    });
    setDatas(increaseAmount);
  };

  if (datas.length <= 0) {
    return <p className="item-left">No items left</p>;
  } else {
    return (
      <section>
        <h1>YOUR BAG</h1>

        {datas.map((item) => {
          return (
            <div className="item" key={item.id}>
              <img src={item.img} />
              <div className="desc">
                <p>{item.title}</p>
                <p style={{ color: "grey" }}>${item.price}</p>
                <button onClick={() => handleDeleteItem(item.id)}>
                  Remove
                </button>
              </div>
              <div className="option">
                <BsFillCaretUpFill onClick={() => inceaseAmount(item.id)} />
                <p>{item.amount}</p>
                <BsFillCaretDownFill onClick={() => deceaseAmount(item.id)} />
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

export default CartSection;
