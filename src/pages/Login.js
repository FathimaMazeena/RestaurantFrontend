import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
//import Cookies from 'js-cookie';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';








const Login = () => {

    //const { setIsLoggedIn } = useContext(AuthContext);
    //const { isLoggedIn, login } = useContext(AuthContext)
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);


    const handleLogin= async (e)=>{
        e.preventDefault()
        const user={username, password}
        const response= await fetch('/api/login',{
            method:'POST',
            body: JSON.stringify(user),
            headers:{
                'Content-Type':"application/json"
            }


        })

        const json= await response.json();

        if(!response.ok){
            setError(json.error)
        }

        if(response.ok){
            //Cookies.set('isLoggedIn', 'true'); // Set the cookie
            //setIsLoggedIn(true); // Update state
            login();
            setUsername('')
            setPassword('')
            setError(null)
            console.log('login success', json)
            navigate('/');
        }

    }

    return ( 
        <div>
            <h3>LOGIN</h3>
        <form className="create container col-6 p-3 mt-5 mb-5" onSubmit={handleLogin} >
           

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Username"
                        type="text"
                        onChange={(e)=>setUsername(e.target.value)}
                        value={username}
                        />

                    </div>

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Password"
                        type="password"
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                        />
                    </div>

                
  
               <button className="btn btn-secondary m-5" type="submit">Login</button>
               {error && <div className="error">{error}</div>}
               <Link to="/register" className="btn bg-transparent m-5">Register</Link>



        </form>
        </div>
     );
}
 
export default Login;