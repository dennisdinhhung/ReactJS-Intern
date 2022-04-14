import { SET_CONTACT_INPUT } from "./constants"
import { ADD_DATA } from "./constants"
import { DELETE_DATA } from "./constants"
import { UPDATE_DATA } from "./constants"

export const setContactInput = payload =>({
    type: SET_CONTACT_INPUT,
    payload
})

export const addData = payload =>({
    type: ADD_DATA,
    payload
})

export const deleteData = payload =>({
    type: DELETE_DATA,
    payload
})
export const updateData = payload =>({
    type: UPDATE_DATA,
    payload
})