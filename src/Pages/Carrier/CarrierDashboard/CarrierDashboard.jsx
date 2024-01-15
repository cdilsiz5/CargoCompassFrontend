import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CarrierDashboard.css';
import { connect } from 'react-redux';
import { logoutSuccess } from '../../../Redux/authActions';

const CarrierDashboard = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const { isLoggedIn, onLogoutSuccess, username, id } = props;

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
          <h1><Link to='/fdashboard'>Cargo Compass</Link></h1>
        </div>
        <nav className={`sidebar-nav ${showSidebar ? '' : 'hidden'}`}>
          <Link to='/fdashboard' className="nav-item">
            <span className="nav-icon">🏠</span> {/* Home icon */}
            <span className="nav-text">Dashboards</span>
          </Link>
          <Link to='/myquotes' className="nav-item">
            <span className="nav-icon">📝</span> {/* Quotes icon */}
            <span className="nav-text">Quotes</span>
          </Link>
          <Link to='/getquote' className="nav-item">
            <span className="nav-icon">💲</span> {/* Get Quote icon */}
            <span className="nav-text">My Jobs</span>
          </Link>
          <Link to='/myoffers' className="nav-item">
            <span className="nav-icon">📦</span> {/* Offers icon */}
            <span className="nav-text">Invoice</span>
          </Link>
        </nav>

        <div className={`user-bar ${showSidebar ? '' : 'hidden'}`} onClick={toggleProfileOptions}>
          <span className="user-icon">👤</span> {/* User icon */}
          <span className="user-name">{username}</span>
          {showProfileOptions && (
            <div className="profile-dropdown">
              <button className="user-btn"><Link to='/userprofile'>View Profile</Link></button>
              <Link to='/'><button onClick={onLogoutSuccess} className="logout-btn">Log Out</button></Link>
            </div>
          )}
        </div>
        <div className="sidebar-footer">
          <Link to='/help'><button className="help-btn">🆘 Need help?</button></Link>
        </div>
        <div className="sidebar-footer">
          <Link to='/contact'><button className="help-btn">📞 Contact Us</button></Link>
        </div>

      </aside>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    isLoggedIn: store.isLoggedIn,
    username: store.userFirstName,
    id: store.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogoutSuccess: () => {
      dispatch(logoutSuccess());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarrierDashboard);
