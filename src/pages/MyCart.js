import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { CartContext } from '../contexts/CartContext'; // Import CartContext
import { Navigate } from 'react-router-dom'; 

const MyCart = () => {
    //const { cartItems } = useContext(CartContext); // Get cart items from CartContext

    const { isLoggedIn } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const response = await fetch('/api/cart', {
                    method: 'GET',
                    credentials: 'include', // Important to include cookies with the request
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch cart');
                }

                const data = await response.json();
                setCartItems(data.cart.cartItems || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (isLoggedIn) {
            fetchCart();
        } else {
            setError('You need to log in to view your cart');
            setLoading(false);
        }
    }, [isLoggedIn]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>My Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.productId._id} className="cart-item">
                            <img src={item.productId.image} alt={item.productId.name} style={{ width: '100px' }} />
                            <div>
                                <h5>{item.productId.name}</h5>
                                <p>Price: Rs. {item.productId.price}</p>
                                <p>Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item._id} className="cart-item">
                            <img src={item.image} alt={item.name} style={{ width: '100px' }} />
                            <div>
                                <h5>{item.name}</h5>
                                <p>Price: Rs. {item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )} */}
        </div>
    );
};

export default MyCart;
