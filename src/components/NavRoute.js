import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Products from "./Products";
import Ecommerce from "./Ecommerce";
import Invoice from "./Invoice";

const ProtectiveRoute = (props) => {
  const token = localStorage.getItem("ecommerce-token");
  const hasLoggedIn = token != "";
  if (hasLoggedIn) return props.children;
  return <Navigate to="/Login" />;
};
const UnProtectedRoute = (props) => {
  const token = localStorage.getItem("ecommerce-token");
  const hasLoggedIn = token != "";
  if (hasLoggedIn) {
    return <Navigate to="/Products" />;
  }
  return props.children;
};

function NavRoute() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Ecommerce />} />
          <Route path="/Products/Invoice" element={<Invoice />} />
          <Route
            path="/Products"
            element={
              <ProtectiveRoute>
                <Products />
              </ProtectiveRoute>
            }
          />
          <Route
            path="/Login"
            element={
              <UnProtectedRoute>
                <Login />
              </UnProtectedRoute>
            }
          />
          <Route
            path="/SignUp"
            element={
              <UnProtectedRoute>
                <SignUp />
              </UnProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavRoute;
