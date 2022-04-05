import { combineReducers } from 'redux'

import FormRedeucer from './FormRedeucer'

const RootReducer = combineReducers({
    Form: FormRedeucer
})

export default RootReducer