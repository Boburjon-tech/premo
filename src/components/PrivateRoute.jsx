// src/components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div className="text-center mt-20 text-white">Yuklanmoqda...</div>;
  }

  return currentUser ? children : <Navigate to="/welcome" replace />;
};

export default PrivateRoute;
