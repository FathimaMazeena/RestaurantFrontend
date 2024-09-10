import React, { createContext, useState, useContext } from 'react';
import AuthProvider from './AuthContext';
import { AuthContext } from '../contexts/AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = async (product) => {
        if (!isLoggedIn) {
            setCartItems([...cartItems, product]);
            alert("Successfully added item to the cart");
        }

        try {
            const response = await fetch('api/cart', {
                method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product._id,
                    quantity: 1

                }),
            });

            console.log(product._id);

            if (!response.ok) {
                throw new Error('Failed to add item to cart');
            }

        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert("Failed to add item to the cart.");
        }
        

    };

    const removeFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;