import { SET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from "./Constants";

// USE THUNK
export const setUser = (payload) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER,
      payload,
    });
  };
};

// Without THUNK
// export const setUser = (payload) => ({
//   type: SET_USER,
//   payload,
// });

export const addUser = (payload) => ({
  type: ADD_USER,
  payload,
});

export const deleteUser = (payload) => ({
  type: DELETE_USER,
  payload,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload,
});
