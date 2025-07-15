import React, { useState, useEffect } from 'react';
import './style.css';

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
        <li><a href="/">Home</a></li>
        <li><a href="/">Business</a></li>
        <li><a href="/">Entertainment</a></li>
        <li><a href="/">General</a></li>
        <li><a href="/">Health</a></li>
        <li><a href="/">Science</a></li>
        <li><a href="/">Sports</a></li>
        <li><a href="/">Technology</a></li>
      </ul>
    </div>
  );
}
