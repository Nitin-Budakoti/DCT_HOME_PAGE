import React from "react";
import styles from "./ProductPortfolio.module.css";
import { FaLaptop, FaGraduationCap, FaShoppingCart } from "react-icons/fa";

const ProductPortfolio: React.FC = () => {
  return (
    <div className={styles.portfolioContainer}>
      {/* Left Section: Cards */}
      <div className={styles.cardsSection}>
        <div className={styles.card}>
          <FaLaptop className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Healthcare Product Name</h3>
        </div>
        <div className={styles.card}>
          <FaGraduationCap className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Education Product Name</h3>
        </div>
        <div className={styles.card}>
          <FaShoppingCart className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Retail Product Name</h3>
        </div>
      </div>

      {/* Right Section: Text and Button */}
      <div className={styles.textSection}>
        <h3 className={styles.sectionTitle}>OUR PRODUCT PORTFOLIO</h3>
        <h2 className={styles.sectionSubtitle}>
          Redefine the way you do business with{" "}
          <span className={styles.highlight}>Zenoheal Solutions</span>
        </h2>
        <p className={styles.sectionDescription}>
          Our purpose is to deliver excellence in service and execution.
        </p>
        <button className={styles.learnMoreButton}>
          LEARN MORE <span className={styles.arrow}>→</span>
        </button>
      </div>
    </div>
  );
};

export default ProductPortfolio;
