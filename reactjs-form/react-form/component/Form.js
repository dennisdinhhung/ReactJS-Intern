import React from "react";
import "../style.css";
import { useState,useEffect } from "react";
const Form = ({parentOnUpdate, parentOnSubmit, rowToEdit}) => {
  const [contact, setContact] = useState({  id: "",
  name: "",
  phoneNumber: "",
  city: "",
  gender: "male",
  email: "",
  checkbox: [],
  date: "",})

  useEffect(() => {
    setContact(rowToEdit)
},[rowToEdit])

  const handleCheckbox = (pref) => {
    setContact((prevInfo) => {
      // check if the pref is in the pref-list
      const isChecked = prevInfo.checkbox.includes(pref);
      // if True: filter out the pref in the list, create a new list.
      // if False: add the item into the list
      const checkboxListUpdate = isChecked
        ? prevInfo.checkbox.filter((item) => item !== pref)
        : [...prevInfo.checkbox, pref];
      return {
        ...prevInfo,
        checkbox: checkboxListUpdate,
        
      };
    });
    
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //call the handleParentSubmit
    parentOnSubmit(contact);

    // setting the InputInfo to default
    setContact({
      name: "",
      phoneNumber: "",
      city: "",
      gender: "male",
      email: "",
      checkbox: [],
      date: "",})
};

const handleUpdate = (e) => {
  e.preventDefault();

  parentOnUpdate(contact);

  setContact({
      name: "",
      phoneNumber: "",
      city: "",
      gender: "male",
      email: "",
      checkbox: [],
      date: ""
  })
}
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Name: </label>
          <input
            placeholder="Your name"
            className="input-basic"
            type="text"
            id="fullName"
            name="fullName"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
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
            onChange={(e) =>
              setContact({ ...contact, phoneNumber: e.target.value })
            }
          />
          <br />
          <div className="error" id="phone-error"></div>
        </div>
        <div className="form-group">
          <label>City: </label>
          <select
            value={contact.city}
            onChange={(e) => setContact({ ...contact, city: e.target.value })}
            name="city"
            id="city"
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
            checked={contact.gender === "male"}
            className="gender"
            type="radio"
            id="male"
            name="gender"
            value="Nam"
            onChange={(e) => setContact({ ...contact, gender: "male" })}
          />
          Nam
          <input
            className="gender"
            type="radio"
            id="female"
            name="gender"
            value="Nữ"
            checked={contact.gender === "female"}
            onChange={(e) => setContact({ ...contact, gender: "female" })}
          />
          Nữ
          <br />
          <div className="error" id="gender-error"></div>
        </div>
        {console.log(contact.checkbox)}
        <div className="form-group">
          <label>Email: </label>
          <input
            placeholder="Your Email"
            className="input-basic"
            id="email"
            type="email"
            name="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
          <br />
          <div className="error" id="email-error"></div>
        </div>
        <div className="form-group">
          <label for="date">Date: </label>
          <input
            type="date"
            id="date"
            name="date"
            value={contact.date}
            min="2018-01-01"
            max="2018-12-31"
            onChange={(e) => setContact({ ...contact, date: e.target.value })}
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
            value="javascript"
            onChange={()=>handleCheckbox("javascript")}
            checked={contact.checkbox.includes("javascript")}
          />
          <label for="checkbox">javascript</label>
          <br />
          <input
            className="course"
            type="checkbox"
            id="Ruby"
            name="checkbox"
            value="Ruby"
            onChange={()=>handleCheckbox("Ruby")}
            checked={contact.checkbox.includes("Ruby")}
          />
          <label for="checkbox">Ruby</label>
          <br />
          <input
            className="course"
            type="checkbox"
            id="Python"
            name="checkbox"
            value="Python"
            onChange={()=>handleCheckbox("Python")}
            checked={contact.checkbox.includes("Python")}
          />
          <label for="checkbox">Python</label>
          <div className="error" id="course-error"></div>
        </div>

        <div className="btn-form">
          <button onClick={handleUpdate} type="submit" id="save" className="btn-submit">
            submit
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Form;
