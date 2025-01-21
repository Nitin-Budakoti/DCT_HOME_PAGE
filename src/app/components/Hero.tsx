import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className={styles.title}>AI Excellence Delivered</h1>
        <p className={styles.subtitle}>
          Grow smarter, grow faster as we need Solutions at the right place and at Zenoheal we are empowering all your digital twin needs
        </p>
        <div className={styles.buttonContainer}>
          <a href="#get-started" className={styles.button}>Get Started    →</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
