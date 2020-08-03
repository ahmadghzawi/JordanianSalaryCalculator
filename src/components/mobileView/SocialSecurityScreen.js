import React from "react";
import Footer from "../Footer";
import Tabs from "./Tabs";
import Navigation from "./Navigation";

export default function SocialSecurityScreen(props) {
  const { state, selectSocialSecurity, swiper, styles } = props;

  const { socialSecurity, isMobile } = state;

  return (
    <div style={styles.container.screen}>
      <div style={styles.background.light}>
        <Tabs styles={styles} selected={2} />
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={styles.container.title.socialSecurity}
        >
          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            PLEASE SELECT YOUR
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.custom.socialSecurity,
              textAlign: "center",
            }}
          >
            SOCIAL SECURITY
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.bigger.basic,
              textAlign: "center",
            }}
          >
            DEDUCTION
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
                  socialSecurity["none"]
                    ? {
                        ...styles.radio.mobile,
                        ...styles.radioSelected,
                        ...styles.background.dark.basic,
                      }
                    : { ...styles.radio.mobile, ...styles.background.white }
                }
                onClick={() => selectSocialSecurity("none")}
              ></div>
              <div className="m-0 p-0 ml-3">
                <p
                  className="m-0 p-0"
                  style={{ ...styles.text.white, ...styles.size.big.basic }}
                >
                  NONE
                </p>
                <p
                  className="invisible"
                  style={{
                    ...styles.text.dark,
                    ...styles.size.medium.basic,
                  }}
                >
                  &nbsp;
                </p>
              </div>
            </div>
            <div className="d-flex mt-2">
              <div
                style={
                  socialSecurity["0.075"]
                    ? {
                        ...styles.radio.mobile,
                        ...styles.radioSelected,
                        ...styles.background.dark.basic,
                      }
                    : { ...styles.radio.mobile, ...styles.background.white }
                }
                onClick={() => {
                  selectSocialSecurity("0.075");
                }}
              ></div>
              <div className="m-0 p-0 ml-3">
                <p
                  className="m-0 p-0"
                  style={{ ...styles.text.white, ...styles.size.big.basic }}
                >
                  7.5 %
                </p>
                <p
                  className="invisible"
                  style={{
                    ...styles.text.dark,
                    ...styles.size.medium.basic,
                  }}
                >
                  &nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
        <Navigation styles={styles} swiper={swiper} />
      </div>
      <Footer styles={styles} isMobile={isMobile} />
    </div>
  );
}
