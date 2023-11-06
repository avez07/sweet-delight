import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);

  // Your authentication logic
  const authenticate = () => {
    const storedToken = localStorage.getItem('token');
    if (storedToken === '1234') {
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
