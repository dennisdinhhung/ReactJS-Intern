import React from "react";
import { deleteUser, updateUser, setUser } from "../../store/actions/action";
import { useDispatch } from "react-redux";
import { ButtonEdit, ButtonDelete } from "../styled/Button.styled";
import Validate from "./Validate";

function ListUser({ state, setError }) {
  const { users } = state;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };
  const handleEdit = (user) => {
    dispatch(setUser(user));
    setError({});
  };

  return (
    <div className="listUsers-container">
      <table className="table table-bordered">
        <thead>
          <tr className="tr">
            <th scope="col">STT</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Tel</th>
            <th scope="col">Date</th>
            <th scope="col">Adress</th>
            <th scope="col">About</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody id="user">
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.userName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.date}</td>
              <td>{user.address}</td>
              <td>{user.about}</td>
              <td className="btn-group">
                <ButtonEdit
                  className="btn-option"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </ButtonEdit>
                <ButtonDelete
                  className="btn-option"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </ButtonDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
