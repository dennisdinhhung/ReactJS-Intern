import axios from 'axios'
import { GET_COUNTRIES, GET_COUNTRY_BY_NAME, GET_COUNTRIES_BY_REGION, GET_COUNTRIES_BY_NAME, GET_LOADING } from '../Reducer/types'

const countriespi = 'https://restcountries.com/v2/all'
console.log("okokokok");

export const getCountries = () => async (dispatch) => {
    dispatch({ type: GET_LOADING, payload: true })
    await axios.get(countriespi)
        .then(res => {
            console.log("ress...", res);
            const countries = res.data.map((country) => {
                return (
                    {
                        name: country.name,
                        capital: country.capital,
                        population: new Intl.NumberFormat().format(country.population),
                        region: country.region,
                        flag: country.flag,
                    }
                )
            })
            dispatch({ type: GET_LOADING, payload: false })
            dispatch({ type: GET_COUNTRIES, payload: countries })
        })
        .catch((err) => { console.log('get API faile ', err); })
}

export const getCountryByName = (name) => async (dispatch) => {
    dispatch({ type: GET_LOADING, payload: true })
    await axios.get(`https://restcountries.com/v2/name/${name}`)
        .then(res => {
            dispatch({ type: GET_LOADING, payload: false })
            dispatch({ type: GET_COUNTRY_BY_NAME, payload: res.data[0] })
        })
        .catch((err) => console.log("loi cmnr getName, ", err))
}

export const getCountryByRegion = (regionName) => async (dispatch) => {
    dispatch({ type: GET_LOADING, payload: true })
    await axios.get(`https://restcountries.com/v2/region/${regionName}`)
        .then(res => {
            const countries = res.data.map((country) => {
                return (
                    {
                        name: country.name,
                        capital: country.capital,
                        population: new Intl.NumberFormat().format(country.population),
                        region: country.region,
                        flag: country.flag,
                    }
                )
            })
            dispatch({ type: GET_LOADING, payload: false })
            dispatch({ type: GET_COUNTRIES_BY_REGION, payload: countries })
        })
        .catch(err => console.log(err))
}

export const getCountriesByName = (name) => async (dispatch) => {
    dispatch({ type: GET_LOADING, payload: true })
    await axios.get(`https://restcountries.com/v2/name/${name}`)
        .then(res => {
            const countries = res.data.map((country) => {
                return (
                    {
                        name: country.name,
                        capital: country.capital,
                        population: new Intl.NumberFormat().format(country.population),
                        region: country.region,
                        flag: country.flag,
                    }
                )
            })
            dispatch({ type: GET_LOADING, payload: false })
            dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countries })
        })
        .catch(err => console.log(err))
}