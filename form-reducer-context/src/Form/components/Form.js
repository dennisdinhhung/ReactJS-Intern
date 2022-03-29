import React, { useReducer } from "react";
import reducer, { initState } from "../store/reducer";
import { setUser } from "../store/actions";
import { addUser } from "../store/actions";

function Form() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { users, user } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(user));
  };
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
              className="form-control"
              id="fullname"
              name="fullname"
              type="text"
              placeholder="Ex: Chris Ngo"
              value={user.userName}
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    userName: e.target.value,
                  })
                );
              }}
            />
            <span className="form-message"></span>
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
              onChange={() => dispatch(setUser({ ...user, gender: "male" }))}
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
              onChange={() => dispatch(setUser({ ...user, gender: "female" }))}
              checked={user.gender === "female"}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email<label>*</label>
            </label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
              value={user.email}
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    email: e.target.value,
                  })
                );
              }}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="phone-number" className="form-label">
              Phone Number<label>*</label>
            </label>
            <input
              className="form-control"
              id="phone-number"
              name="phone-number"
              type="phone-number"
              placeholder="+84"
              value={user.phoneNumber}
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    phoneNumber: e.target.value,
                  })
                );
              }}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="date" className="form-label">
              Date of Birth
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="form-control"
              value={user.date}
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    date: e.target.value,
                  })
                );
              }}
            />
            <span className="form-message"></span>
          </div>

          <div className="form-group">
            <label htmlFor="address" className="form-label">
              Adress
            </label>
            <input
              className="form-control"
              id="address"
              name="address"
              type="text"
              placeholder="VD: Số nhà X, Tổ ..."
              value={user.address}
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    address: e.target.value,
                  })
                );
              }}
            />
            <span className="form-message"></span>
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
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    about: e.target.value,
                  })
                );
              }}
            ></textarea>
            <span className="form-message"></span>
          </div>

          <div className="form-group flexbox">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              className="form-control"
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    checkbox: e.target.value,
                  })
                );
              }}
            />
            <label id="save" htmlFor="checkbox">
              Accepted all the rules!
            </label>
          </div>

          <div className="group-btn">
            <button type="submit" className="btn btn-active">
              Add
            </button>
            <button className="btn-inactive" id="btn-update">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
