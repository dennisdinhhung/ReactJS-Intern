import { ACTIONS } from './actions'

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

  
  const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTIONS.SET_CONTACT_INPUT:
          return {
            ...state,
            contact: action.payload,
          };
        case ACTIONS.ADD_DATA:
          const newAddContacts = [...state.contacts];
          let id = nanoid();
          action.payload.id = id;
          newAddContacts.push(action.payload);
          return {
            ...state,
            contacts: [...newAddContacts],
          };
        case ACTIONS.DELETE_DATA:
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
        case ACTIONS.UPDATE_DATA:
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
          return state
      }
  };
  
  export default rootReducer