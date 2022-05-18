import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Container from "./Component/Container";
import DetailProducts from "./Component/DetailProducts";
import Footer from "./Component/Footer";
import MainTop from "./Component/MainTop";
import Navbar from "./Component/Navbar";
import Menu from "./Component/Menu";
import Login from "./Admin/Login/Login";
import Register from "./Admin/Login/Register";
import Home from "./Component/Home";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getProduct } from "../../my-app/src/store/action/actions";
import Admin from "./Admin/AdminManagerment/Admin";
import Cart from "./Component/Cart";
import ManagerProducts from "./Admin/AdminManagerment/ManagerProducts/ManagerProducts";
import ManagerUsers from "./Admin/AdminManagerment/ManagerUser/ManagerUsers";
import ManagerPayment from "./Admin/AdminManagerment/ManagerPayment/ManagerPayment";
function App() {
  const { products,cart,carts } = useSelector((state) => state.data);
  console.log(carts,"app")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getCart());
  }, []);
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/menu"   element={<Menu cart={cart}  products={products} />} />
          <Route path="/menu/:id" element={<DetailProducts cart={cart}  products={products} />} />
          <Route path="/myAdmin" element={<Admin/>} />
          <Route path="/cart" element={<Cart cart={cart} carts={carts} />}/>
          <Route path="/user" element={<ManagerUsers/>}/>
          <Route path="/product" element={<ManagerProducts/>}/>
          <Route path="/paymentAdmin" element={<ManagerPayment/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
