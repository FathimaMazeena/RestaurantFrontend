import React, { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom'; 


const MyReservations = () => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
       
        return <Navigate to="/login" replace />;
    }

    return ( 
        <h2>Reservations</h2>
     );
}
 
export default MyReservations;