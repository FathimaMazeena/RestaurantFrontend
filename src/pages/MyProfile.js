import React, { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom'; 
import ProfileNavbar from '../components/ProfileNavbar';


const MyProfile = () => {
    const { isLoggedIn } = useContext(AuthContext);

    if (!isLoggedIn) {
       
        return <Navigate to="/login" replace />;
    }

    return ( 
        <>
        <h2>Profile</h2>
        <ProfileNavbar/>
        </>
        
     );
}
 
export default MyProfile;