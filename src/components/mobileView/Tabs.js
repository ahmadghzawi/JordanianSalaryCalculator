import React from "react";

export default function Tabs(props) {
  const { styles, selected } = props;

  const tabs = [];
  for (let tabIndex = 1; tabIndex < 6; tabIndex++) {
    if (tabIndex === selected)
      tabs.push(
        <div
          key={tabIndex}
          style={{ ...styles.tab, ...styles.background.dark.basic }}
        ></div>
      );
    else
      tabs.push(
        <div
          key={tabIndex}
          style={{ ...styles.tab, ...styles.background.white }}
        ></div>
      );
  }

  return (
    <div style={{ width: "75%", margin: "0 auto" }}>
      <div
        className="d-flex align-items-center justify-content-between"
        style={styles.container.tabs}
      >
        {tabs}
      </div>
    </div>
  );
}
