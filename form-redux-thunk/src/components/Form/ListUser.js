import React, { useEffect } from "react";
import { deleteUser, setUser, getUsers } from "../../store/actions/action";
import { useDispatch } from "react-redux";
import { ButtonEdit, ButtonDelete } from "../styled/Button.styled";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Pagination from "./Pagination";

function ListUser({
  state,
  setError,
  setLoading,
  loading,
  currentPage,
  setCurrentPage,
  userPerPage,
}) {
  const { users } = state;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
    dispatch(getUsers());
  };
  const handleEdit = (user) => {
    dispatch(setUser(user));
    setError({});
    navigate(`/form`);
  };

  useEffect(() => {
    dispatch(getUsers());
    setLoading(false);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
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
            {currentUsers.map((user, index) => (
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
        <Pagination
          userPerPage={userPerPage}
          setCurrentPage={setCurrentPage}
          state={state}
        />
      </div>
    );
  }
}

export default ListUser;
