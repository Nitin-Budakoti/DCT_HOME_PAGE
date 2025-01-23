import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
  
      <div className={styles.container}>
        {/* Reach Us Section */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Reach us</h3>
          <p className={styles.item}>
            <span className={styles.icon}>📞</span> (+1) 510-945-8169
          </p>
          <p className={styles.item}>
            <span className={styles.icon}>📧</span> info@zenohealv.co
          </p>
          <p className={styles.item}>
            <span className={styles.icon}>📍</span> 300 S Main Street, Suite
            212 Holly Springs, NC 27540
          </p>
        </div>

        {/* Company Section */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Company</h3>
          <p className={styles.item}>About</p>
          <p className={styles.item}>Contact</p>
          <p className={styles.item}>Blogs</p>
        </div>

        {/* Legal Section */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Legal</h3>
          <p className={styles.item}>Privacy Policy</p>
          <p className={styles.item}>Terms & Services</p>
          <p className={styles.item}>Terms of Use</p>
        </div>

        {/* Services Section */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Services</h3>
          <p className={styles.item}>Service Name 1</p>
          <p className={styles.item}>Service Name 2</p>
          <p className={styles.item}>Service Name 3</p>
        </div>

        {/* Products Section */}
        <div className={styles.column}>
          <h3 className={styles.heading}>Products</h3>
          <p className={styles.item}>Product Name 1</p>
          <p className={styles.item}>Product Name 2</p>
          <p className={styles.item}>Product Name 3</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
