// src/MaintenancePage.js
import React from "react";
import "../styles/main.css"; // We'll create this CSS file next

const MaintenancePage = () => {
  return (
    <div className="maintenance-container">
      <div className="gear gear-one">⚙️</div>
      <div className="gear gear-two">⚙️</div>
      <h1 className="maintenance-title">Under Maintenance</h1>
      <p className="maintenance-message">
        We're busy improving our website for you. We'll be back online shortly!
      </p>
      <div className="loader"></div>
    </div>
  );
};

export default MaintenancePage;
