import React from "react";
import Navigation from "./mobileView/Navigation";

export default function LandingScreen(props) {
  const { state, swiper, styles } = props;

  const { isMobile } = state;

  return (
    <div
      style={{ ...styles.container.screen, ...styles.background.dark.landing }}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={styles.container.title.landing}
      >
        <p style={{ ...styles.text.grey, ...styles.size.big.landing }}>
          JORDANIAN
        </p>
        <p style={{ ...styles.text.light, ...styles.size.bigger.landing }}>
          SALARY
        </p>
        <p style={{ ...styles.text.grey, ...styles.size.big.landing }}>+</p>
        <p style={{ ...styles.text.light, ...styles.size.bigger.landing }}>
          DEDUCTIONS
        </p>
        <p style={{ ...styles.text.grey, ...styles.size.big.landing }}>
          CALCULATOR
        </p>
      </div>
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={styles.container.dev}
      >
        <p
          className="celine-peach-sans"
          style={{ ...styles.text.dev, ...styles.size.small }}
        >
          DEVELOPED BY
        </p>

        <a
          className="celine-peach-script"
          href="https://www.linkedin.com/in/ahmad-al-ghzawi/"
          target="__blank"
          style={{ ...styles.text.white, ...styles.size.bigger.basic }}
        >
          Ahmad Ghzawi
        </a>
      </div>

      {isMobile && <Navigation styles={styles} swiper={swiper} start={true} />}
    </div>
  );
}
