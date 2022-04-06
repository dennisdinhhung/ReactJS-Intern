import { createStore } from 'redux';
import formReducer from './reducer/formReducer';
import reducers from './reducer/reducers';


export const store = createStore(reducers)