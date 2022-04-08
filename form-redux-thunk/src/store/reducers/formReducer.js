import {
  SET_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  GET_USER,
} from "../actions/Constants";

import nextId from "react-id-generator";

const initState = {
  users: [],
  user: {
    id: null,
    userName: "",
    gender: "male",
    date: "",
    phoneNumber: "",
    email: "",
    address: "",
    about: "",
    checkbox: false,
  },
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_USER:
      let id = nextId();
      const newAddUsers = [...state.users];
      action.payload.id = id;
      newAddUsers.push(action.payload);
      return {
        ...state,
        users: [...newAddUsers],
      };
    case UPDATE_USER:
      const updateUser = state.users.map((mapUser) => {
        if (mapUser.id === action.payload.id) {
          mapUser = action.payload;
        }
        return mapUser;
      });
      return {
        ...state,
        users: [...updateUser],
      };
    case DELETE_USER:
      const preUser = [...state.users];
      const userAfterDelete = preUser.filter((user) => {
        return user.id !== action.payload;
      });
      return {
        ...state,
        users: [...userAfterDelete],
      };
  }
  return state;
};

export default formReducer;
