import React from "react";
import data from "../userData/data";

function ListBirthday({ users, setUsers }) {
  const handleDeleteUser = () => {
    setUsers([]);
  };
  const handleResetUser = () => {
    setUsers(data);
  };

  return (
    <div className="container">
      <h2>{users.length} Birthdays today</h2>
      {users.map((user) => {
        return (
          <article key={user.id} className="user">
            <img src={user.image} alt={user.name} />
            <div>
              <h4 className="user-info">{user.name}</h4>
              <p className="user-info">{user.age} years old</p>
            </div>
          </article>
        );
      })}
      {users.length == 0 ? (
        <button onClick={handleResetUser} className="btn-clear-user">
          Reset Reminder
        </button>
      ) : (
        <button onClick={handleDeleteUser} className="btn-clear-user">
          Clear All
        </button>
      )}
    </div>
  );
}

export default ListBirthday;
