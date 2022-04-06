import { ACTIONS } from "./actions"

const initalState = {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
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
                
        case ACTIONS.ADD_INFO:
            // set newAddList as the list of users
            const newAddList = [...state.users];

            // create a new id
            let inputId = Math.floor(Math.random()*10000);

            //set the payload's id as id
            action.payload.id = inputId;

            //push the user's info into the list
            newAddList.push(action.payload);

            // put the list into the LocalStorage
            localStorage.setItem('users', JSON.stringify(newAddList));

            //return the OG state
            return {
                user: initalState.user,
                users: [...newAddList]
            }

        case ACTIONS.EDIT_INFO:
            // return the user's info onto the form & set the UPDATE btn to active
            return {
                ...state,
                user: action.payload
            }

        case ACTIONS.DEL_INFO:
            // get the indexDel of the currentUser from the payload
            const indexDel = state.users.indexOf(action.payload);
            //get current state's list of users
            const newDelList = [...state.users];
            
            ///remove the currentUser from the list
            newDelList.splice(indexDel, 1);
            
            //update the localstorage
            localStorage.setItem('users', JSON.stringify(newDelList))
            
            //update the state
            return {
                ...state,
                users: [...newDelList]
            }

            case ACTIONS.UPDATE_INFO:
                const newUpdateList = [...state.users];
                
                //find the index of the OG user using the OG id( since id does not change )
                let rowToUpdate = 0;
                for (let i = 0; i < state.users.length; i++){
                    if(state.users[i].id === action.payload.id) {
                        rowToUpdate = state.users[i]
                    }
                  }
                const indexUpdate = state.users.indexOf(rowToUpdate)

                newUpdateList[indexUpdate] = action.payload;

                localStorage.setItem('users', JSON.stringify(newUpdateList));

                return {
                    user: initalState.user,
                    users: [...newUpdateList]
                }
        default:
            return state
    }   
}

export {initalState}
export default reducer;

