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
  }
};

export default styles;
