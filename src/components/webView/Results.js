import React from "react";

export default function Results(props) {
  const { state, styles, roundToThreeDecimals } = props;

  const {
    annualSalary,
    netAnnualSalary,
    monthlySalary,
    netMonthlySalary,
    totalTax,
    monthlyTax,
    totalSS,
    monthlySS,
  } = state;

  return (
    <div className="row m-0" style={styles.container.web.results}>
      <div className="col-1"></div>
      <div className="col-10">
        <div className="row d-flex justify-content-around">
          <div>
            <div className="text-center">
              <p
                style={{
                  ...styles.size.medium.basic,
                  ...styles.text.dark,
                  borderBottom: "1px solid #0000001a",
                }}
              >
                SALARIES
              </p>
            </div>
            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Gross Annual Salary:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(annualSalary)
                )}{" "}
                JOD
              </span>
            </p>
            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Net Annual Salary:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(netAnnualSalary)
                )}{" "}
                JOD
              </span>
            </p>

            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Gross Monthly Salary:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(monthlySalary)
                )}{" "}
                JOD
              </span>
            </p>
            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Net Monthly Salary:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(netMonthlySalary)
                )}{" "}
                JOD
              </span>
            </p>
          </div>

          <div>
            <div className=" text-center">
              <p
                style={{
                  ...styles.size.medium.basic,
                  ...styles.text.dark,
                  borderBottom: "1px solid #0000001a",
                }}
              >
                DEDUCTIONS
              </p>
            </div>
            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Total Income Tax:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(totalTax)
                )}{" "}
                JOD
              </span>
            </p>
            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Monthly Income Tax:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(monthlyTax)
                )}{" "}
                JOD
              </span>
            </p>
            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Total Social Security:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(totalSS)
                )}{" "}
                JOD
              </span>
            </p>
            <p style={{ ...styles.text.dark, ...styles.size.small }}>
              Monthly Social Security:{" "}
              <span
                style={{
                  ...styles.text.white,
                  ...styles.size.medium.basic,
                }}
              >
                {new Intl.NumberFormat("ja-JP").format(
                  roundToThreeDecimals(monthlySS)
                )}{" "}
                JOD
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
