import React from 'react';
import styles from './Frame.module.css';
import Image from 'next/image';

const Frame = () => {
  return (
    <div className={styles.frameContainer}>
      {/* About Us Section */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutImageContainer}>
        <Image 
  src="/rocket.png"  // The `public/` folder is omitted in the path
  alt="Zenoheal Image" 
  className={styles.aboutImage} 
  width={500}          // Provide appropriate width
  height={300}         // Provide appropriate height
/>
        </div>
        <div className={styles.aboutTextContainer}>
          <h2 className={styles.aboutTitle}>About Us</h2>
          <h1 className={styles.aboutHeading}>
            Zenoheal: Transforming businesses with Generative AI-as-a-Service.
          </h1>
          <p className={styles.aboutText}>
            Zenoheal: Revolutionizing businesses with advanced AI. From intelligent, predictive asset monitoring to driving digital innovation, we empower industries to harness AI for a competitive edge and scalable growth.
          </p>
          <button className={styles.learnMoreButton}>Learn More</button>
        </div>
      </section>

      {/* Additional Sections */}
      <section className={styles.servicesContainer}>
        {/* Cards for services */}
      </section>

      <section className={styles.portfolioContainer}>
        {/* Portfolio Items */}
      </section>

      <section className={styles.differentiatorsContainer}>
        {/* Differentiators */}
      </section>
    </div>
  );
};

export default Frame;
