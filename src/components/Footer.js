import React from "react";

export default function Footer(props) {
  const { styles, isMobile } = props;

  return (
    <div
      style={{ ...styles.container.footer, ...styles.background.dark.basic }}
    >
      <p
        className="celine-peach-sans float-right pr-3"
        style={{ ...styles.text.footer.basic, ...styles.size.small }}
      >
        {!isMobile && "DEVELOPED BY "}
        <a
          className="celine-peach-script"
          href="https://www.linkedin.com/in/ahmad-al-ghzawi/"
          target="__blank"
          style={{ ...styles.text.footer.name, ...styles.size.medium.basic }}
        >
          Ahmad Ghzawi
        </a>
      </p>
    </div>
  );
}
