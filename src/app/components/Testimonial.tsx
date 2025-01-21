import React from "react";
import styles from "./Testimonial.module.css"; // Ensure this file exists
import { FaUserCircle } from "react-icons/fa"; // Ensure react-icons is installed

const Testimonial: React.FC = () => {
  return (
    <div className={styles?.testimonialContainer || "testimonialContainerFallback"}>
      {/* Header Section */}
      <div className={styles?.headerSection || "headerSectionFallback"}>
        <h3 className={styles?.title || "titleFallback"}>TESTIMONIALS</h3>
        <h2 className={styles?.subtitle || "subtitleFallback"}>
          Let's Read User Reviews <br />
          <span>Your opinion is very important to us!</span>
        </h2>
      </div>

      {/* Testimonial Cards */}
      <div className={styles?.cardsContainer || "cardsContainerFallback"}>
        <div className={styles?.card || "cardFallback"}>
          <div className={styles?.imageContainer || "imageContainerFallback"}>
            <FaUserCircle className={styles?.userIcon || "userIconFallback"} />
          </div>
          <h3 className={styles?.userName || "userNameFallback"}>Rahul Singh</h3>
          <p className={styles?.userRole || "userRoleFallback"}>Freelancer</p>
          <p className={styles?.userFeedback || "userFeedbackFallback"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className={styles?.card || "cardFallback"}>
          <div className={styles?.imageContainer || "imageContainerFallback"}>
            <FaUserCircle className={styles?.userIcon || "userIconFallback"} />
          </div>
          <h3 className={styles?.userName || "userNameFallback"}>Jane Doe</h3>
          <p className={styles?.userRole || "userRoleFallback"}>Content Creator</p>
          <p className={styles?.userFeedback || "userFeedbackFallback"}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>

      {/* Scrolling Instruction */}
      <div className={styles?.scrollInstruction || "scrollInstructionFallback"}>
        <span className={styles?.scrollText || "scrollTextFallback"}>
          DRAG TO SCROLL & VIEW MORE
        </span>
        <span className={styles?.scrollArrow || "scrollArrowFallback"}>➔</span>
      </div>
    </div>
  );
};

export default Testimonial;
