import React from "react";
import { Navigate } from "react-router-dom";

import { getLocalStorage } from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  const token = getLocalStorage("access");
  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
