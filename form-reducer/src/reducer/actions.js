const ACTIONS = {
    SET_STATE_INFO: 'set-info',
    ADD_INFO: 'add-info',
    EDIT_INFO: 'edit-info',
    DEL_INFO: 'del-info',
    UPDATE_INFO: 'update-info'
}

export const setStateInfo = (payload) => ({
    type: ACTIONS.SET_STATE_INFO,
    payload
});

export const addInfo = (payload) => ({
    type: ACTIONS.ADD_INFO,
    payload
})

export const editInfo = (payload) => ({
    type: ACTIONS.EDIT_INFO,
    payload
})

export const delInfo = (payload) => ({
    type: ACTIONS.DEL_INFO,
    payload
})

export const updateInfo = (payload) => ({
    type: ACTIONS.UPDATE_INFO,
    payload
})
export {ACTIONS}