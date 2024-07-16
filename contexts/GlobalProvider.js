import React, { createContext, useContext, useEffect, useState } from "react";
import AuthService from "../services/auth.service";
const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    AuthService.getUser()
      .then((response) => {
        if (response) {
          setIsLogged(true);
          setUser(response.data);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ isLogged, setIsLogged, user, setUser, loading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
