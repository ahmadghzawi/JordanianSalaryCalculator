import React from "react";
import Footer from "../Footer";
import Tabs from "./Tabs";
import Navigation from "./Navigation";

export default function SalaryAmountScreen(props) {
  const { state, onChange, onSubmit, swiper, styles } = props;

  const { amount, disableInput, msg , isMobile} = state;

  return (
    <div style={styles.container.screen}>
      <div style={styles.background.light}>
        <Tabs styles={styles} selected={3} />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={styles.container.title.basic}
        >
          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            PLEASE FILL IN YOUR
          </p>
          <input
            type="number"
            id="custom-input"
            placeholder="Gross Annual Salary"
            name="amount"
            value={disableInput === "gross" ? "" : amount}
            style={{ ...styles.input, ...styles.size.medium.salaryAmount }}
            onChange={({ target }) =>
              onChange({ name: target.name, value: target.value }, "net")
            }
            disabled={disableInput === "gross" ? "disabled" : ""}
          />
          <p
            style={{ ...styles.text.dark, ...styles.size.custom.salaryAmount }}
          >
            TO CALCULATE
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.basic,
              textAlign: "center",
            }}
          >
            NET SALARY
          </p>
          <p
            style={{
              ...styles.text.dark,
              ...styles.size.medium.basic,
              ...styles.text.or,
            }}
          >
            OR
          </p>
          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            FILL IN YOUR
          </p>
          <input
            type="number"
            id="custom-input"
            placeholder="Net Annual Salary"
            name="amount"
            value={disableInput === "net" ? "" : amount}
            style={{ ...styles.input, ...styles.size.medium.basic }}
            onChange={({ target }) =>
              onChange({ name: target.name, value: target.value }, "gross")
            }
            disabled={disableInput === "net" ? "disabled" : ""}
          />
          <p
            style={{ ...styles.text.dark, ...styles.size.custom.salaryAmount }}
          >
            TO CALCULATE
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.basic,
              textAlign: "center",
            }}
          >
            GROSS SALARY
          </p>
        </div>

        <Navigation
          styles={styles}
          swiper={swiper}
          disableInput={disableInput}
          onSubmit={onSubmit}
          msg={msg}
        />
      </div>
      <Footer styles={styles} isMobile={isMobile}/>
    </div>
  );
}
