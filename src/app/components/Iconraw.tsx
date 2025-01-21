import React from 'react';
import styles from './Iconraw.module.css';
import { FaGitlab, FaClock, FaCube, FaUmbrella, FaMagic, FaLayerGroup, FaGlobe } from 'react-icons/fa'; // Example icons from react-icons

const IconsRow: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Trusted by 100K+</span>
      <div className={styles.iconRow}>
        {/* Replace these icons with your desired ones */}
        <FaMagic className={styles.icon} />
        <FaUmbrella className={styles.icon} />
        <FaCube className={styles.icon} />
        <FaGlobe className={styles.icon} />
        <FaLayerGroup className={styles.icon} />
        <FaClock className={styles.icon} />
        <FaGitlab className={styles.icon} />
      </div>
    </div>
  );
};

export default IconsRow;
