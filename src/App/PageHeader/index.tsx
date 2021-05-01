import React, { CSSProperties } from "react";
import styles from "./index.styles";

const PageHeader = (): JSX.Element => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Baby weight progression</h1>
    </header>
  );
};

export default PageHeader;
