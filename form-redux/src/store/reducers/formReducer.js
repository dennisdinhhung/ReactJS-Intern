import {
  SET_USER,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../actions/Constants";

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

const id = Math.floor(Math.random() * 10000);

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_USER:
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
