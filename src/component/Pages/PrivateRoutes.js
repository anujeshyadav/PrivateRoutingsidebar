import React from "react";
import HeaderOne from "./headerOne";
import { Navigate } from "react-router-dom";

function PrivateRoutes() {
  let userLogin = true;
  return userLogin ? <HeaderOne /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
