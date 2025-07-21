import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">NewsX.</div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>

      <div className="nav-buttons">
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/signup">SignUp</Link></button>
      </div>
    </div>
  );
}
