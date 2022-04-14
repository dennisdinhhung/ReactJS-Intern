import { combineReducers } from "redux";
import rootReducer from "./reducers";

const reducers = combineReducers({
    form: rootReducer
})

export default reducers;