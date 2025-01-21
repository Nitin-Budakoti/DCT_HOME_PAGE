import React from 'react';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span>&#x27A4;</span> {/* Placeholder logo (Arrow symbol) */}
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#products">Products</a></li>
      </ul>
      <div className={styles.contactUs}>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default NavBar;
