import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  form: {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    marginBottom: "20px",
    border: "1px dashed var(--grey-color)"
  },
  weightLabel: {
    fontSize: "14px",
    fontWeight: 600
  },
  weightInput: {
    marginLeft: "5px"
  },
  checkboxLabel: {
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 600,
    userSelect: "none"
  },
  checkbox: {
    marginRight: "5px"
  },
  submit: {
    cursor: "pointer",
    border: "none",
    padding: "8px 20px",
    borderRadius: "5px",
    background: "var(--main-color)",
    fontWeight: 600,
    fontSize: "14px"
  },
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
