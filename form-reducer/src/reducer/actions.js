const ACTIONS = {
    SET_STATE_INFO: 'set-info'
}

export const setStateInfo = (payload) => ({
    type: ACTIONS.SET_STATE_INFO,
    payload
});

export {ACTIONS}