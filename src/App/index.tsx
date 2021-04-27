import React, { CSSProperties, FunctionComponent } from "react";

const App: FunctionComponent = () => {
  const headerStyles: CSSProperties = {
    padding: "20px 0"
  };

  const titleStyles: CSSProperties = {
    textAlign: "center",
    fontSize: 34,
    fontWeight: "bold"
  };
  return (
    <div>
      <header style={headerStyles}>
        <h1 style={titleStyles}>Baby weight progression</h1>
      </header>
    </div>
  );
};

export default App;
