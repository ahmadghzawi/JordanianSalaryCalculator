import React from "react";

export default function DeductionSelection(props) {
  const { state, styles, selectExemption, selectSocialSecurity } = props;

  const { exemption, socialSecurity } = state;

  return (
    <div style={styles.container.web.deductionSelection}>
      <div className="row m-0 d-flex justify-content-center flex-nowrap">
        <div className="pr-5" style={{ borderRight: "1px solid #0000001a" }}>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p
              style={{
                ...styles.text.white,
                ...styles.size.big.basic,
                textAlign: "center",
              }}
            >
              INCOME TAX
            </p>
            <p
              style={{
                ...styles.text.white,
                ...styles.size.big.basic,
                textAlign: "center",
              }}
            >
              EXEMPTION
            </p>
          </div>
          <hr />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <div className="d-flex">
                <div
                  style={
                    exemption.single
                      ? {
                          ...styles.radio.web,
                          ...styles.radioSelected,
                          ...styles.background.dark.basic,
                        }
                      : {
                          ...styles.radio.web,
                          ...styles.background.white,
                        }
                  }
                  onClick={() => selectExemption("single")}
                ></div>
                <div className="m-0 p-0 ml-3">
                  <p
                    className="m-0 p-0"
                    style={{
                      ...styles.text.white,
                      ...styles.size.medium.basic,
                    }}
                  >
                    SINGLE{" "}
                    <span
                      style={{
                        ...styles.text.dark,
                        ...styles.size.small,
                      }}
                    >
                      (9,000 JOD)
                    </span>
                  </p>
                </div>
              </div>
              <div className="d-flex mt-2">
                <div
                  style={
                    exemption.family
                      ? {
                          ...styles.radio.web,
                          ...styles.radioSelected,
                          ...styles.background.dark.basic,
                        }
                      : {
                          ...styles.radio.web,
                          ...styles.background.white,
                        }
                  }
                  onClick={() => {
                    selectExemption("family");
                  }}
                ></div>
                <div className="m-0 p-0 ml-3">
                  <p
                    className="m-0 p-0"
                    style={{
                      ...styles.text.white,
                      ...styles.size.medium.basic,
                    }}
                  >
                    FAMILY{" "}
                    <span
                      style={{
                        ...styles.text.dark,
                        ...styles.size.small,
                      }}
                    >
                      (18,000 JOD)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-5">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p
              style={{
                ...styles.text.white,
                ...styles.size.big.basic,
                textAlign: "center",
              }}
            >
              SOCIAL SECURITY
            </p>
            <p
              style={{
                ...styles.text.white,
                ...styles.size.big.basic,
                textAlign: "center",
              }}
            >
              DEDUCTION
            </p>
          </div>
          <hr />
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <div className="d-flex">
                <div
                  style={
                    socialSecurity["none"]
                      ? {
                          ...styles.radio.web,
                          ...styles.radioSelected,
                          ...styles.background.dark.basic,
                        }
                      : { ...styles.radio.web, ...styles.background.white }
                  }
                  onClick={() => selectSocialSecurity("none")}
                ></div>
                <div className="m-0 p-0 ml-3">
                  <p
                    className="m-0 p-0"
                    style={{
                      ...styles.text.white,
                      ...styles.size.medium.basic,
                    }}
                  >
                    NONE
                  </p>
                </div>
              </div>
              <div className="d-flex mt-2">
                <div
                  style={
                    socialSecurity["0.075"]
                      ? {
                          ...styles.radio.web,
                          ...styles.radioSelected,
                          ...styles.background.dark.basic,
                        }
                      : { ...styles.radio.web, ...styles.background.white }
                  }
                  onClick={() => {
                    selectSocialSecurity("0.075");
                  }}
                ></div>
                <div className="m-0 p-0 ml-3">
                  <p
                    className="m-0 p-0"
                    style={{
                      ...styles.text.white,
                      ...styles.size.medium.basic,
                    }}
                  >
                    7.5 %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-secondary" />
    </div>
  );
}
