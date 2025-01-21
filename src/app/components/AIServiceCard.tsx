import React from "react";
import styles from "./AIServiceCard.module.css";
import { FaChartBar, FaTools, FaBullhorn } from "react-icons/fa";

const AIServiceCard: React.FC = () => {
  return (
    <div className={styles.serviceContainer}>
      {/* Left Section: Text */}
      <div className={styles.textSection}>
        <h3 className={styles.sectionTitle}>OUR AI SERVICES</h3>
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

      {/* Right Section: Cards */}
      <div className={styles.cardsSection}>
        <div className={styles.card}>
          <FaChartBar className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Digital Transformation</h3>
        </div>
        <div className={styles.card}>
          <FaTools className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Enterprise Solutions</h3>
        </div>
        <div className={styles.card}>
          <FaBullhorn className={styles.cardIcon} />
          <h3 className={styles.cardTitle}>Digital Marketing</h3>
        </div>
      </div>
    </div>
  );
};

export default AIServiceCard;
