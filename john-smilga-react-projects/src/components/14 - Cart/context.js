import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = createContext();

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = () => {
        dispatch({ type: 'LOADING' });
        fetch(url)
            .then(response => response.json())
            .then((payload) => {
                dispatch({ type: 'DISPLAY_ITEMS', payload })
            })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const remove = (id) => {
        dispatch({ type: 'REMOVE', payload: id })
    }

    const increase = (id) => {
        dispatch({ type: 'INCREASE', payload: id })
    }

    const decrease = (id) => {
        dispatch({ type: 'DECREASE', payload: id })
    }

    const refresh = () => {
        fetchData();
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.cart])

    return (
        <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease, refresh }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };
