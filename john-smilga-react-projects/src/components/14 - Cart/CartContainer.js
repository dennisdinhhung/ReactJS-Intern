import React from 'react';
import { useGlobalContext } from './context';
import CartItem from './CartItem';

const CartContainer = () => {

    const { loading, cart, total, clearCart, refresh } = useGlobalContext();

    if (cart.length === 0) {
        return (
            <section className="cart" style={{ textAlign: 'center' }}>
                <header>
                    <h2>Your Cart</h2>
                </header>
                <h4 className="empty-cart">is currently empty</h4>
                <button className="btn clear-btn" onClick={refresh}>Refresh</button>
            </section>
        )
    }

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <section className="cart">
            {/* cart header */}
            <header>
                <h2>Your Cart</h2>
            </header>

            {/* cart items */}
            <div>
                {
                    cart.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))
                }
            </div>

            {/* cart footer */}
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>total: <span>${total}</span></h4>
                </div>
                <button className="btn clear-btn" onClick={clearCart}>
                    Clear Cart
                </button>
            </footer>
        </section>
    )
}

export default CartContainer;
