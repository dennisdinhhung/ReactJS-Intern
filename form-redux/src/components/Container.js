import React from "react";
import Form from "./Form/Form";
import ListUser from "./Form/ListUser";
import { useSelector } from "react-redux";

function Container() {
  const state = useSelector((state) => state.form);
  const [error, setError] = React.useState({});
  return (
    <>
      <Form state={state} error={error} setError={setError} />
      <ListUser state={state} setError={setError} />
    </>
  );
}

export default Container;
