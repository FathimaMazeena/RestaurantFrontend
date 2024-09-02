import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';





const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);


    const handleSubmit= async (e)=>{
        e.preventDefault()
        const user={name, username, password, email, address, phone}
        const response= await fetch('/api/register',{
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
            setName('')
            setUsername('')
            setPassword('')
            setEmail('')
            setPhone('')
            setAddress('')
            setError(null)
            console.log('signup success', json)
            navigate('/login');
        }

    }

    return ( 
        <div>
            <h3>REGISTER</h3>
        <form className="create container col-6 p-3 mt-5 mb-5" onSubmit={handleSubmit} >
           

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Name"
                        type="text"
                        onChange={(e)=>setName(e.target.value)}
                        value={name}
                        />

                    </div>
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

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Email"
                        type="email"
                        onChange={(e)=>setEmail(e.target.value)}
                        value={email}
                        />

                    </div>

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Phone"
                        type="text"
                        onChange={(e)=>setPhone(e.target.value)}
                        value={phone}
                        />

                    </div>

                    <div className="form-group">

                        <input
                        className="form-control m-3"
                        placeholder="Address"
                        type="text"
                        onChange={(e)=>setAddress(e.target.value)}
                        value={address}
                        />

                    </div>

                
  
               <button className="btn btn-secondary m-5" type="submit">Register</button>
               {error && <div className="error">{error}</div>}
               <Link to="/login" className="btn bg-transparent m-5">Login</Link>



        </form>
        </div>
     );
}
 
export default Register;