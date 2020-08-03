import React from "react";
import Footer from "../Footer";
import Tabs from "./Tabs";
import Navigation from "./Navigation";

export default function SalariesScreen(props) {
  const { state, swiper, roundToThreeDecimals, styles } = props;

  const {
    annualSalary,
    netAnnualSalary,
    monthlySalary,
    netMonthlySalary,
    isMobile
  } = state;

  return (
    <div style={styles.container.screen}>
      <div style={styles.background.light}>
        <Tabs styles={styles} selected={4} />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={styles.container.title.basic}
        >
          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Gross Annual Salary
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(annualSalary)
            )}{" "}
            JOD
          </p>

          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Net Annual Salary
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(netAnnualSalary)
            )}{" "}
            JOD
          </p>

          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Gross Monthly Salary
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(monthlySalary)
            )}{" "}
            JOD
          </p>

          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            Net Monthly Salary
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.results,
              textAlign: "center",
            }}
          >
            {new Intl.NumberFormat("ja-JP").format(
              roundToThreeDecimals(netMonthlySalary)
            )}{" "}
            JOD
          </p>
        </div>

        <Navigation styles={styles} swiper={swiper} />
      </div>
      <Footer styles={styles} isMobile={isMobile}/>
    </div>
  );
}
