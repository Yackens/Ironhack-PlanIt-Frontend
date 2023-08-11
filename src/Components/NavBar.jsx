import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages/context/Auth.context";


function Navbar() {
  const authContext = useContext(AuthContext);

  const handleLogout = () => {
    // Clear the authToken from localStorage
    localStorage.removeItem("authToken");

    // Reset authentication state
    authContext.setUser(null);
    authContext.setIsLoggedIn(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/categories" className="styled-link">
            <p>Categories</p>
          </Link>
          <Link to="/" onClick={handleLogout} className="styled-link">
            <p>Log out</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
