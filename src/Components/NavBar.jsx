import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../pages/context/Auth.context";

function Navbar() {
  const { logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/categories" className="styled-link">
            <p>Categories</p>
          </Link>
          <Link to="/" onClick={logOutUser} className="styled-link">
            <p>Log out</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
