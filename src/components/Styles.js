export default function Styles(windowHeight, windowWidth) {
  return {
    container: {
      screen: {
        height: windowHeight,
      },

      web: {
        deductionSelection: {
          height: windowHeight * 0.35,
          paddingTop: windowHeight * 0.05,
        },

        salaryAmount: {
          height: windowHeight * 0.35,
        },

        results: {
          height: windowHeight * 0.25,
        },

        basic: {
          height: windowHeight * 0.95,
        },
      },

      title: {
        landing: {
          height: windowHeight * 0.55,
          paddingTop: windowHeight * 0.2,
        },

        incomeTaxExemption: {
          height: windowHeight * 0.3,
          paddingTop: windowHeight * 0.05,
        },

        socialSecurity: {
          height: windowHeight * 0.3,
          paddingTop: windowHeight * 0.05,
        },

        basic: {
          height: windowHeight * 0.7,
        },
      },

      dev: {
        height: windowHeight * 0.3,
      },

      radios: {
        height: windowHeight * 0.4,
        paddingBottom: windowHeight * 0.1,
      },

      tabs: {
        height: windowHeight * 0.15,
        paddingTop: windowHeight * 0.1,
      },

      navigation: {
        height: windowHeight * 0.1,
        paddingBottom: windowHeight * 0.05,
      },

      footer: {
        height: windowHeight * 0.05,
      },
    },

    background: {
      dark: {
        landing: {
          backgroundColor: "#222222",
        },

        basic: {
          backgroundColor: "#363636",
        },
      },

      light: {
        backgroundColor: "#c6c6c6",
      },

      white: {
        backgroundColor: "#ffffff",
      },
    },

    text: {
      dark: {
        color: "#363636",
        margin: 0,
      },

      grey: {
        color: "#787878",
        margin: 0,
      },

      light: {
        color: "#eef2f6",
        margin: 0,
      },

      white: {
        color: "#ffffff",
        margin: 0,
      },

      dev: {
        color: "#f5f5f5",
        margin: 0,
      },

      footer: {
        basic: {
          color: "#eef2f6",
          margin: 0,
        },

        name: {
          color: "#eef2f6",
        },
      },

      or: {
        padding: windowHeight * 0.03,
        fontStyle: "italic",
      },
    },

    size: {
      smaller: {
        fontSize: windowHeight * 0.01,
      },

      small: {
        fontSize: windowHeight * 0.02,
      },

      medium: {
        basic: {
          fontSize: windowHeight * 0.03,
        },

        salaryAmount: {
          fontSize: windowHeight * 0.027,
        },
      },

      big: {
        basic: {
          fontSize: windowHeight * 0.038,
        },

        landing: {
          fontSize: windowHeight * 0.04,
        },
      },

      bigger: {
        basic: {
          fontSize: windowHeight * 0.055,
        },

        landing: {
          fontSize: windowHeight * 0.06,
        },

        results: {
          fontSize: windowHeight * 0.05,
        },

        navigation: {
          fontSize: windowHeight * 0.045,
        },
      },

      custom: {
        socialSecurity: {
          fontSize: windowHeight * 0.042,
        },

        salaryAmount: {
          fontSize: windowHeight * 0.035,
        },
      },
    },

    tab: {
      height: windowHeight * 0.007,
      width: windowWidth * 0.13,
      borderRadius: 25,
    },

    radio: {
      mobile: {
        height: windowHeight * 0.03,
        width: windowHeight * 0.03,
        marginTop: windowHeight * 0.017,
        borderRadius: 50,
      },

      web: {
        height: windowHeight * 0.025,
        width: windowHeight * 0.025,
        marginTop: windowHeight * 0.01,
        borderRadius: 50,
      },
    },

    radioSelected: {
      border: "3px solid white",
    },

    input: {
      backgroundColor: "#EEF2F6",
      border: "none",
      borderRadius: 10,
      padding: windowHeight * 0.01,
      width: windowHeight * 0.31,
      color: "#363636",
      textAlign: "center",
    },
  };
}
