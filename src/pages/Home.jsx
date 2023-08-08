//Home.jsx

import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './context/Auth.context';
import { API_URL } from '../config/vite.config';


function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  
   //this is how we grab things from the context
   const authContext = useContext(AuthContext)
   const { authenticateUser } = authContext;
   const nav = useNavigate();
   const handleLogin = async (e) => {
     e.preventDefault();
     try {
       const { data } = await axios.post(`${API_URL}/auth/login`, {
         username,
         password,
       });
       console.log("here is the Login response", data);
       localStorage.setItem("authToken", data.token);
       
       await authenticateUser();
       nav("/categories");
     } catch (err) {
       console.log(err);
       setErrorMessage(err.response.data.errorMessage);
     }
   };

  return (
   <div>
    
        <div id="logo">
            <Link to='/'>
                <p>PlanIt</p>
            </Link>
         </div>
    
// needs to be added
    <h1>Hey USER Just plan it!</h1>

    <form onSubmit={handleLogin}>
    <label>
      Username
      <input
            type="text"
            value={username}
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
    </label>
    </form>

    <form>
    <label>
          Password:
          <input
            type="password"
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>
    </form>

    <button type="submit">LogIn</button>
    <Link to="/signup">
        <button>SignUp</button>
      </Link>
    </div> 
  )

}

export default Home