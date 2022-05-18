import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../store/action/actions";
import { isEmpty } from "lodash";
import "./detailProduct.css";
import Footer from "./Footer";
const DetailProducts = ({ products }) => {
  const state = useSelector(state=>state.data)
  const {cart,carts} = state
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(cart,"cart")
  const [menuItems, setMenuItems] = useState(products);
  const handleProduct = (item) =>{
    
    console.log(item)
  }
  useEffect(()=>{
    handleProduct()
  },[cart])
  return (
    <>
      <Navbar />
      <div className="Detail-container">
        {products
          .filter((item,index) => item.id === parseInt(id))
          .map((item,index) => {
            return (
              <>
              <div key={index}>
              <div className="Detail-main">
                  <div>
                    <img className="Detail-main-img" src={item.img}></img>
                  </div>
                  <ul className="Detail-main-ul">
                    <li>
                      <h1>{item.title}</h1>
                    </li>
                    <li className="Detail-main-ul-price">{item.price}</li>
                    <li>
                      <button onClick={()=>handleProduct(item)} className="Detail-main-ul-button">
                        Đặt giao tận nơi
                      </button>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><h2>Thông tin</h2></li>
                    <li><p>{item.desc}</p></li>
                  </ul>
                </div>
              </div>
               
              </>
            );
          })}
      </div>
      <Footer/>
    </>
  );
};

export default DetailProducts;
