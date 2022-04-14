import { GET_COCKTAILS, GET_COCKTAILS_BY_NAME } from './Contants';
import axios from 'axios'


const cocktailApi = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const getCocktails = () => async (dispatch) => {
    await axios.get(cocktailApi)
        .then(res => {
            console.log("first data...", res);
            const cocktails = res.data.drinks.map((cocktail) => {
                return (
                    {
                        id: cocktail.idDrink,
                        name: cocktail.strDrink,
                        glass: cocktail.strGlass,
                        category: cocktail.strCategory,
                        intructions: cocktail.strInstructions,
                        ingrediants: cocktail.strIngredient1,
                        img: cocktail.strDrinkThumb,
                    }
                )
            })
            dispatch({ type: GET_COCKTAILS, payload: cocktails })
        })
        .catch((err) => {
            console.log("error API", err);
        })
}

export const getCocktailsByName = (id) => async (dispatch) => {
    await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => {
            console.log("datadetail...", res.data.drinks[0]);
            dispatch({ type: GET_COCKTAILS_BY_NAME, payload: res.data.drinks[0] })
        })
        .catch((err) => {
            console.log("error API", err);
        })
}

