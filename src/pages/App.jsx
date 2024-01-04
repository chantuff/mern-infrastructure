import React, { useState } from "react";
import AuthPage from "./AuthPage";
import "./App.css";
import NewOrderPage from "./NewOrderPage";
import OrderHistoryPage from "./OrderHistoryPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      Hello
      {user ? (
        <>
          <NewOrderPage />
        </>
      ) : (
        <AuthPage />
      )}
    </>
  );
}

export default App;
