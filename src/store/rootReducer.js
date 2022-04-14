import formReducer from "./reducers/formReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  form: formReducer,
});

export default rootReducer;
