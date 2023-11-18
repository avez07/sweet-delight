import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [login_id, setLogin_id] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  // Your authentication logic
  const authenticate = async () => {
    
    const storedToken =  localStorage.getItem("token");
    if (storedToken) {
      const url = process.env.REACT_APP_URL + "api/verify";
      const data = storedToken;
      const header = {
        Authorization: data,
      };
      const response = await axios.get(url, { headers: header });
      // console.log(response)
      if (response.status === 200) {
        const { name, email, role, login_id } = response.data;
        setName(name);
        setEmail(email);
        setIsAuthenticated(role);
        setLogin_id(login_id);
      } else {
        setIsAuthenticated(3);
      }
    } else {
     
      setIsAuthenticated(null);
      setName(null);
      setEmail(null);
      setIsAuthenticated(0);
      setLogin_id(null);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login_id, name, email }}>
      {children}
    </AuthContext.Provider>
  );
};
