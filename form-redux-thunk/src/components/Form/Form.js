import React from "react";
import { useDispatch } from "react-redux";
import {
  setUser,
  addUser,
  updateUser,
  getUsers,
} from "../../store/actions/action";
import Validate from "./Validate";
import { useNavigate } from "react-router-dom";

function Form({ state, error, setError }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = Validate(user);
    if (!Object.values(validate).some((item) => item)) {
      dispatch(addUser(user));
      dispatch(getUsers());
      navigate(`/ListUser`);
      dispatch(
        setUser({
          id: null,
          userName: "",
          gender: "male",
          date: "",
          phoneNumber: "",
          email: "",
          address: "",
          about: "",
          checkbox: false,
        })
      );
    } else {
      setError(validate);
    }
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();

    dispatch(updateUser(user));
    dispatch(getUsers());

    dispatch(
      setUser({
        id: null,
        userName: "",
        gender: "male",
        date: "",
        phoneNumber: "",
        email: "",
        address: "",
        about: "",
        checkbox: false,
      })
    );
    navigate(`/ListUser`);
  };
  return (
    <>
      <div className="form-container" onSubmit={handleSubmit}>
        <form className="form" id="form-1">
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
              className="form-control"
              value={user.date}
              onChange={(e) => {
                dispatch(
                  setUser({
                    ...user,
                    date: e.target.value,
                  })
                );
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
              checked={user.checkbox}
              onChange={() =>
                dispatch(
                  setUser({
                    ...user,
                    checkbox: !user.checkbox,
                  })
                )
              }
            />
            <label id="save" htmlFor="checkbox">
              Accepted all the rules!
            </label>
          </div>

          <div className="group-btn">
            <button
              className={
                user.checkbox === false || user.id
                  ? "btn btn-inactive"
                  : "btn btn-active"
              }
              type="submit"
            >
              Submit
            </button>
            <button
              onClick={handleSubmitEdit}
              className={
                !user.id || user.checkbox === false
                  ? "btn btn-inactive"
                  : "btn btn-active"
              }
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
