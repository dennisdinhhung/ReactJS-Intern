import { ACTIONS } from "./actions"

const initalState = {
   user: {
        id: '',
        user_name: '',
        phone_no: '',
        address: '',
        radio: 'male',
        email: '',
        dob: '',
        checkbox: [],
        desc:''
   }
}


const reducer = (state, action) => {
    switch (action.type){
        case ACTIONS.SET_STATE_INFO:
            return {
                ...state,
                user: action.payload}
        default:
            return state
    }   
}

export {initalState}
export default reducer;

