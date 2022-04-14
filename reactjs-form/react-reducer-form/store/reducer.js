import {
  SET_CONTACT_INPUT,
  ADD_DATA,
  DELETE_DATA,
  UPDATE_DATA,
} from "./constants";
import { nanoid } from "nanoid";
const initState = {
  contacts: [],
  contact: {
    id: null,
    name: "",
    gender: "male",
    date: "",
    phoneNumber: "",
    email: "",
    checkbox: [],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case SET_CONTACT_INPUT:
      return {
        ...state,
        contact: action.payload,
      };
    case ADD_DATA:
      const newAddContacts = [...state.contacts];
      let id = nanoid();
      action.payload.id = id;
      newAddContacts.push(action.payload);
      return {
        ...state,
        contacts: [...newAddContacts],
      };
    case DELETE_DATA:
      if (action.payload) {
        const contactAfterDelete = state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        });
        return {
          ...state,
          contacts: [...contactAfterDelete],
        };
      }
    // eslint-disable-next-line no-fallthrough
    case UPDATE_DATA:
      const updateContact = state.contacts.map((contact) => {
        if (contact.id === action.payload.id) {
          contact = action.payload;
        }
        return contact;  
        
      });
      

      return {
        ...state,
        contacts: [...updateContact],
      };

    default:
      throw new Error("Invalid Action");
  }
}

export { initState };
export default reducer;
