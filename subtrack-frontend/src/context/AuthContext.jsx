import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("subtrack_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/login", credentials);
      setUser(response.data.user);
      localStorage.setItem("subtrack_user", JSON.stringify(response.data.user));
      localStorage.setItem("subtrack_token", response.data.token);
      return { success: true };
    } catch (err) {
      console.error("Login error:", err);
      return { success: false, error: err.response?.data?.detail || "Login failed" };
    }
  };

  const register = async (credentials) => {
    try {
      const response = await axios.post("/api/auth/register", credentials);
      setUser(response.data.user);
      localStorage.setItem("subtrack_user", JSON.stringify(response.data.user));
      localStorage.setItem("subtrack_token", response.data.token);
      return { success: true };
    } catch (err) {
      console.error("Register error:", err);
      return { success: false, error: err.response?.data?.detail || "Registration failed" };
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
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
