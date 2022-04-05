import { SET_UERS, ADD_UERS, DELETE_UERS, UPDATE_UERS } from './Contants'


const initialState = {
    user: {
        id: 1,
        name: '',
        address: '',
        gmail: '',
        gender: 'male',
        isEdit: false,
    },
    users: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_UERS:
            // return {
            //     ...state,
            //     user: payload
            // }
            if (state.user.isEdit === false) {
                return {
                    ...state,
                    user: payload
                }
            } else if (state.user.isEdit === true) {
                const newDataList = state.users.map((user) => {
                    if (user.id === payload.id) {
                        user = payload
                    }
                    return user
                })
                return {
                    ...state,
                    users: [...newDataList]
                }
            }
        case ADD_UERS:
            return {
                ...state,
                users: [...state.users, payload]
            }
        case DELETE_UERS:
            const newUsers = [...state.users]
            const newDeleteUsers = newUsers.filter((item) => item.id !== payload.id)
            return {
                ...state,
                users: newDeleteUsers
            }
        default:
            return state
    }
}
