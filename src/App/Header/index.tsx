import React, { CSSProperties } from "react";
import styles from "./index.styles";

const Header = (): JSX.Element => {
  return (
    <header style={styles.header}>
      <span style={styles.background}></span>
      <h1 style={styles.title}>🥚 Baby progress 🐥</h1>
    </header>
  );
};

export default Header;
