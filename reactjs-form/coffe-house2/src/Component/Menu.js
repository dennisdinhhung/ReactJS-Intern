import React, { useEffect, useState } from "react";
import "./menu.css";
import { useDispatch, useSelector } from "react-redux";
import { addCart, getCart, getProduct } from "../store/action/actions";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "../img/menu/desktop.png";
import { BsCartPlus } from "react-icons/bs";

const Menu = ({ products, cart, setCart, cartProduct }) => {
  const [menuItems, setMenuItems] = useState(products);
  console.log(cartProduct);
  const allCategories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];
  const dispatch = useDispatch();
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(products);
      return;
    }

    const newItems = products.filter(
      (product) => product.category === category
    );
    setMenuItems(newItems);
  };
  const handleProduct = (item) => {
    dispatch(addCart(item));
    // console(cart)
  };
const handleCart = () =>{
  dispatch(getCart())
}
  return (
    <>
      <Navbar />
      <div className="Sidebar-container">
      <Link onClick={handleCart}  to='/cart'>cart</Link>
        <div className="Sidebar">
          {allCategories.map((category, index) => {
            return (
              <div key={index}>
                <ul className="Sidebar-ul">
                  <li className="Sidebar-ul-li">
                    <a onClick={() => filterItems(category)}>{category}</a>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="Menu">
          <img
            style={{ width: "920px", height: "269px", marginLeft: "39px" }}
            src={logo}
          ></img>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="MainTop"
          >
            {(isEmpty(menuItems) ? products : menuItems).map((item) => {
              return (
                <>
                  <div style={{ display: "flex" }} className="" key={item.id}>
                    <ul style={{ listStyleType: "none" }}>
                      <li>
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/menu/${item.id}`}
                        >
                          <img className="menu-img" src={item.img}></img>
                        </Link>
                      </li>
                      <li style={{ color: "#191919", fontWeight: "bold" }}>
                        {item.title}
                      </li>
                      <li style={{ color: "#EA8025" }}>{item.price} đ</li>
                      <li>
                        <div>
                          <BsCartPlus />
                          <button onClick={() => handleProduct(item)}>
                            add
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
