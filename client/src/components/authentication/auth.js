import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // Your authentication logic
  const authenticate = async () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      const url = process.env.REACT_APP_URL + 'api/verify';
      const data = storedToken;
      const response = await axios.get(url,data);
console.log(response)
      setIsAuthenticated(true);
      setToken(storedToken);
    } else {
      setIsAuthenticated(false);
      setToken(null);
    }
  };

  useEffect(() => {
    authenticate();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token }}>
      {children}
    </AuthContext.Provider>
  );
};
