//Home.jsx
import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from './context/Auth.context';
import { API_URL } from '../config/vite.config';
import NavBar from '../Components/NavBar';

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
    
    <div className='header'>
     <div className="logo">
                <p>Plan<span>It</span></p>
         </div>
         <div className="hide">
         <NavBar />
         </div>
      </div>
         
    
    
/
    <h1>Just plan <span>it!</span></h1>

    <form className="signFlex" onSubmit={handleLogin}>
    <label>
      Username
      <input className="inputFlex"
            type="text"
            value={username}
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
    </label>

    <label>
          Password:
          <input className="inputFlex"
            type="password"
            value={password}
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </label>

    <button className="btn1" type="submit">LogIn</button>
    </form>

    <Link to="/signup">
        <button className="btnSignUp">SignUp</button>
      </Link>
    </div> 
  )

}

export default Home