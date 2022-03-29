import { SET_USER, ADD_USER, DELETE_USER, UPDATE_USER } from "./constants";

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

function reducer(state, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ADD_USER:
      const newAddUsers = [...state.users];
      let id = Math.floor(Math.random() * 1000);
      action.payload.id = id;
      newAddUsers.push(action.payload);
      return {
        ...state,
        users: [...newAddUsers],
      };
    case DELETE_USER:
      if (action.payload) {
        const userAfterDelete = state.users.filter((user) => {
          return user.id !== action.payload;
        });
        return {
          ...state,
          users: [...userAfterDelete],
        };
      }
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
    default:
      throw new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
