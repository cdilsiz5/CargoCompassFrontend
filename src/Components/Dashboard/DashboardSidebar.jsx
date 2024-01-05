import React, { useState } from 'react';
import './DashboardSidebar.css'; // Ensure CSS file is linked

const DashboardSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfileOptions, setShowProfileOptions] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleProfileOptions = () => {
    setShowProfileOptions(!showProfileOptions);
  };

  return (
    <div>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        ☰
      </button>
      <aside className={`dashboard-sidebar ${showSidebar ? '' : 'collapsed'}`}>
        <div className="sidebar-header">
          <h1>Cargo Compass</h1>
        </div>
        <nav className={`sidebar-nav ${showSidebar ? '' : 'hidden'}`}>
          <a href="#" className="nav-item">
            <span className="nav-icon">📊</span>
            <span className="nav-text">Dashboards</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📦</span>
            <span className="nav-text">My Cargos</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">💰</span>
            <span className="nav-text">Calculate The Price</span>
          </a>
          <a href="#" className="nav-item">
            <span className="nav-icon">📄</span>
            <span className="nav-text">My Offers</span>
          </a>
        </nav>
         
        <div className={`user-bar ${showSidebar ? '' : 'hidden'}`} onClick={toggleProfileOptions}>
            <span className="user-icon">👤</span>
            <span className="user-name">Username</span>
            {showProfileOptions && (
              <div className="profile-dropdown">
                <button href="#" className="user-btn">View Profile</button>
                <button className="logout-btn">Log Out</button>
              </div>
            )}
          </div>
        <div className="sidebar-footer">
          <button className="help-btn">Contact to us</button>
        </div>
        <div className="sidebar-footer">
        <button className="help-btn">Need help?</button>
        </div>
       
      </aside>
    </div>
  );
};

export default DashboardSidebar;
