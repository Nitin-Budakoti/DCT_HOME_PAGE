import React from 'react';
import styles from './Iconraw.module.css';
import { FaGitlab, FaClock, FaCube, FaUmbrella, FaMagic, FaLayerGroup, FaGlobe } from 'react-icons/fa';

const IconsRow: React.FC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Trusted by 100K+</span>
      <div className={styles.iconRow}>
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
