import { SET_UERS, ADD_UERS, DELETE_UERS, UPDATE_UERS } from './Contants'

export const set_users = payload => {
    return {
        type: SET_UERS,
        payload
    }
}
export const add_users = payload => {
    return {
        type: ADD_UERS,
        payload
    }
}
export const delete_users = payload => {
    return {
        type: DELETE_UERS,
        payload
    }
}
export const update_users = payload => {
    return {
        type: UPDATE_UERS,
        payload
    }
}
