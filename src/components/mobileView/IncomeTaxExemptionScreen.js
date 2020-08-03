import React from "react";
import Footer from "../Footer";
import Tabs from "./Tabs";
import Navigation from "./Navigation";

export default function IncomeTaxExemptionScreen(props) {
  const { state, selectExemption, swiper, styles } = props;

  const { exemption, isMobile} = state;

  return (
    <div style={styles.container.screen}>
      <div style={styles.background.light}>
        <Tabs styles={styles} selected={1} />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={styles.container.title.incomeTaxExemption}
        >
          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            PLEASE SELECT YOUR
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.basic,
              textAlign: "center",
            }}
          >
            INCOME TAX
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.basic,
              textAlign: "center",
            }}
          >
            EXEMPTION
          </p>
        </div>
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={styles.container.radios}
        >
          <div>
            <div className="d-flex">
              <div
                style={
                  exemption.single
                    ? {
                        ...styles.radio.mobile,
                        ...styles.radioSelected,
                        ...styles.background.dark.basic,
                      }
                    : { ...styles.radio.mobile, ...styles.background.white }
                }
                onClick={() => selectExemption("single")}
              ></div>
              <div className="m-0 p-0 ml-3">
                <p
                  className="m-0 p-0"
                  style={{ ...styles.text.white, ...styles.size.big.basic }}
                >
                  SINGLE
                </p>
                <p
                  style={{
                    ...styles.text.dark,
                    ...styles.size.medium.basic,
                  }}
                >
                  (9,000 JOD)
                </p>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div
                style={
                  exemption.family
                    ? {
                        ...styles.radio.mobile,
                        ...styles.radioSelected,
                        ...styles.background.dark.basic,
                      }
                    : { ...styles.radio.mobile, ...styles.background.white }
                }
                onClick={() => {
                  selectExemption("family");
                }}
              ></div>
              <div className="m-0 p-0 ml-3">
                <p
                  className="m-0 p-0"
                  style={{ ...styles.text.white, ...styles.size.big.basic }}
                >
                  FAMILY
                </p>
                <p
                  style={{
                    ...styles.text.dark,
                    ...styles.size.medium.basic,
                  }}
                >
                  (18,000 JOD)
                </p>
              </div>
            </div>
          </div>
        </div>
        <Navigation styles={styles} swiper={swiper} />
      </div>
      <Footer styles={styles} isMobile={isMobile}/>
    </div>
  );
}
