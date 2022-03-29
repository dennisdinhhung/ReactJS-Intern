import React, { useState } from "react";
import Form from "./Form";
import ListUsers from "./ListUsers";

function Container() {
  const [error, setError] = useState({});

  return (
    <>
      <Form error={error} setError={setError} />
      <ListUsers error={error} setError={setError} />
    </>
  );
}

export default Container;
