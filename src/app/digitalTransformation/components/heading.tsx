import React from "react";
import styles from "./heading.module.css";

const Heading: React.FC = () => {
  return (
    <div className={styles.headingContainer}>
      <h1 className={styles.mainTitle}>Digital Marketing</h1>
     
    </div>
  );
};

export default Heading;