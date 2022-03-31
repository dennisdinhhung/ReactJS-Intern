import React from 'react';
import './Cart.css';
import CartContainer from './CartContainer';
import { AppProvider } from './context';
import Navbar from './Navbar';

function Cart() {

    return (
        <AppProvider>
            <main>
                <Navbar />
                <CartContainer />
            </main>
        </AppProvider>
    );
}

export default Cart;