import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "grid",
    justifyItems: "center",
    padding: "30px 20px",
    overflow: "auto"
  },
  grid: {
    display: "grid",
    gap: "20px"
  },
  line: {
    display: "grid",
    gridAutoFlow: "column",
    gridTemplateColumns: "auto auto auto",
    justifyContent: "flex-start",
    alignItems: "start",
    gap: "20px",
    fontSize: "20px"
  },
  removeButton: {
    alignSelf: "center",
    color: "var(--main-color)",
    fontSize: "30px",
    lineHeight: "16px",
    border: "none",
    background: "transparent",
    cursor: "pointer",
    padding: 0
  },
  icon: {
    alignSelf: "center",
    width: "40px",
    height: "40px",
    padding: "6px 8px 10px",
    borderRadius: "25px",
    background: "var(--grey-color)",
    opacity: "0.5"
  },
  content: {
    display: "grid"
  },
  contentLabel: {
    fontSize: "12px",
    color: "var(--main-color)"
  },
  contentData: {
    display: "grid",
    gridAutoFlow: "column",
    alignItems: "center",
    minHeight: "26px"
  },
  value: {
    minWidth: "120px",
    fontSize: "26px",
    fontWeight: 600,
    fontVariantNumeric: "lining-nums"
  },
  unit: {
    fontSize: "0.75em",
    fontWeight: "bold"
  }
};

export default styles;
