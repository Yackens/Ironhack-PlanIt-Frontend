import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../config/vite.config";
import NavBar from '../Components/NavBar';
import { Link } from "react-router-dom";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const nav = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/signup`, {
        email,
        password,
        username,
      });
      console.log("here is the signup response", res);
      nav("/");
    } catch (err) {
      console.log(err);
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
     
      <h2>Create a <span>free</span> account</h2>
      <form className="signFlex"  onSubmit={handleSignup}>
        <label>
          Username:
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
          Email:
          <input className="inputFlex"
            type="email"
            value={email}
            required
            onChange={(event) => {
              setEmail(event.target.value);
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
        <button className="btn1" type="submit">Sign up</button>
      </form>
      <p className='space'>Allready have an account?</p>
      <Link to="/">
        <button className="btnSignUp">Log in</button>
      </Link>
    </div>
  );
}

export default Signup;