import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  header: {
    justifySelf: "center",
    padding: "20px 0",
    fontFamily: "var(--secondary-font)"
  },

  background: {
    position: "absolute",
    top: "-100px",
    left: "-10%",
    width: "120%",
    height: "160px",
    borderRadius: "200%",
    border: "2px solid var(--secondary-color)",
    background:
      "linear-gradient(to bottom, var(--secondary-color) 30%, var(--main-color))"
  },

  title: {
    position: "relative",
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "40px",
    border: "2px solid var(--secondary-color)",
    background: "var(--light-color)"
  }
};

export default styles;
