import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRIES_BY_REGION, GET_COUNTRIES_BY_NAME, GET_LOADING } from '../Reducer/types'

const countriesReducerInitialState = {
    countries: [],
    country: null,
    loading: true,
}

const CountriesReducer = (state = countriesReducerInitialState, { type, payload }) => {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                country: payload
            }
        case GET_COUNTRIES_BY_REGION:
            return {
                ...state,
                countries: payload
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: payload
            }
        case GET_LOADING:
            return {
                ...state,
                loading: payload
            }

        default:
            return state
    }
}
export default CountriesReducer
