import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("subtrack_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email, password) => {
    try {
      const response = await api.post("/auth/login", { email, password });
      
      // Handle different response formats
      const userData = response.data.user || response.data;
      const token = response.data.token || response.data.access_token;
      
      setUser(userData);
      localStorage.setItem("subtrack_user", JSON.stringify(userData));
      localStorage.setItem("subtrack_token", token);
      
      return { success: true };
    } catch (err) {
      console.error("Login error:", err);
      const errorMessage = err.response?.data?.detail || 
                          err.response?.data?.message || 
                          "Login failed";
      return { success: false, error: errorMessage };
    }
  };

  const register = async (email, password, name) => {
    try {
      const response = await api.post("/auth/signup", { 
        email, 
        password, 
        name,
        full_name: name // Some backends expect full_name
      });
      
      // Handle different response formats
      const userData = response.data.user || response.data;
      const token = response.data.token || response.data.access_token;
      
      setUser(userData);
      localStorage.setItem("subtrack_user", JSON.stringify(userData));
      localStorage.setItem("subtrack_token", token);
      
      return { success: true };
    } catch (err) {
      console.error("Register error:", err);
      const errorMessage = err.response?.data?.detail || 
                          err.response?.data?.message || 
                          "Registration failed";
      return { success: false, error: errorMessage };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("subtrack_user");
    localStorage.removeItem("subtrack_token");
  };

  useEffect(() => {
    const token = localStorage.getItem("subtrack_token");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export const useAuth = () => useContext(AuthContext);
