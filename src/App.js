// src/App.js
import React from "react";
import MaintenancePage from "./pages/MaintenancePage";

function App() {
  const isUnderMaintenance = true; // Set to true when you want to show the maintenance page

  return (
    <div>
      {isUnderMaintenance ? (
        <MaintenancePage />
      ) : (
        <h1>Welcome to our website!</h1>
      )}
    </div>
  );
}

export default App;
