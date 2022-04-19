import React from 'react'
import './Hero.scss'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Navbar = ({ handleLogout, data, onDelete }) => {
    return (
        <>
            <div className='navbar-container'>
                <div className='logo-navbar'><h2>LOGO</h2></div>
                <div className='content-navbar'>
                    <div className='nav-item'><NavLink activeClassName="active" className="nav-links" to='/'>Home</NavLink></div>
                    <div className='nav-item'><NavLink activeClassName="active" className="nav-links" to='/add'>Addcontact</NavLink></div>
                    <div className='nav-item'><NavLink activeClassName="active" className="nav-links" to='/about'>About</NavLink></div>
                    <div>
                        <button className='item' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar