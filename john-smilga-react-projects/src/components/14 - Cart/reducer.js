const reducer = (state, action) => {
    switch (action.type) {

        case 'LOADING':
            return {
                ...state,
                loading: true
            }

        case 'DISPLAY_ITEMS':
            return {
                ...state,
                cart: action.payload,
                loading: false
            }

        case 'GET_TOTALS':
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem;
                const itemTotal = price * amount;

                cartTotal.total += itemTotal;
                cartTotal.amount += amount;
                return cartTotal;
            }, { total: 0, amount: 0 });
            total = parseFloat(total.toFixed(2));
            return {
                ...state,
                total,
                amount
            }

        case 'CLEAR_CART':
            return {
                ...state,
                cart: []
            }

        case 'REMOVE':
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
            }

        case 'INCREASE':
            let tmpIncCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            })
            return {
                ...state,
                cart: tmpIncCart
            }

        case 'DECREASE':
            let tmpDecCart = state.cart.map((cartItem) => {
                if (cartItem.id === action.payload) {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
            tmpDecCart = tmpDecCart.filter(item => item.amount !== 0);
            return {
                ...state,
                cart: tmpDecCart
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer;
