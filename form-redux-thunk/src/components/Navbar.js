import React from "react";
import { Link } from "react-router-dom";

function Navbar({ openBar }) {
  return (
    <nav className={openBar ? "router-navbar" : ""}>
      <ul className={openBar ? "router-ul-bar-true" : "router-ul-bar"}>
        <li>
          <Link to="/Home" className="link-item-mobile">
            Home
          </Link>
        </li>
        <li>
          <Link to="/form" className="link-item-mobile">
            Form
          </Link>
        </li>
        <li>
          <Link to="/ListUser" className="link-item-mobile">
            Users
          </Link>
        </li>
        <li>
          <Link to="/Home" className="link-item-mobile">
            Contact us!
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
