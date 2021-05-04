import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  form: {
    display: "grid",
    gridAutoFlow: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    background: "var(--grey-color)",
    borderRadius: "40px"
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
    minWidth: "180px",
    cursor: "pointer",
    border: "none",
    padding: "15px 30px",
    borderRadius: "30px",
    color: "var(--light-color)",
    background: "var(--main-color)",
    fontWeight: 600,
    fontSize: "14px",
    textTransform: "uppercase"
  }
};

export default styles;
