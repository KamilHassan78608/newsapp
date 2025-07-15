import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './style.css';

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
        <button><a href="/">Login</a></button>
        <button><a href="/">Sign Up</a></button>
      </div>
    </div>
  );
}
