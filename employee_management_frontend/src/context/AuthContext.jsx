import React, { createContext, useState, useContext } from "react";

// Create context
export const AuthContext = createContext();

// AuthProvider wrapper
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // login function
  const login = (userData) => {
    setUser(userData);
  };

  // logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy usage
export const useAuth = () => {
  return useContext(AuthContext);
};
