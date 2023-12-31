import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
   <header className="header" data-header>
  <div  className="container">
    <h1>
      <Link  to="/home" className="logo">Cargo Compass</Link>
    </h1>
    <nav className="navbar" data-navbar>
      <div className="navbar-top">
        <Link to="/home"  className="logo">Cargo Compass</Link>
        <button className="nav-close-btn" aria-label="Clsoe menu" data-nav-toggler>
        </button>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/home" className="navbar-link" data-nav-link>
            <span>Home</span>
          </Link>
        </li>
        <li className="navbar-item">
          <a to="/about" className="navbar-link" data-nav-link>
            <span>About</span>
          </a>
        </li>
        <li className="navbar-item">
          <Link to="/service" className="navbar-link" data-nav-link>
            <span>Service</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog" className="navbar-link" data-nav-link>
            <span>Blog</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact" className="navbar-link" data-nav-link>
            <span>Contact</span>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link" data-nav-link>
            <button className="login-button">Giriş Yap</button>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/signup" className="navbar-link" data-nav-link>
            <button className="register-button">Kaydol</button>
          </Link>
        </li>
      </ul>
    </nav>
    <div className="header-contact">
      <div>
        <p className="contact-label">ATÜ</p>
        <Link to="tel:12345678910" className="contact-number">542 295 6686</Link>
      </div>
      <div className="contact-icon">
      <FontAwesomeIcon icon={faPhone} />
      </div>
    </div>
    <button className="nav-open-btn" aria-label="Open menu" data-nav-toggler>
      <ion-icon name="menu-outline" />
    </button>
    <div className="overlay" data-nav-toggler data-overlay />
  </div>
</header>

  );
};
export default Navbar;
