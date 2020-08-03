import React from "react";
import SplashScreen from "./SplashScreen";
import Footer from "../Footer";
import DeductionSelection from "./DeductionSelection";
import SalaryAmount from "./SalaryAmount";
import Results from "./Results";

export default function WebView(props) {
  const { styles } = props;

  return (
    <>
      <SplashScreen {...props}  />
      <div style={{ ...styles.container.web.basic, ...styles.background.light }}>
        <div className="container">
          <DeductionSelection {...props} />
          <SalaryAmount {...props} />
          <Results {...props} />
        </div>
      </div>
      <Footer styles={styles} />
    </>
  );
}
