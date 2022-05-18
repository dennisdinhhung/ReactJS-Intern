import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import {
  addUser,
  deleteUser,
  getUser,
  setUser,
  updateUser,
} from "../../../store/action/actions";
import SidebarAdmin from "../Sidebar/SidebarAdmin";
import "./manageruser.css";
import ValidateUser from "../../ValidateUser";
const ManagerUsers = () => {
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.data);
  const { user, users } = state;
  const [error_msg, setErrorMsg] = useState({});
  const [pickedUser, setPickedUser] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getUser());
    dispatch(getUser());
  };

  const handleAdd = () => {
    console.log(user);
    const validate = ValidateUser(user);
    if (!Object.values(validate).some((item) => item)) {
      dispatch(addUser(user));
      dispatch(
        setUser({
          idUser: null,
          userName: "",
          passWord: "",
          name: "",
          order: [],
          role: "",
        })
      );
      return
    }
    setErrorMsg(validate)
  };
  const handleEdit = () => {
    const editUser = users.filter((user) => user.id === pickedUser[0]);
    dispatch(setUser(editUser[0]));
  };
  const handleDelete = () => {
    const delList = pickedUser;
    delList.forEach((contact) => {
      dispatch(deleteUser(contact));
    });
    dispatch(getUser());
    dispatch(getUser());
    setPickedUser("");
    dispatch(
      setUser({
        idUser: null,
        userName: "",
        passWord: "",
        name: "",
        order: [],
        role: "",
      })
    );
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    dispatch(updateUser(user));
    dispatch(getUser());
    dispatch(
      setUser({
        idUser: null,
        userName: "",
        passWord: "",
        name: "",
        order: [],
        role: "",
      })
    );
    dispatch(getUser());
  };
  const handleCheckbox = (id) => {
    const isChecked = pickedUser.includes(id);
    const checkboxListUpdate = isChecked
      ? pickedUser.filter((item) => item !== id)
      : [...pickedUser, id];
    setPickedUser(checkboxListUpdate);
  };
  return (
    <>
      <div className="container-manager">
        <SidebarAdmin />
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form1">
              <div className="form-group">
                <p>Tên đăng nhập</p>
                <input
                  id="userName"
                  className="input-basic"
                  name="userName"
                  type="text"
                  value={user.userName}
                  onChange={(e) => {
                    dispatch(
                      setUser({
                        ...user,
                        userName: e.target.value,
                      })
                    );
                    error_msg.userName = null;
                  }}
                ></input>
                <span className="form-message">{error_msg.userName}</span>
              </div>
              <div className="form-group">
                <p>Mật khẩu</p>
                <input
                  id="passUser"
                  className="input-basic"
                  name="passUser"
                  type="text"
                  value={user.passWord}
                  onChange={(e) => {
                    dispatch(
                      setUser({
                        ...user,
                        passWord: e.target.value,
                      })
                    );
                    error_msg.passWord = null;
                  }}
                ></input>
                <span className="form-message">{error_msg.passWord}</span>
              </div>
            </div>
            <div className="form2">
              <div className="form-group">
                <p>Tên người dùng</p>
                <input
                  type="text"
                  id="nameUser"
                  className="input-basic"
                  name="nameUser"
                  value={user.name}
                  onChange={(e) => {
                    dispatch(
                      setUser({
                        ...user,
                        name: e.target.value,
                      })
                    );
                    error_msg.name = null;
                  }}
                ></input>
                <span className="form-message">{error_msg.name}</span>
              </div>
              <div className="form-group">
                <p>Vai trò</p>
                <select
                  value={user.role}
                  onChange={(e) => {
                    dispatch(
                      setUser({
                        ...user,
                        role: e.target.value,
                      })
                    );
                  }}
                  name="roleUser"
                  id="roleUser"
                >
                  <option>user</option>
                  <option>admin</option>
                </select>
              </div>
              <div>
                <button onClick={handleSubmitEdit}>submit</button>
              </div>
            </div>
          </div>

          <div className="list">
            <table className="customer">
              <thead>
                <tr>
                  <th></th>
                  <th>Tên đăng nhập</th>
                  <th>Mật khẩu</th>
                  <th>Tên người dùng</th>
                  <th>Vai trò</th>
                </tr>
              </thead>
              <tbody>
                {users.map((contact, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        type="checkbox"
                        name="checkbox"
                        onChange={() => handleCheckbox(contact.id)}
                        checked={pickedUser.includes(contact.id)}
                      />
                    </td>
                    <td>{contact.userName}</td>
                    <td>{contact.passWord}</td>
                    <td>{contact.name}</td>
                    <td>{contact.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="button">
            <button type="submit" className={pickedUser.length === 0  ? 'active-btn': 'disable-btn' }  onClick={() => handleAdd()}>
              Add
            </button>
            <button className={pickedUser.length === 1  ? 'active-btn': 'disable-btn' }  onClick={() => handleDelete()}>
              Delete
            </button>
            <button className={pickedUser.length === 1  ? 'active-btn': 'disable-btn' } onClick={() => handleEdit()}>
              Edit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ManagerUsers;
