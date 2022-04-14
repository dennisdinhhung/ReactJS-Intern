import { GET_COCKTAILS, GET_COCKTAILS_BY_NAME } from './Contants'

const initialState = {
    cocktails: [],
    cocktail: null,
    loading: true,
}

const subReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_COCKTAILS:
            return {
                ...state,
                cocktails: payload
            }
        case GET_COCKTAILS_BY_NAME:
            return {
                ...state,
                cocktail: payload
            }

        default:
            return state
    }
}
export default subReducer