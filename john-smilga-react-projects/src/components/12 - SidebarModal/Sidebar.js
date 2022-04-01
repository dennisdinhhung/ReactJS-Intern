import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data.js';
import { useGlobalContext } from './context';

const Sidebar = () => {

    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <article
            className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}
        >
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo" />
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>

            <ul className="links">
                {
                    links.map(link => (
                        <li key={link.id}>
                            <a href={link.url}>
                                {link.icon}
                                {link.text}
                            </a>
                        </li>
                    ))
                }
            </ul>

            <ul className="social-icons">
                {
                    social.map(item => (
                        <li key={item.id}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={item.url}
                            >
                                {item.icon}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </article >
    )
}

export default Sidebar;
