import React from "react";
import Footer from "../Footer";
import Tabs from "./Tabs";
import Navigation from "./Navigation";


export default function DeductionsScreen(props) {
  const { state, swiper, refreshApp, roundToThreeDecimals, styles } = props;

  const { totalTax, monthlyTax, totalSS, monthlySS, isMobile } = state;

  return (
    <div style={styles.container.screen}>
      <div style={styles.background.light}>
        <Tabs styles={styles} selected={5} />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={styles.container.title.basic}
        >
          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Annual Income Tax
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(totalTax)
            )}{" "}
            JOD
          </p>

          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Monthly Income Tax
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(monthlyTax)
            )}{" "}
            JOD
          </p>

          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Annual Social Security
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(totalSS)
            )}{" "}
            JOD
          </p>

          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Monthly Social Security
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(monthlySS)
            )}{" "}
            JOD
          </p>
        </div>
        <Navigation
          styles={styles}
          swiper={swiper}
          refreshApp={refreshApp}
          end={true}
        />
      </div>
      <Footer styles={styles} isMobile={isMobile}/>
    </div>
  );
}
