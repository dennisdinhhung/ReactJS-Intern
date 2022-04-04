import React, { createContext, useContext, useEffect, useRef, useState } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [cocktails, setCocktails] = useState([]);
    const [formValues, setFormValues] = useState({
        searchTerm: '',
    });

    const fetchDrinks = async () => {
        setLoading(true);

        try {
            const response = await fetch(`${url}${formValues.searchTerm}`);
            const data = await response.json();
            const { drinks } = data;

            if (drinks) {
                const newCocktails = drinks.map(item => {
                    return {
                        id: item.idDrink,
                        name: item.strDrink,
                        image: item.strDrinkThumb,
                        info: item.strAlcoholic,
                        glass: item.strGlass,
                    };
                })
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchDrinks();
    }, [formValues]);

    return (
        <AppContext.Provider value={{
            loading,
            cocktails,
            setFormValues,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
