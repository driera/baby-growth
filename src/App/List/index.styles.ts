import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  grid: {
    display: "grid",
    gap: "20px",
    padding: "0 20px"
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
    width: "50px",
    height: "50px",
    padding: "9px 11px 13px",
    borderRadius: "25px",
    background: "var(--grey-color)"
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
