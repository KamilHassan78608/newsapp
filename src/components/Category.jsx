import React, { useState, useEffect } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default function Category() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  // Automatically detect screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      if (window.innerWidth > 600) {
        setIsOpen(false); // reset dropdown on large screens
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="category">
      {isMobile && (
        <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰ Categories
        </button>
      )}

      <ul className={`category-list ${isMobile ? (isOpen ? 'open' : '') : ''}`}>
        <li><Link to="/general">Home</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
        <li><Link to="/health">Health</Link></li>
        <li><Link to="/science">Science</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/technology">Technology</Link></li>
      </ul>
    </div>
  );
}
