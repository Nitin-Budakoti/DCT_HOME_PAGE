import React from "react";
import styles from "./Testimonial.module.css"; // Ensure this file exists
import { FaUserCircle } from "react-icons/fa"; // Ensure react-icons is installed

const Testimonial: React.FC = () => {
  return (
    <div className={styles.testimonialContainer}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <h3 className={styles.title}>TESTIMONIALS</h3>
        <h2 className={styles.subtitle}>
          Let&apos;s Read User Reviews <br />
          <span>Your opinion is very important to us!</span>
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <FaUserCircle className={styles.userIcon} />
          </div>
          <h3 className={styles.userName}>Rahul Singh</h3>
          <p className={styles.userRole}>Freelancer</p>
          <p className={styles.userFeedback}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <FaUserCircle className={styles.userIcon} />
          </div>
          <h3 className={styles.userName}>Jane Doe</h3>
          <p className={styles.userRole}>Content Creator</p>
          <p className={styles.userFeedback}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>

      {/* Scrolling Instruction */}
      <div className={styles.scrollInstruction}>
        <span className={styles.scrollText}>
          DRAG TO SCROLL & VIEW MORE
        </span>
        <span className={styles.scrollArrow}>➔</span>
      </div>
    </div>
  );
};

export default Testimonial;
