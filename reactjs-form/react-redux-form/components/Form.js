import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContactInput, updateData, addData } from "../Stores/actions";
const Form = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.form);
  const{contacts,contact} = state
  const handleSubmit = (e) => {
    e.preventDefault();

    //call the handleParentSubmit
    // parentOnSubmit(contact);

    // setting the InputInfo to default
    dispatch(addData(contact));
  };
  const handleCheckbox = (pref) => {
    const isChecked = contact.checkbox.includes(pref);
    // if True: filter out the pref in the list, create a new list.
    // if False: add the item into the list
    const checkboxListUpdate = isChecked
      ? contact.checkbox.filter((item) => item !== pref)
      : [...contact.checkbox, pref];
    dispatch(
      setContactInput({
        // check if the pref is in the pref-list
        ...contact,
        checkbox: checkboxListUpdate,
      })
    );
  };

  const handleUpdate = (e, contact) => {
    e.preventDefault();
    dispatch(updateData(contact));
    dispatch(
      setContactInput({
        id: null,
        name: "",
        phoneNumber: "",
        city: "",
        gender: "male",
        email: "",
        checkbox: [],
        date: "",
      })
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name: </label>
          <input
            placeholder="Your name"
            className="input-basic"
            type="text"
            id="name"
            name="name"
            value={contact.name}
            onChange={(e) => {
              dispatch(setContactInput({ ...contact, name: e.target.value }));
            }}
          />
          <br />
          <div className="error" id="fullname-error"></div>
        </div>

        <br />
        <div className="form-group">
          <label>Phone Number: </label>
          <input
            placeholder="Phone Number"
            className="input-basic"
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={(e) => {
              dispatch(
                setContactInput({ ...contact, phoneNumber: e.target.value })
              );
            }}
          />
          <br />
          <div className="error" id="phone-error"></div>
        </div>
        <div className="form-group">
          <label>City: </label>
          <select
            name="city"
            id="city"
            onChange={(e) => {
              dispatch(setContactInput({ ...contact, city: e.target.value }));
            }}
          >
            <option>Hà Nội</option>
            <option>Thanh Hóa</option>
            <option>Lạng Sơn</option>
            <option>Hải Phòng</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender: </label>
          <input
            className="gender"
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={(e) => {
              dispatch(setContactInput({ ...contact, gender: e.target.value }));
            }}
            checked={contact.gender === "male"}
          />
          Nam
          <input
            className="gender"
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={(e) => {
              dispatch(setContactInput({ ...contact, gender: e.target.value }));
            }}
            checked={contact.gender === "female"}
          />
          Nữ
          <br />
          <div className="error" id="gender-error"></div>
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            placeholder="Your Email"
            className="input-basic"
            id="email"
            type="email"
            name="email"
            value={contact.email}
            onChange={(e) => {
              dispatch(setContactInput({ ...contact, email: e.target.value }));
            }}
          />
          <br />
          <div className="error" id="email-error"></div>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            min="2018-01-01"
            max="2018-12-31"
            value={contact.date}
            onChange={(e) => {
              dispatch(setContactInput({ ...contact, date: e.target.value }));
            }}
          />
        </div>
        <div className="form-group">
          <label>Course: </label>
          <br />
          <input
            className="course"
            type="checkbox"
            id="javascript"
            name="checkbox"
            onChange={() => handleCheckbox("javascript")}
            checked={contact.checkbox.includes("javascript")}
          />
          <label htmlFor="checkbox">javascript</label>
          <br />
          <input
            className="course"
            type="checkbox"
            id="Ruby"
            name="checkbox"
            value="Ruby"
            onChange={() => handleCheckbox("Ruby")}
            checked={contact.checkbox.includes("Ruby")}
          />
          <label htmlFor="checkbox">Ruby</label>
          <br />
          <input
            className="course"
            type="checkbox"
            id="Python"
            name="checkbox"
            value="Python"
            onChange={() => handleCheckbox("Python")}
            checked={contact.checkbox.includes("Python")}
          />
          <label htmlFor="checkbox">Python</label>
          <div className="error" id="course-error"></div>
        </div>

        <div className="btn-form">
          <button type="submit" id="save" className="btn-submit">
            submit
          </button>
          <button
            onClick={(e) => handleUpdate(e, contact)}
            type="submit"
            id="save"
            className="btn-submit"
          >
            update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
