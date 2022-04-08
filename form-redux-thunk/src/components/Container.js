import React from "react";
import Form from "./Form/Form";
import ListUser from "./Form/ListUser";
import Loading from "./Form/Loading";

import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

function Container() {
  const state = useSelector((state) => state.form);
  const [error, setError] = React.useState({});
  const [openBar, setOpenBar] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [userPerPage] = React.useState(5);

  return (
    <>
      <nav className="router-nav">
        <ul className="router-ul">
          <FaBars
            className="Navbar-icon"
            onClick={() => setOpenBar(!openBar)}
          />
          {openBar ? (
            <FaTimes
              className="exit-btn"
              onClick={() => setOpenBar(!openBar)}
            />
          ) : null}
          <li>
            <Link to="/Home" className="link-item">
              Home
            </Link>
          </li>
          <li>
            <Link to="/form" className="link-item">
              Form
            </Link>
          </li>
          <li>
            <Link to="/ListUser" className="link-item">
              Users
            </Link>
          </li>
          <li className="link-item contact">
            <Link to="/Home" className="link-item">
              Contact us!
            </Link>
          </li>
        </ul>
      </nav>
      <Navbar openBar={openBar} />

      <Routes>
        <Route path="/Home" element={<Loading />} />
        <Route
          path="/form"
          element={
            <Form
              state={state}
              error={error}
              setError={setError}
              openBar={openBar}
            />
          }
        />
        <Route
          path="/ListUser"
          element={
            <ListUser
              state={state}
              setError={setError}
              loading={loading}
              setLoading={setLoading}
              currentPage={currentPage}
              userPerPage={userPerPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
      </Routes>

      {/* <Form state={state} error={error} setError={setError} />
      <ListUser state={state} setError={setError} /> */}
    </>
  );
}

export default Container;
