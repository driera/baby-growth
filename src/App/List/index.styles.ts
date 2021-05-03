import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  weightGrid: {
    display: "grid",
    gap: "10px",
    padding: "0 20px"
  },
  weightLine: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto minmax(120px, auto) minmax(60px, auto) auto",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px"
  },
  weightValue: {
    display: "block",
    textAlign: "end"
  },
  removeButton: {
    color: "var(--main-color)",
    fontSize: "30px",
    lineHeight: "16px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: 0
  }
};

export default styles;
