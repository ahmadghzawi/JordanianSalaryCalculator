import React from "react";

export default function Navigation(props) {
  const {
    styles,
    refreshApp,
    swiper,
    start,
    end,
    disableInput,
    onSubmit,
    msg,
  } = props;

  return (
    <div
      className="d-flex justify-content-around"
      style={styles.container.navigation}
    >
      <button
        className={start ? "invisible" : "btn bg-transparent"}
        style={{ ...styles.text.dark, ...styles.size.medium.basic }}
        onClick={start ? null : () => swiper.slidePrev(750)}
      >
        {"< "}&nbsp;BACK
      </button>
      {onSubmit ? (
        <button
          className={
            disableInput === "" || msg !== ""
              ? "invisible"
              : "btn bg-transparent"
          }
          style={{ ...styles.text.dark, ...styles.size.medium.basic }}
          onClick={() => {
            onSubmit(disableInput === "net" ? "included" : "excluded");
            swiper.slideNext(750);
          }}
        >
          NEXT&nbsp;{" >"}
        </button>
      ) : !end ? (
        <button
          className="btn bg-transparent"
          style={
            start
              ? { ...styles.text.light, ...styles.size.medium.basic }
              : { ...styles.text.dark, ...styles.size.medium.basic }
          }
          onClick={() => swiper.slideNext(750)}
        >
          NEXT&nbsp;{" >"}
        </button>
      ) : (
        <button className="btn bg-transparent">
          <i
            className="fa fa-home"
            style={{ ...styles.text.dark, ...styles.size.bigger.navigation }}
            onClick={() => {
              refreshApp();
              swiper.slideNext(750);
            }}
          ></i>
        </button>
      )}
    </div>
  );
}
