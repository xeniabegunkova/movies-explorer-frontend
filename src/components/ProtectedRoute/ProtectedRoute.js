import React from "react";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component, loggedIn }) => {
  const location = useLocation();
  if (!loggedIn) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return component;
};

export default ProtectedRoute;

//https://stackoverflow.com/questions/62384395/protected-route-with-react-router-v6
