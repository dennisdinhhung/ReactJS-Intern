import React from 'react'
import ManagerProducts from './ManagerProducts/ManagerProducts'
import SidebarAdmin from './Sidebar/SidebarAdmin'
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from '../../store/action/actions';
import { Routes, Route, useNavigate } from "react-router-dom";
import Listproducts from '../ListManager/ListProducts';

const Admin = () => {
  const state = useSelector((state) => state.data);
  let navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className='AdminContainer'>
      <SidebarAdmin/>
      <ManagerProducts state={state}/>
    </div>
  )
}

export default Admin