import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
    display: "grid",
    alignContent: "start",
    gridTemplateRows: "auto auto 1fr",
    gap: "10px",
    overflow: "hidden"
  }
};

export default styles;
