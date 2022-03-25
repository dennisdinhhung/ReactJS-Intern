import React, { useState, useEffect } from "react";
import Validate from "./Validate";

function Form({ onSubmit, editUser, onEdit, error }) {
  const [user, setUser] = useState({
    id: null,
    userName: "",
    gender: "male",
    email: "",
    phoneNumber: "",
    date: "",
    address: "",
    about: "",
  });

  //-------------Danh sách users---------
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(user);
    // Reset form
    const validator = Validate(user);
    if (!Object.values(validator).some((item) => item)) {
      setUser({
        id: null,
        userName: "",
        date: "",
        gender: "male",
        phoneNumber: "",
        email: "",
        address: "",
        about: "",
      });
    }
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();
    onEdit(user);

    setUser({
      id: null,
      userName: "",
      date: "",
      gender: "male",
      phoneNumber: "",
      email: "",
      address: "",
      about: "",
    });
  };

  useEffect(() => {
    if (editUser) {
      setUser(editUser);
    }
  }, [editUser]);

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form" id="form-1">
          <h3 className="heading">Sign Up</h3>
          <div className="spacer"></div>
          <div className="form-group">
            <label htmlFor="fullname" className="form-label">
              Name<label>*</label>
            </label>
            <input
              className={
                error.userName ? "invalid form-control" : "form-control"
              }
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Ex: Chris Ngo"
              value={user.userName}
              onChange={(e) => {
                setUser({ ...user, userName: e.target.value });
                error.userName = null;
              }}
            />
            <span className="form-message">{error.userName}</span>
          </div>

          <div className="form-group flexbox">
            sex:
            <label htmlFor="male" className="form-label genderM">
              Male
            </label>
            <input
              className="form-control"
              id="male"
              name="gender"
              type="radio"
              value="male"
              onChange={() => setUser({ ...user, gender: "male" })}
              checked={user.gender === "male"}
            />
            <label htmlFor="female" className="form-label genderF">
              Female
            </label>
            <input
              className="form-control"
              id="female"
              name="gender"
              type="radio"
              value="female"
              onChange={() => setUser({ ...user, gender: "female" })}
              checked={user.gender === "female"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email<label>*</label>
            </label>
            <input
              className={error.email ? "invalid form-control" : "form-control"}
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
                error.email = null;
              }}
            />
            <span className="form-message">{error.email}</span>
          </div>

          <div className="form-group">
            <label htmlFor="phone-number" className="form-label">
              Phone Number<label>*</label>
            </label>
            <input
              className={
                error.phoneNumber ? "invalid form-control" : "form-control"
              }
              id="phone-number"
              name="phone-number"
              type="phone-number"
              placeholder="+84"
              value={user.phoneNumber}
              onChange={(e) => {
                setUser({ ...user, phoneNumber: e.target.value });
                error.phoneNumber = null;
              }}
            />
            <span className="form-message">{error.phoneNumber}</span>
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Date of Birth
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className={error.date ? "invalid form-control" : "form-control"}
              value={user.date}
              onChange={(e) => {
                setUser({ ...user, date: e.target.value });
                error.date = null;
              }}
            />
            <span className="form-message">{error.date}</span>
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Adress
            </label>
            <input
              className={
                error.address ? "invalid form-control" : "form-control"
              }
              id="address"
              name="address"
              type="text"
              placeholder="VD: Số nhà X, Tổ ..."
              value={user.address}
              onChange={(e) => {
                setUser({ ...user, address: e.target.value });
                error.address = null;
              }}
            />
            <span className="form-message">{error.address}</span>
          </div>

          <div className="form-group">
            <label htmlFor="about" className="form-label">
              About
            </label>
            <textarea
              id="about"
              name="about"
              type="text"
              rows="8"
              value={user.about}
              onChange={(e) => setUser({ ...user, about: e.target.value })}
            ></textarea>
            <span className="form-message"></span>
          </div>

          <div className="form-group flexbox">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              className="form-control"
            />
            <label id="save" htmlFor="checkbox">
              Save infomation ?
            </label>
          </div>

          <div className="group-btn">
            <button
              type="submit"
              className={user.id ? "btn btn-inactive" : "btn btn-active"}
            >
              Add
            </button>
            <button
              className={user.id ? "btn btn-active" : "btn btn-inactive"}
              id="btn-update"
              onClick={(e) => handleUpdateUser(e)}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
