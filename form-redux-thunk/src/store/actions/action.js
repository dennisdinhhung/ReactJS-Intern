import {
  GET_USER,
  SET_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from "./Constants";

// USE THUNK
const apiUser = "http://localhost:3000/users";
export const getUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(apiUser);
      const users = await response.json();
      dispatch({
        type: GET_USER,
        payload: users,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// Without THUNK
export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const addUser = (payload) => async (dispatch) => {
  try {
    await fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: ADD_USER,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = (payload) => async (dispatch) => {
  try {
    await fetch(apiUser + "/" + payload, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    dispatch({
      type: DELETE_USER,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = (payload) => async (dispatch) => {
  try {
    await fetch(apiUser + "/" + payload.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    dispatch({
      type: UPDATE_USER,
    });
  } catch (error) {
    console.log(error);
  }
};
