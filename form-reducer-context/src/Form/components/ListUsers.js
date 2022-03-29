import React, { useContext } from "react";
import { actions, Context } from "../store";

function ListUsers({ setError }) {
  const [state, dispatch] = useContext(Context);
  const { users, user } = state;
  const handleEdit = (user) => {
    dispatch(actions.setUser(user));
    setError({});
  };
  const handleDelete = (id) => {
    dispatch(actions.deleteUser(id));
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
              <td>
                <button
                  onClick={() => handleEdit(user)}
                  className="btn-control btn-control-edit"
                >
                  Edit
                </button>
                &nbsp;&nbsp;
                <button
                  onClick={() => handleDelete(user.id)}
                  className="btn-control btn-control-delete"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListUsers;
