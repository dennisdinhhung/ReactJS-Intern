import React, { useState } from "react";
import CartItems from "./CartItems";
import data from "./data";
const CartContainer = () => {
  const [items, setItems] = useState(data);
  const amount = items.reduce((total,items)=>{
    return total + items.amount
  },0)
  const price = items.reduce((total,items)=>{
    return total += items.price*items.amount
  },0)
    
  
  const clearAll = () => {
    if (items.length > 0) {
      setItems([]);
    } else if (items.length <= 0) {
      setItems(data);
    }
  };  
  const remove = (id) => {
    const removeItem = items.filter((item) => item.id !== id);
    setItems(removeItem);
  };
  const increase = (id) => {
    const increaseAmount = items.map((item) => {
      if (item.id === id) {
        item.amount = item.amount + 1;
      }
      return item;
    });
    setItems(increaseAmount);
  };
  const decrease = (id) => {
    const decreaseAmount = items.map((item) => {
      if (item.id === id) {
        item.amount = item.amount - 1;
      }
      return item;
    });
    setItems(decreaseAmount);
  };
  return (
    <div>
      <h1>Your bag</h1>
      <h1>Total: {amount}</h1>
      {items.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <p>{item.title}</p>
              <p>{item.price}</p>
              <button onClick={() => remove(item.id)}>remove</button>
            </div>
            <div>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
            <p>{item.amount}</p>
            <div>
              <button
                onClick={() =>
                  item.amount <= 0 ? remove(item.id) : decrease(item.id)
                }
              >
                -
              </button>
            </div>
          </div>
        );
      })}
      <button onClick={() => clearAll()}>
        {items.length <= 0 ? "revoke" : "removeAll"}
      </button>
      <h1>Total price : {price}</h1>
    </div>
  );
};

export default CartContainer;
