import React, { useState, useEffect, createContext } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = Cookies.get('isLoggedIn');
        setIsLoggedIn(!!loggedIn);
    }, []);

    const login = () => {
        Cookies.set('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };

    // const logout = () => {
    //     Cookies.remove('isLoggedIn');
    //     //Cookies.remove('connect.sid');
    //     setIsLoggedIn(false);
    // };

    const logout = async () => {
        try {
            // Make a request to the backend logout API
            const response = await fetch('/api/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include', // Include cookies with the request
            });
    
            if (response.ok) {
                Cookies.remove('isLoggedIn'); // Remove cookie on the frontend
                setIsLoggedIn(false); // Update state
                // Optionally redirect to the login page or home page
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('An error occurred while logging out:', error);
        }
    };
    

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
