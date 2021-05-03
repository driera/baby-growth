import React, { CSSProperties } from "react";
import styles from "./index.styles";

const Header = (): JSX.Element => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Baby weight progression</h1>
    </header>
  );
};

export default Header;
