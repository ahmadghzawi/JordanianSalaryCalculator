import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow } from "swiper";
import "swiper/swiper-bundle.css";
import "./App.css";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingScreen from "./components/LandingScreen";
import IncomeTaxExemptionScreen from "./components/mobileView/IncomeTaxExemptionScreen";
import SocialSecurityScreen from "./components/mobileView/SocialSecurityScreen";
import SalaryAmountScreen from "./components/mobileView/SalaryAmountScreen";
import SalariesScreen from "./components/mobileView/SalariesScreen";
import DeductionsScreen from "./components/mobileView/DeductionsScreen";
import Styles from "./components/Styles";
import WebView from "./components/webView/WebView";

SwiperCore.use([EffectCoverflow]);
toast.configure({ transition: Slide });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.swiper = null;
    this.styles = null;
  }

  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,

    isMobile: window.innerWidth <= 1024,

    disableInput: "",

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
    msgCounter: 0,

    exemption: { single: true, family: false },

    socialSecurity: {
      none: true,
      0.075: false,
      0.1425: false,
      0.2175: false,
    },

    taxCategoryAmounts: [0, 250, 750, 1500, 2500, 3750, 247500],
  };

  componentDidMount() {
    this.setState({});
    this.updateSize();
    console.log(
      "Developed By: Ahmad Al-Ghzawi\nE-mail: ahmd.ghzawi@gmail.com\nMobile No.: +962 799 6788 34"
    );
  }

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
      (annualSalary > 9000 && exemption.single) ||
      (annualSalary > 18000 && exemption.family)
    ) {
      if (
        (annualSalary > 1009000 && exemption.single) ||
        (annualSalary > 1018000 && exemption.family)
      ) {
        amountOverMillion =
          annualSalary - (exemption.single ? 1009000 : 1018000);
        totalTax += taxCategoryAmounts[6] + amountOverMillion * 0.3;
      } else {
        amountSubjectToTax = exemption.single
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

  selectExemption = async (type) => {
    let { exemption } = this.state;

    exemption = {
      single: false,
      family: false,
    };
    exemption[type] = true;

    await this.setState({ exemption });
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

  onChange = async ({ name, value }, inputName) => {
    if (value > 1000000000) {
      await this.setState({
        [name]: value,
        msg: "Salary amount must not exceed 1 billion JOD!",
        msgCounter: ++this.state.msgCounter,
      });
      if (this.state.msgCounter === 1) this.notify();
    } else await this.setState({ [name]: value, msg: "", msgCounter: 0 });
    let { amount, disableInput } = this.state;

    if (amount === "") disableInput = "";
    else disableInput = inputName;

    this.setState({ disableInput });
  };

  onSubmit = async (method) => {
    const { amount, socialSecurity } = this.state;
    const selectedSS = Object.entries(socialSecurity).filter(
      (pair) => pair[1]
    )[0][0];
    let result;

    if (method === "included")
      result = await this.calculateWithTaxIncluded(+amount, selectedSS);
    else result = await this.calculateWithTaxExcluded(+amount, selectedSS);

    this.setState({ ...result });
  };

  updateSize = () => {
    if (window.innerHeight <= 535 && window.innerWidth > 1024) {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: 535,
        isMobile: false,
      });

      this.styles = Styles(535, window.innerWidth);
    } else {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        isMobile: window.innerWidth <= 1024,
      });

      this.styles = Styles(window.innerHeight, window.innerWidth);
    }
  };

  initializeStyles = () => {
    const { windowHeight, windowWidth } = this.state;
    return Styles(windowHeight, windowWidth);
  };

  refreshApp = () => {
    this.setState({
      disableInput: "",

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

      exemption: { single: true, family: false },

      socialSecurity: {
        none: true,
        0.075: false,
        0.1425: false,
        0.2175: false,
      },
    });
  };

  notify = () => {
    toast.error(this.state.msg, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      progress: 0,
    });
  };

  render() {
    const { windowHeight, isMobile } = this.state;

    const { updateSize, initializeStyles } = this;

    this.styles = initializeStyles();

    window.addEventListener("resize", updateSize);

    if (isMobile)
      // MobileView
      return (
        <div style={{ height: windowHeight, overflow: "hidden" }}>
          <Swiper
            effect="coverflow"
            loop={true}
            allowTouchMove={false}
            runCallbacksOnInit={true}
            onInit={(swiper) => (this.swiper = swiper)}
          >
            <SwiperSlide>
              <LandingScreen {...this} />
            </SwiperSlide>
            <SwiperSlide>
              <IncomeTaxExemptionScreen {...this} />
            </SwiperSlide>
            <SwiperSlide>
              <SocialSecurityScreen {...this} />
            </SwiperSlide>
            <SwiperSlide>
              <SalaryAmountScreen {...this} />
            </SwiperSlide>
            <SwiperSlide>
              <SalariesScreen {...this} />
            </SwiperSlide>
            <SwiperSlide>
              <DeductionsScreen {...this} />
            </SwiperSlide>
          </Swiper>
        </div>
      );

    return <WebView {...this} />;
  }
}
