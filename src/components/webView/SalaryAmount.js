import React from "react";

export default function SalaryAmount(props) {
  const { state, styles, onChange, onSubmit } = props;

  const { amount, msg, disableInput } = state;

  return (
    <div style={styles.container.web.salaryAmount}>
      <div className="row m-0 pt-2 pb-2">
        <div className="col-1"></div>
        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
          <p style={{ ...styles.text.dark, ...styles.size.big.basic }}>
            FILL IN YOUR
          </p>
          <input
            type="number"
            id="custom-input"
            placeholder="Gross Annual Salary"
            name="amount"
            value={disableInput === "gross" ? "" : amount}
            style={{
              ...styles.input,
              ...styles.size.medium.salaryAmount,
            }}
            onChange={({ target }) =>
              onChange({ name: target.name, value: target.value }, "net")
            }
            disabled={disableInput === "gross" ? "disabled" : ""}
          />
          <p
            style={{
              ...styles.text.dark,
              ...styles.size.custom.salaryAmount,
            }}
          >
            TO CALCULATE
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.big.basic,
              textAlign: "center",
            }}
          >
            NET SALARY
          </p>
        </div>
        <p
          className="col-2 d-flex flex-column align-items-center justify-content-center"
          style={{
            ...styles.text.dark,
            ...styles.size.medium.basic,
            ...styles.text.or,
            fontStyle: "none",
          }}
        >
          OR
        </p>
        <div className="col-4 d-flex flex-column align-items-center justify-content-center">
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
            style={{
              ...styles.text.dark,
              ...styles.size.custom.salaryAmount,
            }}
          >
            TO CALCULATE
          </p>
          <p
            style={{
              ...styles.text.white,
              ...styles.size.big.basic,
              textAlign: "center",
            }}
          >
            GROSS SALARY
          </p>
        </div>
      </div>
      <div className="row m-0 ">
        <div className="col-5"></div>
        <div className="col-2">
          <div className="text-center m-0">
            <button
              className="btn"
              style={{
                ...styles.background.dark.basic,
                ...styles.text.white,
                ...styles.size.small,
              }}
              disabled={amount && msg === "" ? false : true}
              onClick={() =>
                onSubmit(disableInput === "net" ? "included" : "excluded")
              }
            >
              CALCULATE
            </button>
          </div>
        </div>
      </div>
      <hr className="border-secondary" />
    </div>
  );
}
