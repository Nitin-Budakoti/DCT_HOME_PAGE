'use client'; // Make sure this is included for client-side rendering

import React, { useState } from 'react';
import styles from './NavBar.module.css'; // Import the CSS module

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.active : ''}`}>
      <div className={styles.logo}>
        <span>&#x27A4;</span> {/* Arrow symbol logo */}
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li> {/* Correctly positioned */}
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
        {/* Removed Contact Us from mobile view */}
      </ul>
      <div className={styles.contactUs}>
        <a href="#contact">Contact Us</a> {/* Placed outside the mobile menu */}
      </div>
    </nav>
  );
};

export default NavBar;
