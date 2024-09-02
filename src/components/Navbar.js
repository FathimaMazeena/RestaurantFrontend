import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useContext } from 'react';
import {AuthContext} from '../contexts/AuthContext';

const Navbar = ()=>{

    const { isLoggedIn, logout } = useContext(AuthContext);

    // useEffect(() => {
    //     const loggedIn = Cookies.get('isLoggedIn');
    //     setIsLoggedIn(!!loggedIn);
    // }, []);

    return(
        

        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <a href="/" class="navbar-brand">
            <img src="/images/restaurant.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
            DIVINE DINING</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navitems"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse justify-content-center" id="navitems">
                <ul className="navbar-nav">
            <li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/menu">Menu</Link></li>

            {!isLoggedIn && (
                 <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            )}
                       
            <li className="nav-item"><Link className="nav-link" to="/about-us">About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>

            {isLoggedIn && (
                <>
                <li className="nav-item"><Link className="nav-link" to="/my-profile">Profile</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/my-cart">Cart</Link></li>
                <li className="nav-item"><Link className="nav-link" onClick={logout}>Logout</Link></li>
                </>
                
            )}
            
            
        </ul>

        </div>
            
      </nav>

    )
}

export default Navbar;

 {/*<header>
            <div className="container">
                <Link to="/">
                <h1>Divine Dining</h1>
                </Link>

                <div className="links">
                    <a href="/">Home</a>
                    <a href="/services">Services</a>
                    <a href="/login">Login</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </header>*/}