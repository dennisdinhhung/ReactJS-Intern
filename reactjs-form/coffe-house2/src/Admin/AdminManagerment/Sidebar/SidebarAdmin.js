import React from 'react'
import './sidebarAdmin.css'
import {AiOutlineUser} from 'react-icons/ai'
import { RiProductHuntLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
const SidebarAdmin = () => {
  const navLinkStyles = ({isActive}) =>{
    return{
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration : isActive ? 'none' : 'underline',
      textDecoration:'none',
      background:  isActive ? '#015DB2' : 'none',
      borderRadius: isActive ? '10px': 'none',
      /* padding:18px 41px 18px 37px; */
      color:  isActive ? '#FCFDFE' : 'none',
      width:  '237px',
      height: '50px',
      alignItems: 'center',
    }
  }
  return (
    <>
      <div className='SidebarAdmin'>
        <ul className='SidebarAdmin-ul'>
          <NavLink style={navLinkStyles} to='/user'><li className='SidebarAdmin-li'><AiOutlineUser style={{padding:'0px 5px 0px 15px'}}/><p>Quản lý người dùng</p></li></NavLink>
          <NavLink style={navLinkStyles} to='/product'><li className='SidebarAdmin-li'><RiProductHuntLine style={{padding:'0px 5px 0px 15px'}}/><p>Quản lý sản phẩm</p></li></NavLink>
          <NavLink style={navLinkStyles} to='/paymentAdmin'><li className='SidebarAdmin-li'><RiProductHuntLine style={{padding:'0px 5px 0px 15px'}}/><p>Quản lý đơn hàng</p></li></NavLink>
        </ul>
      </div>
    </>
  )
}

export default SidebarAdmin