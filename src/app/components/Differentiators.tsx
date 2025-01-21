import React from "react";
import styles from "./Differentiators.module.css";
import { FaChartBar } from "react-icons/fa";

const differentiatorData = [
  {
    title: "High Skilled Workforce",
    description: "75+ Man-years experience in Technology in various geographies",
  },
  {
    title: "Intellectual Property",
    description: "Access to proprietary technology & Value Chain",
  },
  {
    title: "Data Driven Development",
    description: "75+ Man-years experience in Technology in various geographies",
  },
  {
    title: "High Skilled Workforce",
    description: "75+ Man-years experience in Technology in various geographies",
  },
  {
    title: "Intellectual Property",
    description: "Access to proprietary technology & Value Chain",
  },
  {
    title: "Data Driven Development",
    description: "75+ Man-years experience in Technology in various geographies",
  },
];

const Differentiators: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Differentiators</h2>
      <div className={styles.cardsContainer}>
        {differentiatorData.map((item, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.iconContainer}>
              <FaChartBar className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDescription}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Differentiators;
