import React, { useState } from "react";
import "./managerproducts.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
import Validate from "../../Validate"
import {
  setProduct,
  addProduct,
  updateProduct,
  getProduct,
  deleteProduct,
} from "../../../store/action/actions";
import SidebarAdmin from "../Sidebar/SidebarAdmin";
const ManagerProducts = () => {
  const state = useSelector((state) => state.data);
  const [error_msg, setErrorMsg] = useState({});
  const { product, products } = state;
  const [pickedUser, setPickedUser] = useState([]);
  const [inputSearch, setInputSearch] = React.useState({
    title_like: "",
    category: "",
    price_like: "",
    img_like: "",
    desc_like:""
  });
  const [searchUsers, setSearchUsers] = React.useState([]);
  const dispatch = useDispatch();
  const handleSearch = () => {
    fetchSearch();

    setInputSearch({
      userName_like: "",
      gender: "",
      date_like: "",
      phoneNumber_like: "",
      email_like: "",
      address_like: "",
    });
  };
  const fetchSearch = async () => {
    const paramsString = queryString.stringify(inputSearch, {
      skipEmptyString: true,
    });
    console.log(inputSearch, searchUsers, paramsString);

    const response = await fetch(`http://localhost:3000/users?${paramsString}`);
    const searchData = await response.json();
    setSearchUsers(searchData);
  };
  const currentProduct = (searchUsers.length>0 ? searchUsers: products)
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getProduct());
    dispatch(getProduct());
  };
  const handleAdd = () => {
    const validate =Validate(product)
    if(!Object.values(validate).some((item)=>item)){
      dispatch(addProduct(product));
      dispatch(
        setProduct({
          id: null,
          title: "",
          category: "",
          price: "",
          img: "",
          desc: "",
        })
      );
      return
    }
   setErrorMsg(validate)
  };
  const handleEdit = () => {

    const editProduct = products.filter(
      (product) => product.id === pickedUser[0]
    );
    dispatch(setProduct(editProduct[0]));
  };
  const handleDelete = () => {
    const delList = pickedUser;
    delList.forEach((contact) => {
      dispatch(deleteProduct(contact));
    });
    // dispatch(deleteProduct(pickedUser));
    dispatch(getProduct());
    dispatch(getProduct());
    setPickedUser("");
    dispatch(
      setProduct({
        id: null,
        title: "",
        category: "",
        price: "",
        img: "",
        desc: "",
      })
    );
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(product));
    dispatch(getProduct());
    dispatch(
      setProduct({
        id: null,
        title: "",
        category: "",
        price: "",
        img: "",
        desc: "",
      })
    );
    dispatch(getProduct());
  };
  const handleCheckbox = (id) => {
    const isChecked = pickedUser.includes(id);
    const checkboxListUpdate = isChecked
      ? pickedUser.filter((item) => item !== id)
      : [...pickedUser, id];
    setPickedUser(checkboxListUpdate);
  };
  return (
    <>
      <div className="container-manager">
        <SidebarAdmin />
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form1">
              <div className="form-group">
                <p>Tên sản phẩm</p>
                <input
                  id="titleProduct"
                  className="input-basic"
                  name="titleProduct"
                  type="text"
                  value={product.title}
                  onChange={(e) => {
                    dispatch(
                      setProduct({
                        ...product,
                        title: e.target.value,
                      })
                    );
                    error_msg.title = null;

                  }}
                ></input>
                
                 <span className="form-message">{error_msg.title}</span> 

              
              </div>
              <div className="form-group">
                <p>Giá sản phẩm</p>
                <input
                  id="priceProducts"
                  className="input-basic"
                  name="priceProducts"
                  type="text"
                  value={product.price}
                  onChange={(e) => {
                    dispatch(
                      setProduct({
                        ...product,
                        price: e.target.value,
                      })
                    );
                    error_msg.price = null;

                  }}
                ></input>
                <span className="form-message">{error_msg.price}</span>
              </div>
            </div>
            <div className="form2">
              <div className="form-group">
                <p>Mô tả sản phẩm</p>
                <input
                  type="text"
                  id="descProducts"
                  className="input-basic"
                  name="descProduct"
                  value={product.desc}
                  onChange={(e) => {
                    dispatch(
                      setProduct({
                        ...product,
                        desc: e.target.value,
                      })
                    );
                    error_msg.desc = null;

                  }}
                ></input>
              </div>
              <span className="form-message">{error_msg.desc}</span>

              <div className="form-group">
                <p>Ảnh</p>
                <input
                  type="text"
                  id="descProducts"
                  className="input-basic"
                  name="descProduct"
                  value={product.img}
                  onChange={(e) => {
                    dispatch(
                      setProduct({
                        ...product,
                        img: e.target.value,
                      })
                    );
                    error_msg.img = null;

                  }}
                ></input>
              </div>
              <span className="form-message">{error_msg.img}</span>

              <div
                style={{ display: "flex", width: "200px", height: "30px" }}
                className="form-group"
              >
                <p>Loại sản phẩm</p>
                <select
                  value={product.category}
                  onChange={(e) => {
                    dispatch(
                      setProduct({
                        ...product,
                        category: e.target.value,
                      })
                    );
                  }}
                  name="categoryProducts"
                  id="categoryProducts"
                >
                  <option>coffe</option>
                  <option>tea</option>
                  <option>bread</option>
                  <option>Hi-tea Healthy</option>
                </select>
                
              </div>
              
              {/* <span className="form-message">{error_msg.category}</span> */}
              <div style={{ display: "none" }} className="form-group">
                <p>Số lượng</p>
                <input
                  type="text"
                  id="descProducts"
                  className="input-basic"
                  name="descProduct"
                  value={product.amount}
                  onChange={(e) => {
                    dispatch(
                      setProduct({
                        ...product,
                        amount: e.target.value,
                      })
                    );
                  }}
                ></input>
              </div>
              
            </div>
          </div>
          <div className="table-wrapper">
          <div className="list">
            <table className="customer ">
              <thead>
                <tr>
                  <th></th>
                  <th>Tên </th>
                  <th>Giá</th>
                  <th>Loại </th>
                  <th>Mô tả</th>
                  <th>Ảnh</th>
                </tr>
              </thead>
              <tbody>
                {currentProduct.map((contact, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        name="checkbox"
                        onChange={() => handleCheckbox(contact.id)}
                        checked={pickedUser.includes(contact.id)}
                      />
                    </td>
                    <td>{contact.title}</td>
                    <td>{contact.price}</td>
                    <td>{contact.category}</td>
                    <td>{contact.desc}</td>
                    <td>{contact.img}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>
          </div>
          
          <div className="button">
            <button type="submit" className={pickedUser.length === 0  ? 'active-btn': 'disable-btn' }  onClick={() => handleAdd()}>
              Add
            </button>
            <button className={pickedUser.length === 1  ? 'active-btn': 'disable-btn' } onClick={() => handleDelete()}>
              Delete
            </button>
            <button className={pickedUser.length === 1  ? 'active-btn': 'disable-btn' } onClick={() => handleEdit()}>
              Edit
            </button>
            <div>
                <button className="active-btn" onClick={handleSubmitEdit}>submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManagerProducts;
