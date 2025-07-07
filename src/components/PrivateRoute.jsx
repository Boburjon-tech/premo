// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Yuklanmoqda...</div>; 
  }

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
