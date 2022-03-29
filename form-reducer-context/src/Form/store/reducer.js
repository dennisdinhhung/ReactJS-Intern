import { SET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from "./constants";

const initState = {
  users: [],
  user: {
    id: null,
    userName: "",
    gender: "Male",
    date: "",
    phoneNumber: "",
    email: "",
    address: "",
    about: "",
    checkbox: false,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_USER:
      const newAddUsers = [...state.users];
      let id = Math.floor(Math.random() * 10000);
      action.payload.id = id;
      newAddUsers.push(action.payload);
      console.log(newAddUsers);
      return {
        ...state,
        users: [...newAddUsers],
      };
    default:
      throw new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
