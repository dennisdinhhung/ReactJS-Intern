const ACTIONS = {
    SET_CONTACT_INPUT: 'set_contact_input',
    ADD_DATA: 'add-data',
    DELETE_DATA : "delete_data",
    UPDATE_DATA : "update_data",
    
}

export const setContactInput = payload =>({
    type: ACTIONS.SET_CONTACT_INPUT,
    payload
})

export const addData = payload =>({
    type: ACTIONS.ADD_DATA,
    payload
})

export const deleteData = payload =>({
    type: ACTIONS.DELETE_DATA,
    payload
})
export const updateData = payload =>({
    type: ACTIONS.UPDATE_DATA,
    payload
})

export {ACTIONS}