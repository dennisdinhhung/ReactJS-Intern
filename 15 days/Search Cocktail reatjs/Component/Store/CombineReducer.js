import { combineReducers } from 'redux'
import subReducer from './Reducer'

const RootReducer = combineReducers({
    Cocktail: subReducer
})
export default RootReducer