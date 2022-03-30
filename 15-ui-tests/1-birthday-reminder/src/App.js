import React, { useState } from "react";
import ListBirthday from "./components/ListBirthday";
import data from "./userData/data";
import "./App.css";

function App() {
  const [users, setUsers] = useState(data);
  return (
    <>
      <ListBirthday users={users} setUsers={setUsers} />
    </>
  );
}

export default App;
