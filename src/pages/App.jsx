// import depedencies
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// import pages
import AuthPage from "./AuthPage";
import NewOrderPage from "./NewOrderPage";
import OrderHistoryPage from "./OrderHistoryPage";
import SignUpForm from "../components/SignUpForm";

import NavBar from "../components/NavBar";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
     
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage />
      )}
    </>
  );
}

export default App;
