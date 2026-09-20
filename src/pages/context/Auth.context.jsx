//Auth.context
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from '../../config/vite.config';

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const authenticateUser = async () => {
    const tokenInStorage = localStorage.getItem("authToken");
    if (tokenInStorage) {
      try {
        //we make a call to the server and check if the token is valid
        const { data } = await axios.get(`${API_URL}/auth/verify`, {
          headers: { authorization: `Bearer ${tokenInStorage}` },
        });
        setUser(data.currentUser);
        setIsLoading(false);
        setIsLoggedIn(true);
      } catch {
        // Fehlerobjekt bewusst nicht loggen: es enthaelt den Auth-Header
        // mit dem Token.
        setUser(null);
        setIsLoading(false);
        setIsLoggedIn(false);
      }
    } else {
      //we will set the user back null, set isLoading to false, set isLoggedIn to false
      setUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  };

  const logOutUser = () => {
    localStorage.removeItem("authToken");
    setUser(null);
    setIsLoggedIn(false);
    setIsLoading(false);
  };

  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        authenticateUser,
        logOutUser,
        user,
        isLoading,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthContext, AuthContextWrapper };