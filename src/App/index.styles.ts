import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    padding: "0 30px",
    margin: "0 auto",
    display: "grid",
    justifyItems: "center",
    alignContent: "start",
    gap: "40px",
    overflow: "hidden"
  }
};

export default styles;
