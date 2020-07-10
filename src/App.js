import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    calculating: false,
    amount: "",

    annualSalary: "",
    netAnnualSalary: "",

    monthlySalary: "",
    netMonthlySalary: "",

    totalTax: "",
    monthlyTax: "",

    totalSS: "",
    monthlySS: "",

    msg: "",

    exemption: { person: true, family: false },

    socialSecurity: { none: true, 0.075: false, 0.1425: false, 0.2175: false },

    taxCategoryAmounts: [0, 250, 750, 1500, 2500, 3750, 247500],
  };

  calculateWithTaxIncluded = (annualSalary, selectedSS) => {
    const { exemption, taxCategoryAmounts } = this.state;

    let monthlySalary = annualSalary / 12;

    let totalTax = 0;
    let monthlyTax = 0;

    let totalSS = 0;
    let monthlySS = 0;

    let netAnnualSalary = annualSalary - totalTax;
    let netMonthlySalary = netAnnualSalary / 12;

    let taxCategory = 0;

    let amountSubjectToTax = 0;
    let remainingAmountSubjectToTax = 0;
    let amountOverMillion = 0;

    if (
      (annualSalary > 9000 && exemption.person) ||
      (annualSalary > 18000 && exemption.family)
    ) {
      if (
        (annualSalary > 1009000 && exemption.person) ||
        (annualSalary > 1018000 && exemption.family)
      ) {
        amountOverMillion =
          annualSalary - (exemption.person ? 1009000 : 1018000);
        totalTax += taxCategoryAmounts[6] + amountOverMillion * 0.3;
      } else {
        amountSubjectToTax = exemption.person
          ? annualSalary - 9000
          : annualSalary - 18000;

        if (amountSubjectToTax > 25000) {
          taxCategory = 5;
          remainingAmountSubjectToTax = amountSubjectToTax - 25000;
          totalTax += remainingAmountSubjectToTax * 0.25;
        } else {
          taxCategory = Math.floor(amountSubjectToTax / 5000);
          remainingAmountSubjectToTax = amountSubjectToTax % 5000;
          totalTax += remainingAmountSubjectToTax * ((taxCategory + 1) * 0.05);
        }

        totalTax += taxCategoryAmounts[taxCategory];
      }

      monthlyTax = totalTax / 12;
      netAnnualSalary = annualSalary - totalTax;
      netMonthlySalary = netAnnualSalary / 12;
    }

    if (selectedSS !== "none") {
      totalSS = (annualSalary > 39936 ? 39936 : annualSalary) * +selectedSS;
      monthlySS = totalSS / 12;
      netAnnualSalary -= totalSS;
      monthlySalary = annualSalary / 12;
      netMonthlySalary = netAnnualSalary / 12;
    }

    return {
      annualSalary,
      netAnnualSalary,
      monthlySalary,
      netMonthlySalary,
      totalTax,
      monthlyTax,
      totalSS,
      monthlySS,
    };
  };

  calculateWithTaxExcluded = async (netAnnualSalary, selectedSS) => {
    let salary = netAnnualSalary * 1.5;
    let factor = 1000;
    let minFactor = 0.00001;
    let difference = 0;

    while (true) {
      difference =
        this.calculateWithTaxIncluded(salary, selectedSS).netAnnualSalary -
        netAnnualSalary;

      if (difference < 0) {
        salary += factor;
        factor = factor / 10;
        salary -= factor;
      } else salary -= factor;

      if (factor === minFactor) break;
    }

    return this.calculateWithTaxIncluded(salary + minFactor, selectedSS);
  };

  roundToThreeDecimals = (num) => {
    let multiplier = Math.pow(10, 3);
    num = parseFloat((num * multiplier).toFixed(11));

    let Result = Math.round(num) / multiplier;
    return +Result.toFixed(3);
  };

  toggleExemption = (type) => {
    let { exemption } = this.state;

    exemption = {
      person: false,
      family: false,
    };
    exemption[type] = true;

    this.setState({ exemption });
  };

  selectSocialSecurity = (type) => {
    let { socialSecurity } = this.state;

    socialSecurity = {
      none: false,
      0.075: false,
      0.1425: false,
      0.2175: false,
    };
    socialSecurity[type] = true;

    this.setState({ socialSecurity });
  };

  onChange = ({ name, value }) => this.setState({ [name]: value, msg: "" });

  onSubmit = async (method) => {
    const { amount, socialSecurity } = this.state;
    const selectedSS = Object.entries(socialSecurity).filter(
      (pair) => pair[1]
    )[0][0];
    let result;

    if (amount > 10000000000) {
      this.setState({
        msg:
          "amount must not exceed 10 billion JOD! That is too much for one person per year.",
      });
      return;
    }

    this.setState({ calculating: true });

    await setTimeout(async () => {
      if (method === "included")
        result = await this.calculateWithTaxIncluded(+amount, selectedSS);
      else result = await this.calculateWithTaxExcluded(+amount, selectedSS);

      this.setState({ calculating: false, ...result });
    }, 100);
  };

  render() {
    const {
      calculating,
      amount,

      annualSalary,
      netAnnualSalary,

      monthlySalary,
      netMonthlySalary,

      totalTax,
      monthlyTax,

      totalSS,
      monthlySS,

      exemption,
      socialSecurity,
      msg,
    } = this.state;

    const {
      onChange,
      onSubmit,
      roundToThreeDecimals,
      toggleExemption,
      selectSocialSecurity,
    } = this;

    return (
      <>
        <div className="main-content">
          <div className="container">
            <div className="row m-0">
              <div className="col-12 ">
                <hr />
                <h4 className="text-center">Jordanian Salary Calculator</h4>
                <hr />
              </div>
            </div>
            <div className="row m-0">
              <div className="col-1"></div>
              <div className="col-10">
                <div className="row m-0">
                  <div className="col-12">
                    <div className="row m-0 d-flex justify-content-around flex-nowrap">
                      <div className="form-group">
                        <label className="border-bottom">
                          Income Tax Exemption
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exemption"
                            id="person"
                            value="person"
                            checked={exemption.person}
                            onChange={() => toggleExemption("person")}
                          />
                          <label className="form-check-label" htmlFor="family">
                            Person
                          </label>
                          <p className="m-0">
                            <small className="text-muted">(9,000 JOD)</small>
                          </p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exemption"
                            id="family"
                            value="family"
                            checked={exemption.family}
                            onChange={() => toggleExemption("family")}
                          />
                          <label className="form-check-label" htmlFor="family">
                            Family
                          </label>
                          <p className="m-0">
                            <small className="text-muted">(18,000 JOD)</small>
                          </p>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="border-bottom">
                          Social Security Deduction
                        </label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="socialSecurity"
                            id="none"
                            value="none"
                            checked={socialSecurity.none}
                            onChange={() => selectSocialSecurity("none")}
                          />
                          <label className="form-check-label" htmlFor="family">
                            None
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="socialSecurity"
                            id="0.075"
                            value="0.075"
                            checked={socialSecurity["0.075"]}
                            onChange={() => selectSocialSecurity("0.075")}
                          />
                          <label className="form-check-label" htmlFor="family">
                            7.5%
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="socialSecurity"
                            id="0.1425"
                            value="0.1425"
                            checked={socialSecurity["0.1425"]}
                            onChange={() => selectSocialSecurity("0.1425")}
                          />
                          <label className="form-check-label" htmlFor="family">
                            14.25%
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="socialSecurity"
                            id="0.2175"
                            value="0.2175"
                            checked={socialSecurity["0.2175"]}
                            onChange={() => selectSocialSecurity("0.2175")}
                          />
                          <label className="form-check-label" htmlFor="family">
                            21.75%
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-12">
                    <div className="form-group mb-0">
                      <label htmlFor="amount">Annual Salary</label>
                      <input
                        id="amount"
                        type="number"
                        className="form-control"
                        name="amount"
                        placeholder="Amount in JOD"
                        value={amount}
                        onChange={(event) => onChange(event.target)}
                      />
                      <small
                        className="text-danger"
                        style={{ visibility: msg ? "visible" : "hidden" }}
                      >
                        <ul>
                          <li>{msg ? msg : "msg"}</li>
                        </ul>
                      </small>
                    </div>
                  </div>
                </div>

                <div className="row m-0 d-flex justify-content-around flex-column flex-md-row">
                  <div className="text-center m-0">
                    <button
                      className="btn mt-2"
                      disabled={amount ? false : true}
                      onClick={() => onSubmit("included")}
                    >
                      Calculate for Gross Salary
                    </button>
                  </div>

                  <div className="text-center m-0">
                    <button
                      className="btn mt-2"
                      disabled={amount ? false : true}
                      onClick={() => onSubmit("excluded")}
                    >
                      Calculate for Net Salary
                    </button>
                  </div>
                </div>
                <div
                  className="row d-flex justify-content-center mt-1"
                  style={{ visibility: calculating ? "visible" : "hidden" }}
                >
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Calculating...</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-1"></div>
              <div className="col-10">
                <hr />
                <div className="row d-flex justify-content-around flex-column flex-lg-row">
                  <div className="mt-2">
                    <div className=" text-center">
                      <label className="border-bottom">Salaries</label>
                    </div>
                    <pre className="m-1">
                      <b>Gross Annual Salary: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(annualSalary)
                      )}
                    </pre>
                    <pre className="m-1 mb-2">
                      <b>Net Annual Salary: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(netAnnualSalary)
                      )}
                    </pre>

                    <pre className="m-1">
                      <b>Gross Monthly Salary: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(monthlySalary)
                      )}
                    </pre>
                    <pre className="m-1">
                      <b>Net Monthly Salary: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(netMonthlySalary)
                      )}
                    </pre>
                  </div>

                  <div className="mt-2">
                    <div className=" text-center">
                      <label className="border-bottom">Deductions</label>
                    </div>
                    <pre className="m-1">
                      <b>Total Income Tax: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(totalTax)
                      )}
                    </pre>
                    <pre className="m-1 mb-3">
                      <b>Monthly Income Tax: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(monthlyTax)
                      )}
                    </pre>
                    <pre className="m-1">
                      <b>Total Social Security: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(totalSS)
                      )}
                    </pre>
                    <pre className="m-1">
                      <b>Monthly Social Security: </b>
                      {new Intl.NumberFormat("ja-JP").format(
                        roundToThreeDecimals(monthlySS)
                      )}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <footer>
          <div className="container">
            <div className="py-3 text-right">
              Developed by:
              <a
                href="https://www.linkedin.com/in/ahmad-ghzawi-827082139/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                {" "}
                Ahmad Al-Ghzawi
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
