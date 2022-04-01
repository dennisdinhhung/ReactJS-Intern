import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';
import logo from './images/logo.svg';

const Navbar = () => {

    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        // products || developers || company
        const name = e.target.textContent;

        const tmpBtn = e.target.getBoundingClientRect();
        console.log(tmpBtn);
        const center = (tmpBtn.left + tmpBtn.right) / 2;
        const bottom = tmpBtn.bottom;
        openSubmenu(name, { center, bottom });
    }

    const hideSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')) {
            closeSubmenu();
        }
    }

    return (
        <nav className="nav" onMouseOver={hideSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="nav-logo" />
                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>

                <ul className="nav-links">
                    <li>
                        <button
                            className="link-btn"
                            onMouseEnter={displaySubmenu}
                        >
                            products
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseEnter={displaySubmenu}
                        >
                            developers
                        </button>
                    </li>
                    <li>
                        <button
                            className="link-btn"
                            onMouseEnter={displaySubmenu}
                        >
                            company
                        </button>
                    </li>
                </ul>

                <button className="btn signin-btn">Sign in</button>
            </div>
        </nav>
    )
}

export default Navbar;
