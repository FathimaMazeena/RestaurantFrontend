import React, { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom'; 


const MyOrders = () => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
       
        return <Navigate to="/login" replace />;
    }

    return ( 
        <h2>Orders</h2>
     );
}
 
export default MyOrders;