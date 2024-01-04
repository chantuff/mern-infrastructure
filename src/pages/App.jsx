// import depedencies
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "./AuthPage";
import NewOrderPage from "./NewOrderPage";
import OrderHistoryPage from "./OrderHistoryPage";

import "./App.css";

function App() {
  const [user, setUser] = useState(1);

  return (
    <>
     
      {user ? (
        <>
        Hello
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
