import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, deleteCart, getCart,inCrease,deCrease, addPayment,deletePayment } from "../store/action/actions";
import {nanoid} from 'nanoid'
import { isEmpty } from "lodash";

const Cart = ({ carts }) => {
  const [number, setNumber] = useState(1);
  const [price, setPrice] = useState(0);
  const [amount,setAmount] = useState(1)
  let tongtien = carts.reduce(function (tong, sp) {
    return tong + sp.amount * sp.price;
  }, 0);
  const [user, setUser] = useState({
    id:nanoid(),
    userName: "",
    phoneNumber: "",
    address: "",
    totalPrice: ""
  });
  console.log(user,'user')
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(deleteCart(id));
    dispatch(getCart());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const inCreaseProduct = (id) => {
    dispatch(inCrease(id))
  };
  const deCreaseProduct = (id)=>{
    dispatch(deCrease(id))
  }

  const handlePayAll = (carts, user) => {
    setUser({ ...user, totalPrice: tongtien });
    const payment = carts.push(user);
    dispatch(addPayment(carts));
    carts.forEach((cart) => {
      dispatch(deleteCart(cart.id))
      setUser('')
    });
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <Link to='/menu'>back</Link>
        {isEmpty(carts) ? (<div>empty cart</div>) :(carts).map((item) => {
          return (
            <>
              <div>{item.title}</div>
              <div>{item.price}</div>
              <button onClick={() => handleRemove(item.id)}>remove</button>
              <button onClick={() => inCreaseProduct(item.id)}>+</button>
              {item.amount}
              <button onClick={() => deCreaseProduct(item.id)}>-</button>
            </>
          );
          
        })}
        <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Name<label>*</label>
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Vui lòng nhập họ tên"
              value={user.userName}
              onChange={(e) => {
                setUser({ ...user, userName: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Địa chỉ<label>*</label>
            </label>
            <input
              id="Address"
              name="Address"
              type="text"
              placeholder="Vui lòng nhập địa chỉ"
              value={user.address}
              onChange={(e) => {
                setUser({ ...user, address: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form-label">
              phoneNumber<label>*</label>
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              placeholder="Vui lòng nhập số điện thoại"
              value={user.phoneNumber}
              onChange={(e) => {
                setUser({ ...user, phoneNumber: e.target.value });
              }}
            />
          </div>
          <input
              disabled
              id="fullname"
              name="fullname"
              type="text"
              value={user.totalPrice = tongtien}
              onChange={(e) => {
                setUser({ ...user, totalPrice: tongtien });
              }}
            />

        <button onClick={()=>handlePayAll(carts,user)}>Thanh toán tổng</button>
      </form>
    </div>
  );
};

export default Cart;
