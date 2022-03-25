import React, { useState } from "react";
import "./css/form.css";
import "./css/listUsers.css";
import Form from "./components/Form";
import ListUsers from "./components/ListUsers";
import Validate from "./components/Validate";

function App() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState({
    id: null,
    userName: "",
    gender: "male",
    email: "",
    phoneNumber: "",
    date: "",
    address: "",
    about: "",
  });
  const [error, setError] = useState({});
  function getUser(user) {
    setEditUser(user);
  }
  const handleSubmit = (user) => {
    // Random id
    let id = Math.floor(Math.random() * 10000);
    // Init new user
    const newUser = {
      ...user,
      id,
    };
    // New list user
    const newUsers = [...users, newUser];

    const validator = Validate(user);
    if (!Object.values(validator).some((item) => item)) {
      setUsers(newUsers);
      setError({});
      return;
    }
    setError(validator);
  };

  const handleUpdateUser = (user) => {
    const updateUser = users.map((mapUser) => {
      if (mapUser.id === user.id) {
        mapUser = user;
      }
      return mapUser;
    });
    setUsers(updateUser);
  };

  // edit user
  // Delete user
  const handleDelete = (id) => {
    if (id) {
      const userAfterDelete = users.filter((user) => {
        return user.id !== id;
      });
      setUsers(userAfterDelete);
    }
  };
  return (
    <div className="App">
      <Form
        onSubmit={handleSubmit}
        editUser={editUser}
        onEdit={handleUpdateUser}
        error={error}
      />
      <ListUsers users={users} handleDelete={handleDelete} getUser={getUser} />
    </div>
  );
}

export default App;
