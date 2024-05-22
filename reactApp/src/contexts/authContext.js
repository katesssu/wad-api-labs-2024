import React, { useState, createContext, useEffect } from "react";
import { login, signup } from "../api/movies-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(!!existingToken);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  // Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  };

  const authenticate = async (username, password) => {
    try {
      const result = await login(username, password);
      if (result.token) {
        setToken(result.token);
        setIsAuthenticated(true);
        setUserName(username);
      }
    } catch (error) {
      console.error("Authentication failed:", error);
      // Optionally, handle the error state or provide feedback to the user
    }
  };

  const register = async (username, password) => {
    try {
      const result = await signup(username, password);
      return result.code === 201;
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    setAuthToken(null);
    setIsAuthenticated(false);
    setUserName("");
  };

  useEffect(() => {
    if (authToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [authToken]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
